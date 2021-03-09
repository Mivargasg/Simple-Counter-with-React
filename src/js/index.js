//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calender">
				<i className="far fa-clock"></i>
			</div>
			<div className="four"> {props.digitFour} </div>
			<div className="three"> {props.digitThree}</div>
			<div className="Two">{props.digitTwo} </div>
			<div className="One">{props.digitOne}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropType.number,
	digitThree: PropType.number,
	digitTwo: PropType.number,
	digitOne: PropType.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const Two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);

	console.log(one, Two, three, four);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={Two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
