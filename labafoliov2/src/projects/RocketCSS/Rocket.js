import './style/rocketstyle.css'
import spaceshuttle from './style/spaceshuttle.png'
export function Rocket() {
    return (
        <div>
            <h2>Rocket using CSS</h2>
            <div className='rocket-body'>
                <div className='rocket-main-body'> 
                    <img src={spaceshuttle} alt='cartoon space shuttle'/>
                </div>
            </div>
            <div className='exhaust-body'>
                <div className='flame-1'></div>
                <div className='flame-2'></div>
                <div className='flame-3'></div>
            </div>
        </div>
    )
}