import React, {useEffect, useState} from "react";
import axios from "axios";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM   API KEY
const Convert=({language,text})=>{
    const [translated,setTranslated]=useState('');
    const [debauncedText,setDebauncedText]=useState(text);

    useEffect(()=>{
        const timerid=setTimeout(()=>{
            setDebauncedText(text);
        },500);

        return()=>{
            clearTimeout(timerid);
        };

    },[text]);

    useEffect(()=>{
        const doTranslation = async() => {
        const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',
            {},
            {
            params:{
                q:debauncedText,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
            });
        setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
},[language,debauncedText]);


    return(
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
    }

export default Convert