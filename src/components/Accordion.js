import React, { useState } from "react";

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		const active = activeIndex === index ? "active" : "";

		return (
			<React.Fragment key={item.title}>
				<div
					//! Ne moze da stoji samo onclick={onTitleClick(index)}
					//! Tako bi se funkcije pokrenula svaki put kada se renderuje
					//! Nama treba tacno kada se desi on click tek tada
					onClick={() => onTitleClick(index)}
					className={`title ${active}`}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion">
			{renderedItems}
			<h1>{activeIndex}</h1>
		</div>
	);
};

export default Accordion;
