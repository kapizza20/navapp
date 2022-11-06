import React, {useEffect, useState, useRef} from 'react'

const Dropdown=({label, options, selected, onSelectedChange})=>{
    const [open,setOpen]=useState(false);
    const refToForm=useRef();
    useEffect(()=>{
        const onBodyClick=(event)=>{
            //console.log('body clicked');
            if(refToForm.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick,{capture:'true'});

        return ()=>{
            document.body.removeEventListener('click', onBodyClick,{capture:'true'})
        };
    },[]);

    const renderedOptions=options.map((option)=>{
        //! Forica da se ne ucitava i dropdown ono sto je vec izabrano(vec pise)
        if(option.label===selected.label){
            return null
        }

        return(
            <div key={option.value}
                className='item'
                onClick={()=>{
                    onSelectedChange(option)
                    }
                }
                >
                {option.label}
            </div>
        )
    })
    
    return(
    <div ref={refToForm} className='ui form'>
        <div className='field'>
            <label className='label'>{label}</label>
            <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                <i className='dropdown icon'></i>
                <div className='text'>{selected.label}</div>
                <div onClick={()=>{
                    setOpen(!open)
                    }} 
                    className={`menu ${open ? 'visible transition' : ''}`}>
                    {renderedOptions}
                </div>
            </div>
           {// <label className={`ui ${selected.value} header`}>Change me!</label>
           }
        </div>
    </div>
    )
};

export default Dropdown