function Article({title, author, link, description}){
    return(
        <div className="article">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}><p>Source : {author}</p></a>
        </div>
    )
}

export default Article;