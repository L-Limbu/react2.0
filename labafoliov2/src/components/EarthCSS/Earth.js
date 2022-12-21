import './style/earth.css'
function  Earth() {
    return (
        <div>
            <h2>Earth, ISS and Moon using CSS</h2>
            <div className='system'>
                <div className='map'></div>
                <div className='moon'>
                    <div className='spots-1'></div>
                    <div className='spots-2'></div>
                    <div className='spots-3'></div>
                </div>
                <div className='iss'>
                    <div className='iss-body'></div>
                    <div className='panel-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Earth