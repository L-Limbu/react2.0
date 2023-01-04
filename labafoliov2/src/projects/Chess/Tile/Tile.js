import './tile.css'
export function Tile(props) {
    const className = [
        'chess-tile',
        props.number % 2 === 0 && 'dark-chess-tile', 
        props.number % 2 !== 0 && 'light-chess-tile', 
        props.highlight && 'chess-tile-highlight',
        props.imagePath && 'chess-piece-tile']
        .filter(Boolean).join(' ')

     
    return (
    <div className={className} data-testid='chess-tile-id'> 
        {props.imagePath && <div style={{backgroundImage: `url(${props.imagePath})`}} className="chess-piece"></div>}
    </div>)   
    
}   