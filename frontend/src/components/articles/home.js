import '../../Style/Style.css'
import ImageWithTitle from './imageWithTitle'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


// Les images
import cafards from '../../Style/images/Cafard.jpg'
import chenilles from '../../Style/images/Chenille.jpg'
import fourmis from '../../Style/images/Fourmis.jpg'
import guepes from '../../Style/images/Guepes.jpg'
import punaises from '../../Style/images/Punaise.jpg'
import souris from '../../Style/images/Souris.jpg'



function Home() {
    const imagesData = [
        {
            id: 1,
            imageUrl: souris,
            altText: "Photo d'une souris",
            title: "Les souris / Rats"
        },
        {
            id: 2,
            imageUrl: guepes,
            altText: "Photo d'une guêpe",
            title: "Les guêpes"
        },
        {
            id: 3,
            imageUrl: punaises,
            altText: "Photo d'une punaise",
            title: "Les punaises"
        },
        {
            id: 4,
            imageUrl: cafards,
            altText: "Photo d'un cafard",
            title: "Les carfards"
        },
        {
            id: 5,
            imageUrl: chenilles,
            altText: "Photo d'une chenille",
            title: "Les chenilles"
        },
        {
            id: 6,
            imageUrl: fourmis,
            altText: "Photo d'une fourmis",
            title: "Les fourmis"
        },


    ]

    // le lien
    const linkToCommonPage = "https://react.dev/reference/react/useContext";

    // division du tableau en rangée
    const firstRow = imagesData.slice(0, 3);
    const secondRow = imagesData.slice(3, 6);

    return (
        <div className='home container d-flex flex-column justify-content-center align-items-center'>
            <Router>
                {/* Présentation des services avec images des insectes traités */}
                <div className='insectes d-flex flex-column justify-content-center align-items-center'>
                    <h2>Nous luttons contre :</h2>
                    {/* Cards des insectes 
                    Faire les liaisons avec les balises React (Router, link, etc)

                    3 premiers :  rats souris / guêpes frelons / punaises 
                    3 derniers : le restes (à la place de "fourmis" mettre "autres insectes..")

                    clik redirect -> vers une description de la bestiole
                */}
                    <div className='insect-cards-area'>
                        <div className='second-row d-flex justify-content-around'>
                            {firstRow.map((image) => (
                                <Link key={image.id} to={linkToCommonPage} className='image-link'>
                                <ImageWithTitle
                                    key={image.id}
                                    imageUrl={image.imageUrl}
                                    altText={image.altText}
                                    title={image.title}/>
                                </Link>
                            ))}
                        </div>

                        <div className='first-row d-flex justify-content-around'>
                            {secondRow.map((image) => (
                                <Link key={image.id} to={linkToCommonPage} className='image-link'>
                                    <ImageWithTitle
                                        key={image.id}
                                        imageUrl={image.imageUrl}
                                        altText={image.altText}
                                        title={image.title} />
                                </Link>
                            ))}
                        </div>

                    </div>
                    {/* rajouter un block pour les mossisures et champignons / pigeons */}
                </div>
            </Router>
        </div>
    )
}

export default Home