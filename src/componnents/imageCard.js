import React from 'react';

function ImageCard(props) {
    // console.log(props.image);
    const { image } = props
    const tags = image.tags.split(',')
    return (
        <div className="card">
            <img className="img-fluid" src={image.webformatURL} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"></h5>
                <h5><span>Photo by :</span> {image.user}</h5>
            </div>
            <div className="footer pb-2">
                <ul>
                    <li><strong>Views : </strong>{image.views}</li>
                    <li><strong>Downloads : </strong>{image.downloads}</li>
                    <li><strong>Likes : </strong>{image.likes}</li>
                </ul>
                <section className="tags-contaiiner">
                    {tags.map((tag, index) => <span className="badge badge-pill badge-light" key={index}>#{tags}</span>)}
                </section>
            </div>

        </div>

    )
}

export default ImageCard;