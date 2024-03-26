import '../../Style/Style.css';
import biocide from '../../Style/images/CertiBiocide.png';
import ferme from '../../Style/images/Partners/FermeSaclay.png';
import foodAsia from '../../Style/images/Partners/FoodAsia.png';
import parisSaclay from '../../Style/images/Partners/ParisSaclay.png';


function Partner() {
    return (
        <div className='partner_container container d-flex flex-column align-items-center'>
            <h2>Nos partenaires</h2>
            <ul className='img_partners_area d-flex flex-row align-items-center'>
                <ol className="ferme">
                    <img src={ferme} alt='logo de partenaire : ferme de Saclay' className="Partners_logo"></img>
                </ol>
                <ol className="foodAsia">
                    <img src={foodAsia} alt='logo de partenaire : FoodAsia' className="Partners_logo"></img>
                </ol>
                <ol className="ParisSaclay">
                    <img src={parisSaclay} alt='logo de partenaire : Paris Saclay' className="Partners_logo"></img>
                </ol>
            </ul>
        </div>
    )
}

export default Partner;