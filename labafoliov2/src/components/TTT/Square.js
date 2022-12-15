import './styles/square.css'
export function Square(props) {
    return (
        <button className='tile'>
            {props.value}
        </button>
    )
}