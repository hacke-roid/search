function ImageShow({image}) {
    return(
        <div style={{ marginTop : '20px'}}>
            <img src={image.urls.small} alt={image.alt_description}/>
        </div>
        
    )
};

export default ImageShow;