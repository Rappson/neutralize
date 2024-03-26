import '../../Style/Style.css';

// LOGO
import Logo from '../../Style/images/logo_neutalise_1.png';
import Logo2 from '../../Style/images/logo_neutalise_2.png';
import Logo3 from '../../Style/images/logo_neutalise_3.png';
// BIOCIDE
import Biocide from '../../Style/images/CertiBiocide.png'

function Header() {
    return (
        <div className="Header container">
            <header className="d-flex align-items-center justify-content-around">
                {/* ajouter le logo "certi biocide" */}
                <div className="main_title">
                    <img src={Logo2} alt="Logo anti nuisible" className="logo_principal"></img>
                    <h5>Professionnel anti nuisible</h5>
                </div>
                <img src={Biocide} alt="Certification Biocide" className="certification"></img>
            </header>
        </div>
    )
}

export default Header