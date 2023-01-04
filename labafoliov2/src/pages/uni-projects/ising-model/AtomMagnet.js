import video1 from './style/ferromagnetic.mp4'
import image1 from './style/initail-cond.png'
import image2 from './style/zoomed-anti-end.png'
import './style/atom-magnet.css'
export function AtomMagnetPage(){
    return (
        <div className="atom-magnet-body">
            <h2>Ising Model</h2>
            <h4>Basic Magnet</h4>
            <p>
                All atoms have a tiny magnetic properties with their own north and south poles. When all the magnetic pole 
                of the atoms in a magnet align, it creates a combined effect of a stronger magnetic properties. But not all 
                atoms have the same magnetic properties like aligning thier poles with their neighbouring atoms which is 
                called ferromagnetism. The neighbouring atom may also have a opposite pole such that it will cancel the overall 
                magnetic field which is called antiferromagnetism. We will look at these 2 properties in more detail here. 
                <br />
            </p>
            <img className='ising-img' src={image1} alt='initial condition of atoms'/>
            <p>
                Here we have simulated 500 x 500 atoms where the yellow spots represents the north pole and purple represents
                south pole. The net magnetic field of this system should be 0 since the atoms have not aligned. This is chosen 
                as a initail condition and now we will decrease the temperature of this system to reaveal their properties. 
            </p>
            <h4> Ferromagnetism</h4>
            <video className='ising-videos' controls  loop playsInline={true}> <source src={video1} /></video>
            <p>
                Here we see that the atoms in the system quickly forms regions of aligned magnetic fields such that the net magnetic 
                field is not 0. This occurs because as heat escapes the system, it will try to reach a magnetic equilibrium 
                which is controlled by its ferromagnetic property such that an atom  in the system tries to align its magnetic 
                field with its neighbouring atoms. 
            </p>
            <br/>
            <h4> Antiferromagnetism</h4>
            <img className='ising-img' src={image2} alt='anti ferromagnetism property of atoms'/>
            <p>
                In contrast to the ferromagnetic animation, the antiferromagnetic system creates a very checkered pattern of magnetic
                field such that they all try to minimise the magnetisation effect. 
                Therefore the overall magnetic field from a antiferromagnetic materials is 0. 
            </p>
            <h3>Code used</h3>
            <a href='https://github.com/L-Limbu/Ising-Model' rel="noopener noreferrer" target="_blank"> Python</a>
        </div>
    )
}