import React, { Component } from 'react';


class Menu extends Component {
    state = {
        soldVal: this.props.soldNum,
        step: this.props.step,
    }
    simulate = (e) => {
        e.preventDefault();
        this.props.simulate();
    }
    render() {

        return (
            <div className="menu">
                <form action="submit">
                    <p>Liczba żołnierzy</p>
                    <input minLength='1' min='1' type="number" value={this.state.soldVal} onChange={(e) => {
                        let value = 0;
                        if (e.target.value !== undefined)
                            value = parseInt(e.target.value);
                        else {
                            value = e.target.value;
                        }

                        this.setState({
                            soldVal: value,
                        });
                        if (value > 0) {
                            this.props.changeSoldNum(value);
                        }
                    }} />
                    <p>Liczba kroków</p>
                    <input type="number" value={this.state.step} onChange={(e) => {
                        let value = parseInt(e.target.value);

                        this.setState({
                            step: value,
                        });
                        if (value > 0) {
                            this.props.changeStepNum(value);
                        }
                    }} />
                    <button onClick={this.simulate}>Symuluj!</button>
                    <button>Reset</button>
                </form>
            </div>
        );
    }
}

export default Menu;