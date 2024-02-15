import '../../Style/Style.css';

function ContactUs() {
    return (
        <div className='contact_container container d-flex justify-content-center'>
            {/* fiche de contact 
            
            Pas beau, quelques points à améliorer :
            - Le message avec les deux points : trouver un moyen de rendre ça plus beau
            - plus gros
            - rajouter "diagnostic et devis gratuit"
            - Rajouter "intervention dans toute l'IDF et Champagne Ardenne"
            */}

            <div className='contact'>
                <div className="contact-title">
                    <h2>Contactez nous:</h2>
                    <h3 className="devis h5">diagnostic et devis gratuit</h3>
                </div>

                {/* cards de contacts */}
                <div className='contact-cards'>

                    <p className='mobile'>Téléphone : <a href='#'>06 12 34 56 78</a></p>
                    <p className='mail'>E-mail : <a href="#">votre.mail@exemple.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs