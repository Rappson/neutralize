import '../../Style/Style.css';

function ContactUs() {
    const adrEmail = "contact@neutralise.fr"
    const phone = "07 45 08 04 58"
    
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

                    <p className='mobile'>Téléphone : <a href={`tel:${phone}`}>{phone}</a></p>
                    <p className='mail'>E-mail : <a href={`mailto:${adrEmail}`}>{adrEmail}</a></p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs