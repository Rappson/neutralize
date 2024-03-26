import '../../Style/Style.css';

import Logo from '../../Style/images/logo_neutalise_1.png'; //logo
import Logo2 from '../../Style/images/logo_neutalise_2.png'; // fond jaune ecriture noir
import Logo3 from '../../Style/images/logo_neutalise_3.png';// fond noir ecriture jaune

// CERTI BIOCIDE
import biocide from '../../Style/images/CertiBiocide.png'

//PARTENAIRES


// liens vers les réseaux sociaux
// fiche contact
// logo
// btn de retour en haut de page
// mettre un logo "7j/7"
// Logo ou précision "service garanti" option étoile

function footer() {
    return (
        <div className="footer container d-flex justify-content-around">
            <div className='logo_container d-flex align-items-center justify-content-start'>
                <img className="footer_logo img" src={Logo} alt="logo 'Neutralise'"></img>
            </div>

            <div className="footer_contact_container">
                <p>contact@neutralise.fr</p>
                <p>07 45 08 04 58</p>
                <p>adresse</p>
            </div>

        
            <div className="partenaires">
                <h2>Partenaires</h2>
            </div>
        </div>
    )
}

export default footer;