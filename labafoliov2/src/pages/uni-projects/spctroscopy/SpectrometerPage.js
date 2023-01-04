import './style/spectro.css'
import image1 from './style/example-spec.jpg'
import image2 from './style/setup.png'
import image3 from './style/example-diffraction.png'
import image4 from './style/explainer.png'
import image5 from './style/comparing.png'
import image6 from './style/reference.png'
import image7 from './style/analysing.png'
import image8 from './style/calibration.png'
import image9 from './style/result.png'

export function SpectrometerPage(){
    return (
        <div className="spectro-page-body">
            <h2>Spectrometer</h2>
            <h4>Poor Man's Spectrometer</h4>
            <p>
                Spectrometer is a device that measures the properties of a light. Here we make a simple and cheap 
                spectrometer to measure the wavelength of light from different light sources.
            </p>
            <h4>Baiscs</h4>
            <p className='spec-text'>
                Imagine a senario where we have 2 objects and we know the size of the first object and we wish to know the size 
                of the second. We can compare the size ratio of these two to know the size of the second object. <br/>
                For example:
            </p>
            <img className='spec-img1' src={image1} alt='ps4 cd case compared to sticky note'/>
            <p className='spec-text'>
                Here we are comparing a sticky note with a PS4 CD case. We know the standard size of sticky note is 3"x3" 
                or (3inch by 3 inch) and we wish to know the height of the case. <br />
                From the image we can estimate the size of the case is a bit more than 2 sticky notes therefore we can guess 
                the size of the case is around 6-8 inches (the size of the case is 7.5 inches). <br/>
                We can tweak this technique just a little bit to know the wavelength of light. Lets see how... 
            </p>
            <h4>The Spectrometer</h4>
            <img className='spec-img' src={image2} alt='diagram of spectrometer'/>
            <p className='spec-text'>
                The body of a spectrometer is made out of cardboard with a little slit so that light can enter. The grating is
                    removed from a CD's skin layer and is attached to the body. 
                Also, a phone was placed next to the grating to take pictures of the light. <br />
                So overall, the light would enter through the slit and then be diffracted by the grating and a phone was used
                to capture the diffracted lights. 
            </p>
            <h4>Diffracted Light</h4>
            <img className='spec-img' src={image3} alt='3 diffracted light from different light source'/>
            <p>
                Here there are diffracted lights from 3 different light sources: Hydrogen, Mercury and Sodium lamp. 
            </p>
            <h4>Theory behind spectroscopy</h4>
            <img className='spec-img' src={image4} alt='graph of electro-magnetic radiation'/>
            <p>
                Visible light that we can see is just a small section of the Electromagnetic wave, where red light has the highest 
                wavelength and violet the least as shown in the picture. But there is a clear pattern that we need to use for 
                our spectrometer. We see that the wavelength of the light monotonically increases, such that the wavelength keeps increasing
                from violet to red.
            </p>
            <h4>Applying our secret pattern</h4>
            <img className='spec-img' src={image5} alt='diffracted light compared to whole visible light'/>
            <p>
                Wow, the diffracted light seems to fit in like a puzzle into the light spectrum. Whats next? <br/>
                We need to find out a mathemetical equation that can compute the wavelenght of diffracted lights. Lets call
                this equation the "Calibration Function".
            </p>
            <h4>Calibration Function</h4>
            <ol className='spectro-list-wrapper'>To know the calibration function we need to know:
                <li>The distance or position of the diffracted light</li>
                <li>The wavelength of the diffracted light</li>
            </ol>
            <p>
                Here we used the diffracted light of a Mercury lamp as a reference (sticky note from the 1st picture).
            </p>
            <img className='spec-img2' src={image6} alt='diffracted light of mercury lamp'/>
            <p className='spec-text'>
                Finding the value to these wavelenght is easier than expected thanks to the Internet, we can know the wavelength
                of the light through Wikipedia or any relevant site and compare the diffracted light to find the value.
                
                <br />
                But to find the position of the diffracted might be a little laborious but nevertheless easy! First, we need to 
                upload the image in a software where you can edit the image or know the position of the distinct light. 
                For our experiment, we found that Paint was to easiest to use.
            </p>
            <img className='spec-img' src={image7} alt='diffracted light edited in paint software'/>
            <p>
                Paint was easiest to use because the distance is shown as pixel in x-y plane as shown in the picture inside the red box.
                So we just need to carefully record the position in units of pixel of each diffracted light. 
            </p>
            <h4>Using Mathematics</h4>
            <p>
                We're entering the endgame here. Using the 2 sets of data we have found out, we need to plot these value into a
                graph to see what it looks like and form a mathemetical equation or calibration function.
            </p>
            <img className='spec-img' src={image8} alt='graph of wavelength of diffracted light compared to pixels or distance'/>
            <p className='spec-text'>
                Plotting the graph, we can make a line of best fit as shown in the graph. And Tada! That line is our 
                Calibration Function which we can use to find the wavelength of diffracted lights of other light source.
                <br/><br/>
                Our Calibration function is:
                <br />
                λ = 2.014 x - 1077
                <br /><br/>
                To test out our calibration function we used Hydrogen Lamp to see how well our calibration function worked.
                So again we determined the position of the diffracted lights using Paint and plug it into the Calibration Function
                which gave us the following results.
            </p>
            <img className='spec-img2' src={image9} alt='table of result of diffracted hydrogen light'/>
            <p className='spec-text'>
                Amazing! the difference between the our calculated wavelength and the actual wavelength was only a few nanometer 
                which is smaller than a width of a hair (human hair). 
                <br />
            </p>
            <h4 className='spec-h'>Wrap up</h4>
            <p className='spec-text'>
                This experiment was very easy to do with high precision too. But I will admit the most tricky part of this 
                experiment was of course the Calibration Function, but the key insight to understanding it was to fit 
                the diffracted light inside the light spectrum.
            </p>
        </div>
    )
}