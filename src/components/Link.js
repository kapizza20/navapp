import React from "react";

const Link=({href,className,children})=>{
    const onClick=(event)=>{
        //* Klasika, da omogucimo da otvorimo link u new tab
        if(event.metaKey|| event.ctrlKey){
            return
        }

        event.preventDefault();
        window.history.pushState({},'',href);
        
        const navEvent=new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };


    return <a onClick={onClick} href={href} className={className}>{children}</a>
};

export default Link;