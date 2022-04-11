import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [selectedColor, setselectedColor] = useState();

	return (
		<div className="trafficLight">
			<div
				onClick={() => setselectedColor("red")}
				className={
					"light red" + (selectedColor === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => setselectedColor("yellow")}
				className={
					"light yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setselectedColor("green")}
				className={
					"light green" + (selectedColor === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Traffic;
