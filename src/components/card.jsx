import React from 'react';
export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            hasLoaded: false,


        }
    }
    handleClick = async () => {
        // created a toggle button instead of making two different ones that switch true/false
        await this.setState({ hasLoaded: !this.state.hasLoaded });
       
    };
    render() {
        if (this.state.hasLoaded) {
            return <div key={this.props.idx} className="card">
                <div className="card-body">
                    <span className="badge badge-success">{this.props.title}</span>
                    <br></br>
                    <span className="badge badge-danger">{"Directed by: " + this.props.director}</span>
                    <p className="card-text">
                        <span className="badge badge-primary">{this.props.description}</span>
                    </p>
                </div>
            </div>
        } else {
            return (<button style = {{display: "block"}} onClick={this.handleClick}>Load Movie</button>)
        }


    }

}