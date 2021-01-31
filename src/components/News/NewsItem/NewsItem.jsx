import React from 'react';
import s from './NewsItem.module.css';

const NewsItem = (props) => {
    return (
        <a href={props.url} target='_blank'>
            <div className={s.item}>
                <div className={s.image}>
                    <picture>
                        <source srcSet={props.imagesDesktop} media='(min-width: 841px)' />
                        <source srcSet={props.imagesMobile} media='(max-width: 840px)' />
                        <img src={props.imgDefault} alt=''/>
                    </picture> </div>
                <div className={s.text}>{props.title}</div>
            </div>
        </a>
    );
}

export default NewsItem;