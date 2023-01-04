import './style/pages.css'
import { Outlet, Link } from "react-router-dom";
import swanseaUni from './style/images/startpage/Swansea-University.gif'
import projectPicture from './style/images/startpage/programmer.png'
import onlightBulb from './style/images/startpage/on-light-bulb.png'
import voyagerCD from './style/images/voyagerMessage.png'

export function StartPage() {

    return (
        <div>

            <div className='startContainer'>
                <div className='startBox1'>
                    <img className='swanseaPicture' src={swanseaUni} alt='Swansea University Birds eye view'></img>
                </div>
                <div className='startBox2'>
                    <p>Hello my name is Labahang Limbu and I started to get interested in this funny business of writing code in University where I had to quickly skill up 
                    to write quality code for my coding assesments. Check out some of the works that I had to do at university studying 
                    Theoretical Physics.</p>
                    <br />
                    <Link to="/uni-projects" className="links start-link" >
                        University Projects 
                    </Link>
                </div>
            </div>
            <div className='startContainer'>
                <div className='startBox3'>
                    <p>My journey of coding was just beginning after I finished University. After a while I realised that there are 
                    programming languages other than Python that are best for specific projects. Check out my projects that I have done to 
                    upskill my software development skills.</p>
                    <Link to="/projects" className="links start-link">
                        Projects 
                    </Link>
                </div>
                <div className='startBox4'>

                    <img className='light-bulb' src={onlightBulb} alt='lightbulb'></img>
                    <img className='projectPicture' src={projectPicture} alt='cartoon of man working in computer'></img>
                
                </div>
            </div>
            
            <Link to="/one-for-the-books" className="links start-link">
                 One for the History Books 
             </Link>
            <div className='recordHolder'>
                <img className='recordPicture' src={voyagerCD} alt='Golden Record from Voyager'></img>
            </div>


            <Outlet />
        </div>
    )
}