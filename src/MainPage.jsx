import React, { useEffect, useState } from 'react';
import Article from './Article.jsx';
import Header from './Header.jsx';
import HeaderCategory from './HeaderCategory.jsx';
import $ from 'jquery';

const rssFeed = [
    {
        subject: "ia",
        url: "https://siecledigital.fr/intelligence-artificielle/feed/",
    },
    {
        subject: "tech",
        url: "https://www.blogdumoderateur.com/tech/feed/",
    },
    {
        subject: "social",
        url: "https://siecledigital.fr/reseaux-sociaux/feed/",
    },
    {
        subject: "startup",
        url: "https://www.maddyness.com/category/actus/feed/",
    },
];

function MainPage() {
    const [news, setNews] = useState([]);
    const [selectedFeed, setSelectedFeed] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        if (selectedFeed) {
            $.get(`https://api.rss2json.com/v1/api.json?rss_url=${selectedFeed.url}`, function (data) {
                setNews(data.items);
            });
        } else {
            let allFeeds = [];
            let loadedFeeds = 0;

            rssFeed.forEach((feed) => {
                $.get(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`, function (data) {
                    allFeeds = [...allFeeds, ...data.items];
                    loadedFeeds++;
                    if (loadedFeeds === rssFeed.length) {
                        setNews(allFeeds);
                    }
                });
            });
        }
    }, [selectedFeed]);

    const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm) ||
    item.description?.toLowerCase().includes(searchTerm) ||
    item.author?.toLowerCase().includes(searchTerm)
);

    return (
        <>
           
            
            <input
                type="search"
                id="searchBar"
                className="searchBar"
                placeholder="Search for news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                
            /> 
            
            <Header categorys={rssFeed.map((feed) => (
                <HeaderCategory
                    key={feed.subject}
                    category={feed.subject}
                    targetCategory={() => {setSelectedFeed(feed)}}
                />
            ))} />

            <div className="mainPage">
                {filteredNews.map((item, index) => (
                    <Article
                        key={index}
                        image={item.thumbnail || item.url || null}
                        title={item.title}
                        date={item.pubDate}
                        author={item.author}
                        link={item.link}
                    />
                ))}
            </div>
        </>
    );
}

export default MainPage;



