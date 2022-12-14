import React, { useState } from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert';


const options=[
    {
        label:'Afrikaans',
        value:'af'
    },
        
    {
        label:'Arabic',
        value:'ar'
    },

    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Serbian',
        value:'sr'
    }
];

const Translate=()=>{
    const [language, setLanguage]=useState(options[0]);
    const [text, setText]=useState('');
    return(
        <div>

        <div className='ui form'>
            <div className='field'>
                <label>Enter text</label>
                <input value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
        </div>

        <Dropdown label='Select a Language' options={options}
        selected={language}
        onSelectedChange={setLanguage}    
        />
        <hr></hr>
        <h3 className='ui header'>Output</h3>
        <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate;