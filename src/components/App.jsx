import React, { Component, Fragment } from 'react';
import Card from './card';
// import logo from './logo.png'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            hasLoaded: false,
            dataArr: [],
            text: "",
            data: {
                title: "",
                description: "",
                director: "",
            }
        }
    }
    componentDidMount() {
        this.fetchAPI();
    };
    fetchAPI = () => {
        const fetchPromise = fetch("https://ghibliapi.herokuapp.com/films/");
        fetchPromise.then(response => {
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
    render() {
        console.log(this.state.dataArr)
        return (
            <Fragment>
                {/* <img src={logo}></img> */}
                {this.state.dataArr.map(
                    (data, idx) => {
                       return <Card
                        idx = {idx}
                        title = {data.title}
                        director = {data.director}
                        description = {data.description}
                        />
                    }
                ).reverse()
                }
            </Fragment>
        )
    };
};