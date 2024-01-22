import '../../Style/Style.css';

import Logo from '../../Style/images/logo_neutalise_1.png';
import Logo2 from '../../Style/images/logo_neutalise_2.png';
import Logo3 from '../../Style/images/logo_neutalise_3.png';

function Header() {
    return (
        <div className="Header container">
            <header className="d-flex align-items-center justify-content-around">
                {/* ajouter le logo "certi biocide" */}
                <div className="title">
                    <img src={Logo3} alt="Logo anti nuisible" className="logo_principal"></img>
                    <p>Professionnel anti nuisible</p>
                </div>
                <div className='menu-list'>
                    <ul className='menu-list-components'>
                        <ol>Accueil</ol>
                        <ol>Préstations</ol>
                        <ol>Contact</ol>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header