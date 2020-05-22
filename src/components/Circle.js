import React, { Component } from 'react';

import Soldier from './Soldier';



class Circle extends Component {
    state = {
        soldiers: this.props.soldNum,
        radius: 220,
    }
    componentDidUpdate() {
        if (this.state.soldiers !== this.props.soldNum)
            this.setState({
                soldiers: this.props.soldNum,
            })
    }
    render() {
        let soldiers = [];
        for (let i = 0; i < this.state.soldiers; i++) {
            let angle = i / this.state.soldiers * 2 * Math.PI;
            let xPos = this.state.radius * Math.cos(angle);
            let yPos = this.state.radius * Math.sin(angle);
            soldiers.push({
                x: xPos,
                y: yPos,
            });
        }
        const soldBox = soldiers.map(element => <Soldier live={this.props.living[soldiers.indexOf(element)]} key={soldiers.indexOf(element)} x={element.x} y={element.y} radius={this.state.radius} id={soldiers.indexOf(element)} />)
        return (
            <div className="circle" style={{
                width: `${2 * this.state.radius}px`,
                height: `${2 * this.state.radius}px`,
            }}>
                {soldBox}

            </div>
        );
    }
}

export default Circle;