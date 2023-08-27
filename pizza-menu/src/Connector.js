import { useState } from "react";
import './connector.css';

function Connector() {
    const [active, setActive] = useState(1);
    function nextState(){
        setActive(active < 3? active+1:active);
    }
    function prevState(){
        setActive(active > 1? active-1:active);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="connectUl">
                        <li className={active >= 1 ? 'active' : null}>1</li>
                        <li className={active >= 2 ? 'active' : null}>2</li>
                        <li className={active >= 3 ? 'active' : null}>3</li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <ul className="btnUl">
                       <li><button onClick={()=>{prevState()}} className="btn btn-primary">Previous</button></li> 
                       <li><button onClick={()=>{nextState()}} className="btn btn-primary">Next</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Connector;