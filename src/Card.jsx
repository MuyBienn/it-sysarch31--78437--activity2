function Card({ imageUrl, title, description }) {
    return (
        <div className="card">
            <img className="card-image" src={imageUrl} alt={title} />
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;