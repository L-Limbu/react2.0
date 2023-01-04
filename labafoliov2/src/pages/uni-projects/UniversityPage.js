import './style/uni-projects.css'
import { useState } from 'react'

import { Astro } from './choices/Astro'
import { Atom } from './choices/Atom'
import { Solar } from './choices/Solar'
import { Spectro } from './choices/Spectro'
import { Magnets } from './choices/Magnets'

export function UniversityProjects() {
    const [chosenValue, setChosenValue] = useState('')
    const [active, setActive] = useState(false)
    function activeValue(value){
        setActive(true)
        setChosenValue(value)
    }
    function handleClick(value) {
        switch(value){
            case 'solar':
                return <Solar />
            case 'atom':
                return <Atom />
            case 'magnet':
                return <Magnets />
            case 'spectro':
                return <Spectro />
            case 'astro':
                return <Astro />
            default:
                return 
        }

    }
    return (
        <div >
            <h1>University Project Page</h1>

            <div className='container'>

                <div className="uni-projects-row">
                    <button className={`uni-box solar-system ${active && chosenValue === 'solar' ? 'solarActive' : ''}`}       
                    onClick={()=>activeValue('solar')} onClick2={() => setActive(true)}>
                    Looking at the Solar System</button>

                    <button className={`uni-box atom-trap ${active && chosenValue === 'atom'? 'atomActive' : ''}`}              
                    onClick={()=>activeValue('atom')}>
                    Trapping an atom</button>

                    <button className={`uni-box magnets ${active && chosenValue === 'magnet'? 'magnetActive' : ''}`}          
                    onClick={()=>activeValue('magnet')}>
                    Tiny Magnets</button>

                    <button className={`uni-box spectrometer ${active && chosenValue === 'spectro'? 'spectroActive' : ''}`}     
                    onClick={()=>activeValue('spectro')}>
                    Spectrometer</button>

                    <button className={`uni-box astrophotography ${active && chosenValue === 'astro'? 'astroActive' : ''}`}   
                    onClick={()=>activeValue('astro')}>
                    Looking through telescope</button>

                </div>
                <br/>

                <div className='uni-project-display'>
                    {handleClick(chosenValue)}
                </div>

                <div className='uni-off-button' onClick={()=>setChosenValue('')}>OFF</div>
            </div>

        </div>
    )
}