import React, { Component } from "react";

export default class Addition extends Component {
    state = {
        valeur1: 0,
        valeur2: 0,
        add: 0,
    };
    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: Number(e.target.value),
            add: Number(this.state.add) + Number(e.target.value)
        })
    };
    // componentDidUpdate(prevState) {
    //     if (this.state.add !== prevState.add && Number(this.state.add) !== 0) {
    //         this.setState({
    //             add: 0
    //         })
    //     }
    // };
    render() {
        return (
            <div>
                <input
                    placeholder="valeur 1"
                    name="valeur1"
                    valeur={this.state.valeur1}
                    onChange={this.handleOnChange}
                ></input> <br />

                <input
                    placeholder="valeur 2"
                    name="valeur2"
                    valeur={this.state.valeur2}
                    onChange={this.handleOnChange}
                ></input>
                <p>Le résultat de l'addition est {this.state.add} </p>
            </div>
        )
    }
};