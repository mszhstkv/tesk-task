import React from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import defaultImage from '../../assets/image/desktop/img1.png'
const News = (props) => {

    let newsElements =
        props.news.slice(0, 3).map((p, index) => <NewsItem title={p.title} url={p.url} img={p.img} key={index}/>)
    let moreNews = props.news.flat().slice(3)
    let sortedMoreNews = moreNews.sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(p => <NewsItem title={p.title} url={p.url} img={defaultImage} />);

    let toggle = props.readMoreToggle;

    return (
        <div className={s.newsContainer}>

            {newsElements}

            {
                toggle ? sortedMoreNews : ''
            }

        </div>
    );
}

export default News;