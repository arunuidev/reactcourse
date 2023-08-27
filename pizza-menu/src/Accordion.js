import { useState } from "react";
import './accordion.css';

function Accordion(props){
    const [accord, setAccord] = useState(null);
    function expandAccord(val){
        setAccord(val == accord ? null : val);
    }
    return (
            <div className="acccordion">{props.val.title} <span onClick={()=>{expandAccord(props.index)}}>{accord == props.index ?'-':'+'}</span>
           {accord == props.index && <div className="content"> {props.val.text}</div>}
           </div> 
    )
}

export default Accordion;