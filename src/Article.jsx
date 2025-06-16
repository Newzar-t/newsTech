function Article({title, author, link, date,image}){
    return(
        <div className="article">
            {image && <img src={image} alt={title} />}
            <span><h2>{title}</h2>
            <p>{date}</p></span>
            <a href={link}><p>Source : {author}</p></a>
        </div>
    )
}

export default Article;