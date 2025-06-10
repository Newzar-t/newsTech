import React, { useEffect, useState } from 'react';
import Article from './Article.jsx';

function MainPage() {
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        $.get("https://api.rss2json.com/v1/api.json?rss_url=https://www.france24.com/fr/rss", function (data) {
            setNews(data.items);
        });
    }, []);

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <input
                type="search"
                id="searchBar"
                className="searchBar"
                placeholder="Search for news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mainPage">
                {filteredNews.map((item, index) => (
                    <Article
                        key={index}
                        image={item.thumbnail}
                        title={item.title}
                        author={item.author}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </>
    );
}

export default MainPage;


