import './style/astro.css'
import m7 from './style/M7.png'
import m4 from './style/M4.png'
import m33 from './style/M33.png'
import helix from './style/Helix-nebula.png'
export function AstroPage(){
    return (
        <div className='astro-page-body'>
            <h2>Astro Photography</h2>
            <p>
                Using telescopes located around the world allows scientists and astronomers to observe celestial objects and phenomena 
                from different locations on Earth. This can be especially useful for studying objects that are only visible from certain 
                parts of the globe, as well as for minimizing the impact of atmospheric conditions on observations. By utilizing telescopes 
                located in different parts of the world, astronomers can gain a more complete and detailed understanding of the universe 
                and the phenomena it contains. <br/>
                This module allowed me to make use of those telescope where I recorded the light intensity of those celestial objects 
                to calculate the nature of those of those heavenly bodies (**and I also got to take cool pictures**). <br/>
            </p>
            <h2>M7 Star Cluster</h2>
            <img className='astro-img' src = {m7} alt='m7 cluster'/>
            <h2>M4 Globular Star Cluster</h2>
            <img className='astro-img' src = {m4} alt='m4 cluster'/>
            <h2>M33 Galaxy</h2>
            <img className='astro-img' src = {m33} alt='m33 galaxy'/>
            <h2>Helix Nebula</h2>
            <img className='astro-img' src = {helix} alt='helix nebula'/>

        </div>
    )
}