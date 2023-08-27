import { useState } from "react";



function FlashCard(props) {
    const [answer, updateAns] = useState(null)

    function updateAnsw(data) {
        updateAns(answer == data ? null : data)
    }
    return (
        <li onClick={()=>{updateAnsw(props.data.answer)}}>
            <div>{props.data.question}</div>
            {answer && <div className="ans">Answer: {answer}</div>}
        </li>
    )
}

export default FlashCard;