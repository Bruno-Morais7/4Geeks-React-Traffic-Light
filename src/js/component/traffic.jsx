import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [selectedColor, setSelectedColor] = useState(null);
	//	const [automode, setAutomode] = useState(false);
	const [isPurpleOn, setIsPurpleOn] = useState(false);

	let listOfLights = ["green", "red", "yellow"];
	let i = 0;

	return (
		<div className="container col-4 text-center">
			<div className="cable mx-auto"></div>
			<div className="trafficLight d-inline-block">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"mb-2 light red" +
						(selectedColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"mb-2 light yellow" +
						(selectedColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"mb-2 light green" +
						(selectedColor === "green" ? " glow" : "")
					}></div>
				{isPurpleOn === true ? (
					<div
						onClick={() => setSelectedColor("purple")}
						className={
							"mb-2 light purple" +
							(selectedColor === "purple" ? " glow" : "")
						}></div>
				) : null}
			</div>
			<div>
				<button
					className="btn btn-secondary"
					onClick={() =>
						setInterval(function () {
							i++;
							let result = i % listOfLights.length;
							let selectedLight = listOfLights[result] + " glow";
							console.log(selectedLight);
							setSelectedColor(listOfLights[result]);
						}, 2000)
					}>
					Auto mode!
				</button>
				<button
					className="btn btn-warning"
					onClick={() => setIsPurpleOn(!isPurpleOn)}>
					{isPurpleOn ? "Remove purple" : "Add purple!"}
				</button>
			</div>
		</div>
	);
};

export default Traffic;
