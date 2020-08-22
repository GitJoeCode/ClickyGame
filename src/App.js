import React, { Component} from 'react';
import LegendsCard from './components/legendsCard';
import ScoreCount from './components/scoreCount';
// import './App.css';
import legends from "./legends.json";

class App extends Component {
	// Setting this.state.friends to the legends json array
  state = {
    legends,
    score: 0,
    topScore: 0,
    message: 'Click on any image to start playing!'
  };

	gameOver = () => {
		if (this.state.score > this.state.topScore) {
			this.setState({ topScore: this.state.score }, function() {});
		}
		this.state.legends.forEach((legend) => {
			legend.count = 0;
		});
		this.setState({ score: 0, message: 'Click on any image to start playing!' });
		return true;
	};

	clickCount = (id) => {
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // eslint-disable-next-line 
    this.state.legends.find((ele, i) => {
			if (ele.id === id) {
				if (legends[i].count === 0) {
					legends[i].count = legends[i].count + 1;
					this.setState({ score: this.state.score + 1, message: "Yay, you guessed correctly!" }, function() {
					});
					//https://www.freecodecamp.org/forum/t/how-does-math-random-work-to-sort-an-array/151540/8
					//http://www.javascriptkit.com/javatutors/arraysort.shtml
					this.state.legends.sort(() => Math.random() - 0.5);
					return true;
				} else {
					this.setState({ score: this.state.score, message: 'Good Try!' });
					setTimeout(() => {
						this.gameOver();
					}, 1000);
				}
			}
		});
	};
	render() {
		return (
			<div>
				<ScoreCount message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
				<div className="card-container">
					{this.state.legends.map((element) => (
						<LegendsCard clickCount={this.clickCount} id={element.id} key={element.id} image={element.image} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
