import '../../Style/Style.css'
import cafards from '../../Style/images/Cafard.jpg'
import chenilles from '../../Style/images/Chenille.jpg'
import fourmis from '../../Style/images/Fourmis.jpg'
import guepes from '../../Style/images/Guepes.jpg'
import punaises from '../../Style/images/Punaise.jpg'
import souris from '../../Style/images/Souris.jpg'


function Home() {
    return (
        <div className='home'>

            {/* Présentation des services avec images des insectes traités */}
            <div className='insectes'>
                <p>Nous luttons contre :</p>
                {/* Cards des insectes 
                    Faire les liaisons avec les balises React (Router, link, etc)
                */}
                <div className='insect-cards-area'>
                    <a href='?cafard'>
                        <img className='insect-cards-img cafards' src={cafards} alt="photo de cafard"></img>
                    </a>
                    <a href='?chenille'>
                        <img className='insect-cards-img chenilles' src={chenilles} alt="photo de cafard"></img>
                    </a>

                    <a href='?fourmis'>
                        <img className='insect-cards-img fourmis' src={fourmis} alt="photo de cafard"></img>
                    </a>

                    <br />

                    <a href='?guepes'>
                        <img className='insect-cards-img guepes' src={guepes} alt="photo de cafard"></img>
                    </a>

                    <a href='?punaise'>
                        <img className='insect-cards-img punaises' src={punaises} alt="photo de cafard"></img>
                    </a>

                    <a href='?souris'>
                        <img className='insect-cards-img souris' src={souris} alt="photo de cafard"></img>
                    </a>
                </div>
            </div>


            {/* fiche de contact */}
            <div className='contact'>
                <p>Contactez nous :</p>

                {/* cards de contacts */}
                <div className='contact-cards'>
                    <p className='mobile'>Téléphone : <a href='#'>06 12 34 56 78</a></p>
                    <p className='mail'>E-mail : <a href="#">votre.mail@exemple.com</a></p>
                </div>
            </div>

        </div>
    )
}

export default Home