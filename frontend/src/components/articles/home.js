import '../../Style/Style.css'


function Home() {
    return (
        <div className='home'>
            {/* Présentation des services avec images des insectes traités */}
            <div className='insectes'>
                <p>Nous luttons contre :</p>
            </div>
            {/* fiche de contact */}
            <div className='contact'>
                <p>Contactez nous :</p>
                <div className='mobile'>
                    <p className='mobile'>Téléphone : <a href='#'>06 12 34 56 78</a></p>
                    <p className='mail'>E-mail : <a href="#">votre.mail@exemple.com</a></p>
                </div>
                {/* cards de contacts */}
                <div className='cards'>

                </div>
            </div>

        </div>
    )
}

export default Home