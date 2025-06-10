function Article({title, author, link, description,image}){
    return(
        <div className="article">
            <img src={image}></img>
            <span><h2>{title}</h2>
            <p>{description}</p></span>
            <a href={link}><p>Source : {author}</p></a>
        </div>
    )
}

export default Article;