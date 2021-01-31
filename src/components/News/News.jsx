import React from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import defaultImageDekstop from '../../assets/image/desktop/img1.png'
import defaultImageDekstop2x from '../../assets/image/desktop/img1@2x.png'
import defaultImageDekstop3x from '../../assets/image/desktop/img1@3x.png'
import defaultImageMobile from '../../assets/image/mobile/img1.png'
import defaultImageMobile2x from '../../assets/image/mobile/img1@2x.png'
import defaultImageMobile3x from '../../assets/image/mobile/img1@3x.png'

const News = (props) => {

    let newsElements =
        props.news.slice(0, 3).map((p, index) => <NewsItem
            title={p.title}
            url={p.url}
            imagesDesktop={p.imagesDesktop}
            imagesMobile={p.imagesMobile}
            imgDefault={p.imgDefault}
            key={index} />)

    let moreNews = props.news.flat().slice(3)
    let sortedMoreNews = moreNews.sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(p => <NewsItem
            title={p.title}
            url={p.url}
            imgDefault={defaultImageDekstop}
            imagesDesktop={`${defaultImageDekstop} 1x, ${defaultImageDekstop2x} 2x, ${defaultImageDekstop3x} 3x`}
            imagesMobile={`${defaultImageMobile} 1x, ${defaultImageMobile2x} 2x, ${defaultImageMobile3x} 3x`} />);

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