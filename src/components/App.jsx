import React, { Component, Fragment } from 'react';

import * as logo from '../logo.png'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            hasLoaded: false,
            dataArr: [],
            usePeople: false,
        }
    }
    componentDidMount() {

    };
    fetchAPI = (path) => {

        fetch(path)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                if (data) {
                    this.setState({ dataArr: data })
                } else {
                    this.setState({ dataArr: [] })
                }
            });
    };

    handleMovie = () => {
        let path = "https://ghibliapi.herokuapp.com/films/";
        this.fetchAPI(path);
        this.setState({ hasLoaded: true, usePeople: false });

    }
    handlePeople = () => {
        let path = "https://ghibliapi.herokuapp.com/people";
        this.fetchAPI(path);
        this.setState({ hasLoaded: true, usePeople: true })
    }
    render() {
        console.log(this.state.hasLoaded)
        return (
            <Fragment>
                <h1>Ghibli Movie Facts</h1>
                <img src={logo} alt={"this is the logo"}></img>
                <button onClick={this.handleMovie}>Load Movie</button>
                <button onClick={this.handlePeople}>Load People</button>
                <br />
                {!this.state.hasLoaded ? null : this.state.dataArr.map(
                    (data, idx) => {
                        let itm1 = this.state.usePeople ? data.name : data.title;
                        let itm2 = this.state.usePeople ? data.age : data.director;
                        let itm3 = this.state.usePeople ? data.gender : data.description;

                        return <div key={idx} className="shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="card">
                                <div className="card-header">
                                    {itm1}
                                </div>
                                <div className="card-body">

                                    <h5 className="card-title">{itm2}</h5>
                                    <p className="card-text">{itm3}</p>
                                    {!this.state.usePeople ? null : <a href={data.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{`View ${data.name}`}</a>}
                                </div>
                            </div>
                        </div>
                    }
                )
                }
            </Fragment >
        )
    };
};