import './styles/square.css'
export function Square(props) {
    return (
        <button className="square-tile" onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}