import './pizza.css'
function Pizza(props) {
    return (
        <div className='col-md-4 text-center pizzaCard'>
            <img src={props.name.photoName} />
            <ul>
                <li><h4> {props.name.name}</h4></li>
                <li>
                    <p>{props.name.ingredients}</p>
                </li>
                <li className='price'>
                    <p>${props.name.price}</p>
                </li>
                <li className='lastBtn'>
                    <button type='button' className={props.name.soldOut?'btn btn-disabled btn-secondary':'btn btn-success'}>{props.name.soldOut?'Sold out':'Buy'}</button>
                </li>
            </ul>

        </div>
    )
}

export default Pizza;