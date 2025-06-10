import React, { useEffect, useState } from 'react';
import Article from './Article.jsx';

function MainPage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        $.get("https://api.rss2json.com/v1/api.json?rss_url=https://www.france24.com/fr/rss", function (data) {
            setNews(data.items);
        });
    }, []);

    return (
        <div className="mainPage">
            {news.map((item, index) => (
                <Article
                    key={index}
                    title={item.title}
                    author={item.author}
                    description={item.description}
                    link={item.link}
                />
            ))}
        </div>
    );
}

export default MainPage;

