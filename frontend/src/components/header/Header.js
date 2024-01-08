import '../../Style/Style.css'

function Header() {
    return(
        <div className="Header">
            <header>
                {/* ajouter le logo "certi biocide" */}
                <h1 className="title">Neutralise</h1>
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