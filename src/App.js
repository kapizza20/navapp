import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
	{
		title: "Ko si ti?",
		content: "Miomir",
	},
	{
		title: "A ko smo mi?",
		content: "Ma ko si ti?",
	},
	{
		title: "Zacaran u krugu",
		content: "Razmazan u cugu",
	},
];

const options=[
	{
		label:'The Color Red',
		value:'red'
	},
	{
		label:'The Color Green',
		value:'green'
	},
	{
		label:'Shade of blue',
		value:'blue'
	}

]

const showAccordion=()=>{
	if(window.location.pathname==='/'){
		return <Accordion items={items}/>
	}
}

const showDropdown=()=>{
	if(window.location.pathname==='/dropdown'){
		return <Dropdown/>
	}
}

const showTranslate=()=>{
	if(window.location.pathname==='/translate'){
		return <Translate/>
	}
}

const showList=()=>{
	if(window.location.pathname==='/list'){
		return <Search/>
	}
}
export default () => {
	const [selected, setSelected]=useState(options[0]);
	//const [showDropdown,setDropdown]=useState(true);
	//return <Accordion items={items} />;
	//return <Search></Search>;
	/* return (
		<div>
			<button onClick={()=>{
				setDropdown(!showDropdown);
			}}
			>Toggle Dropdown</button>
			{showDropdown ? 
			<Dropdown selected={selected} 
			onSelectedChange={setSelected} 
			options={options}/> 
			: 
			null}
			
		</div>
	)*/
	return (
		// <div>
		// 	{showAccordion()}
		// 	{showTranslate()}
		// 	{showList()}
		// 	{showDropdown()}
		// </div>
		<div>
		<Header/>
			<Route path={'/'}>
			<Accordion items={items}/>
			</Route>

			<Route path={'/list'}>
			<Search/>
			</Route>

			<Route path={'/dropdown'}>
			<Dropdown
				label="Select a color"
				options={options}
				selected={selected}
				onSelectedChange={setSelected}
			/>
			</Route>

			<Route path={'/translate'}>
			<Translate/>
			</Route>
		</div>
		
	)
};
