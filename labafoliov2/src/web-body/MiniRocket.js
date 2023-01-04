import './style/mini-rocket.css'
import lspaceshuttle from '../projects/RocketCSS/style/spaceshuttle.png'
export function MiniRocket() {
    return (
        <div className='l-whole-rocket-body'>
            <div className='l-rocket-body'>
                <div className='l-rocket-main-body'> 
                    <img src={lspaceshuttle} alt='cartoon space shuttle'/>
                </div>
            </div>
            <div className='l-exhaust-body'>
                <div className='l-flame-1'></div>
                <div className='l-flame-2'></div>
                <div className='l-flame-3'></div>
            </div>
        </div>
    )
}