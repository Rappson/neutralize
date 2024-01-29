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
                    <img src={Logo2} alt="Logo anti nuisible" className="logo_principal"></img>
                    <h5>Professionnel anti nuisible</h5>
                </div>
                <div className='menu-list'>
                    <ul className='menu-list-components'>
                        <ol className="btn btn-primary btn-components">Accueil</ol>
                        <ol className="btn btn-primary btn-components">Préstations</ol>
                        <ol className="btn btn-primary btn-components">Contact</ol>
                    </ul>
                </div>

                {/* dropdown Mobile only */}
                {/* <ol className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </ol> */}

            </header>
        </div>
    )
}

export default Header