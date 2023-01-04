import voyagerImage from '..//style/images/voyagerMessage.png'
import argentinaImage from '../style/images/argentina.jpg'
import './oftb.css'
export function OftB() {
    return (
        <div style={{overflow:'auto'}}>
            <div>
                <h1>One for the History Books</h1>
                <div className='oftb-golden-record' style={{
                    backgroundImage: `url(${voyagerImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                    height:400, width:400, margin:'auto',
                    }}>
                </div>
                <p>"To all those who exist in the universe, greetings." "Hello! Let there be peace everywhere." <br /> - <strong>Voyager 1</strong></p>
            </div>
            <div style={{borderBottom: '0.7rem dashed', borderTop: '0.7rem dashed'}}>

                <h2>---Sunday 18th December 2022---</h2>
                <h2>Argentina Wins the World Cup</h2>
                
                <img src={argentinaImage} className='oftb-img' alt='argentina team carries world cup'></img>
                <p>
                - Young French <strong>Kylian Mbappé</strong> equalises as he scores a hat-trick in the final, refusing to let the veteran Messi have his fairy tale ending. <br />
                - France lose in the penalty shootout. But Kylian Mbappé shows his brilliant talent ensuring future of Football is still exciting. <br />
                - <strong>Lionel Messi</strong> finally ends the G.O.A.T debate between his rival <strong>Cristiano Ronaldo</strong>. 
                </p>
            </div>
        </div>
    )
}