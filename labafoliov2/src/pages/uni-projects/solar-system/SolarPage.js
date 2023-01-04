import './style/solar.css'

import video1 from './style/rocky-orbit-xy-crop.mp4';
import video2 from './style/rocky-orbit-xz-crop.mp4';
import video3 from './style/Gassy_Orbit-xy-crop.mp4';
import video4 from './style/GassyXZ_Orbit-crop.mp4';
import solar_img from './style/solarOrbit.png';
import solar_img2 from './style/solarOrbitXZ.png'

export function SolarPage() {
    return (
        <div className='solar-page-body'>
            <h2>Simulation of the Solar System</h2>
            <h4>Motion of Planets</h4>
            <p>Usually when we make moving objects like cars and planes there is a engine and a wheel which we can alter 
            to change its direction or speed to whatever we desire. However, sadly for most objects in space like comets, planets or stars, 
            their paths are predefined with no free will to decide or choose where they want to go. 
            The invisible string that dictates their path as they travel across vast empty space is a force called gravity. 
            Gravity is the force of attraction between objects, everything in the universe has gravity, even us but this 
            force is small for us but huge for planets and stars.
            <br/>
            Newton, the guy who 1st discovered or thought about this invisible force, 
            describes clearly how the planets moves around the stars.
            <br/><br/>
            </p>
            <ol className='solar-page-list-wrapper'><strong>He says that: </strong>
                <li>planets are like a fast cannon ball falling down. </li>
                <li>the cannon ball travels further as the speed of the cannon ball increases.</li>
                <li>when the speed is fast enough, the ball no longer hits the surface (assuming the earth is not flat 👀).</li>
                <li>therefore the cannon ball keeping on falling and is in orbit. </li>
            </ol>
            <br/>
            <p>
            This method is also how rockets goes to and stays on space, and most the things in space like satellite or 
            the International Space Station (ISS) stays in space.
            <br/>
            So in essence the planets are just falling in space and the thing they are falling to is the star or 
            in our case the sun. But you might ask since gravity attract all other object, surely the planets are attracting 
            other planets too... Yes, they do attract other planets because they have their own moon(s) but 
            the distance between planets are so vast the force is tiny and effectively has no effect. 
            So they are confined to their own mini system.</p>

            <h4>Simualtions</h4>    
            <img className='solar-img' src = {solar_img} alt='top view of solar system'/>
            <p>
            Tada! This is the motion every planets in the solar system takes; all of it predefined. 
            Theres a quote saying "A picture is worth a thousand word", since we like Physics lets change that saying to 
            "A graph is worth a thousand question". Looking at the graph we notice that there is a dense center containing the 
            rocky planets like Earth and Mars and then after a vast gap the outer planets 
            are all gassy planets like Jupiter and Saturn. <br/>
            I may not have answers to why this is the case but in Physics its 
            a good sign that we have more questions than answers.<br/><br/>

            Lets look at the animated motion of these planets to gain a deeper insight (ask more questions) about what else is going on...
            </p>
            <video className='solar-videos' controls loop playsInline={false}>
                <source src={video1} />
            </video>
            <video className='solar-videos' controls  loop playsInline={false}>
                <source src={video3} />
            </video>
            <br/>
            <p>
            We see that the planets closer to the sun moves faster compared to those further away. The rocky planets
            seems to be zooming around the sun while the gassy planets are moving at a sluggish pace. Again from these animations, many
            questions can be asked.
            </p>
            <h4>Looking in a different perspective</h4>
            <img className='solar-img' src = {solar_img2} alt='side-view of solar system'/> <br />
            <p>
            This graph shows the solar system sideways and it indicates that the solar system is somehow suprisingly flat like a pizza.
            Now why is that? Out of so many different configurations, the universe decided that solar system will be
            flat. Again more questions...
            </p>
            <video className='solar-videos' controls  loop playsInline={true}>
                <source src={video2} />
            </video>
            
            <br />
            <video className='solar-videos' controls  loop playsInline={false}>
                <source src={video4} />
            </video>
            <br/>
            <div className='ending-code-solar' >
                <h3 >Code used</h3>
                <a href='https://github.com/L-Limbu/Solar-system'  rel="noopener noreferrer" target="_blank"> Python</a>
            </div>
        </div>
    )
}