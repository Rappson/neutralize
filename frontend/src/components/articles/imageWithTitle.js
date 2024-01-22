import '../../Style/Style.css'


function ImageWithTitle(props) {
    const { imageUrl, title, altText } = props;
    return (
        <div className="bloc-image ml-2">
            <img src={imageUrl} alt={altText} className='insect-cards-img'></img>
            <h4 className='insect-title'>{title}</h4>
        </div>
    )
}

export default ImageWithTitle;