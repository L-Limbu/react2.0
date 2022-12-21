import './style/mini-earth.css'
export function  MiniEarth() {
    return (
        <div>
            <div className='l-system'>
                <div className='l-map'></div>
                <div className='l-moon'>
                    <div className='l-spots-1'></div>
                    <div className='l-spots-2'></div>
                    <div className='l-spots-3'></div>
                </div>
                <div className='l-iss'>
                    <div className='l-iss-body'></div>
                    <div className='l-panel'></div>
                </div>
            </div>
        </div>
    )
}