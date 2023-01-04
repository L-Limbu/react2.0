import image1 from './style/AtomTrap.png'
import image2 from './style/AtomTrapXZ.png'
import image3 from './style/AtomTrap3D.png'
import video1 from './style/penningTrapXY.mov'
import video2 from './style/penningTrapXZ.mp4'
import video3 from './style/penningTrap3d.mp4'
import './style/atomTrap.css'

export function AtomTrapPage(){
    return (
        <div className='atom-trap-body'>
            <h2>Atom Trap</h2>
            <h4>Trapping an atom</h4>
            <p>
            Atoms are particles that makes stuff up, so dont believe it. But to believe it we must first see it and a way to
            do that is to trap an atom. So how do we make this trap specifically for atoms.
            <br />
            When atoms lose their electron(s), they become electrically charged so their movement or path can be easily controlled 
            by applying electric fileds. Therefore using this electric fields which we can control 
            we can make a trap so that the atom does not fly away.
            </p>
            <h4>Bird's Eye View</h4>
            <img className='atom-img' src = {image1} alt='birds eye view of atom in atom trap'/>
            <br/>
            <p>
            Here we have trapped an atom since it only moves in circle and does not fly away. 
            In the picture the line seems a bit too thick so lets 
            look at the animation for a closer inspection to see what is really going on.
            </p>
            <video className='atom-videos' controls  loop playsinline={true}> <source src={video1} /></video>
            <br/>
            <p>
                Looking at the animation the atom seems to be moving in circle within as circle hence the thick line in the 
                graph, but still it moves in a circle so it's trapped.
                <br />
                The animation shows that the atom is trapped forward/backwards and sideways such that it cannot escape
                . However it could still escape upwards or downwards. Therefore we need to fix this issue too.
            </p>
            <h4>Hope it does not fly away</h4>
            <img className='atom-img' src = {image2} alt='atom moving up and down and sideways'/>
            <br/>
            <p>
                The graph shows the path of the atom forms a square mesh motion, which suggests that the atom is trapped 
                since it doesn't escape from that square mesh.
            </p>
            <br/>
            <div className='square-mesh-container'>
                <video id='square-mesh-video' className='atom-videos' controls  loop playsinline={true}> <source src={video2} /></video>
            </div>
            <br/>   
            <p>
                Looking at the animation, we see that the atom bounces up and down moving back and forth. Since the atom just bounces 
                this suggests that the atom is trapped upwards and downwards too. So we have successfully trapped
                an atom.
                <br/>
                Lets look at in graph and animation in 3D to get the overall movement of the atom in the trap.
            </p>
            <h4>Full Picture</h4>
            <img className='atom-img' src = {image3} alt='3-D motion of atom in atom trap'/>
            <br/>
            <video className='atom-videos' controls  loop playsinline={true}> <source src={video3} /></video>
            <br/>
            <p>
                Looking at the 3D motion of the atom in the trap, we see that the path of the atom forms a cone shape as it moves 
                in a circle within a circle, bouncing up and down. 
                <br/> 
                Also note that this trap is very small as the cone in the 3D picture could fit inside a 4 millimeter cube which 
                is similar to a tiny bead.
            </p>
            <h3>Code used</h3>
            <a href='https://github.com/L-Limbu/Penning-Trap' rel="noopener noreferrer" target="_blank"> Python</a>
        </div>
    )
}