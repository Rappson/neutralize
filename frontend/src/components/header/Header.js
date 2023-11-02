import '../../Style/Style.css'

function Header() {
    return(
        <div className="Header">
            <header>
                <h1 className="title">Neutralise</h1>
                <div className='menu-list'>
                    <ul className='menu-list-components'>
                        <ol>Accueil</ol>
                        <ol>Présentation</ol>
                        <ol>Nos services</ol>
                        <ol>Contact</ol>
                    </ul>
                </div>

            </header>
        </div>
    )
}

export default Header