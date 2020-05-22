import React, { Component } from 'react';

import Circle from './Circle';
import Menu from './Menu';
import '../style/App.css';

class App extends Component {
  state = {
    soldNum: 20,
    step: 2,
    living: [],
    winningIndex: '',
  }
  componentDidMount() {
    let living = [];
    for (let i = 0; i < this.state.soldNum; i++)
      living.push(true);
    this.setState({
      living
    });
  }
  componentDidUpdate() {
    if (this.state.living.length !== this.state.soldNum) {
      let living = [];
      for (let i = 0; i < this.state.soldNum; i++)
        living.push(true);
      this.setState({
        living
      });
    }
  }
  simulate = () => {
    let { step } = this.state;
    let indexToKill = step - 1;
    let livingSolds = document.querySelectorAll('div.soldier.alive');
    const killSoldier = () => {
      livingSolds = document.querySelectorAll('div.soldier.alive');
      while (livingSolds[indexToKill] === undefined) {
        console.log(indexToKill);
        indexToKill -= livingSolds.length;
      }
      livingSolds[indexToKill].classList.remove('alive');
      livingSolds[indexToKill].classList.add('dead');
      livingSolds = document.querySelectorAll('div.soldier.alive');
      indexToKill += step - 1;


      if (indexToKill > livingSolds.length - 1)
        indexToKill -= livingSolds.length;
      if (livingSolds.length > 1)
        setTimeout(killSoldier, 300);
      else {
        const allSoldiers = document.querySelectorAll('div.soldier');
        for (let i = 0; i < allSoldiers.length; i++)
          if (allSoldiers[i].classList.contains('alive'))
            this.setState({
              winningIndex: i + 1,
            })
      }

    }
    killSoldier();



  }
  changeSoldNum = (quantity) => {
    this.setState({
      soldNum: quantity,
    })
  }
  changeStepNum = (quantity) => {
    this.setState({
      step: quantity,
    })
  }
  render() {
    return (
      <div className="app">
        <h1>Problem Józefa Flawiusza</h1>
        <Circle living={this.state.living} soldNum={this.state.soldNum} />
        <Menu soldNum={this.state.soldNum} changeSoldNum={this.changeSoldNum} step={this.state.step} changeStepNum={this.changeStepNum} simulate={this.simulate} />
        <div className="winner">
          <p>{this.state.winningIndex}</p>
        </div>
      </div>
    );
  }
}

export default App;
