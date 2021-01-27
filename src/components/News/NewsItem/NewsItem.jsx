import React from 'react';
import s from './NewsItem.module.css';

const NewsItem = (props) => {
    return (
        <a href={props.url} target='_blank'>
        <div className={s.item}>
            <div className={s.image}><img src={props.img}/></div>
            <div className={s.text}>{props.title}</div>
        </div>
        </a>
    );
}

export default NewsItem;