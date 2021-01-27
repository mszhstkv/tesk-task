import React from 'react';
import s from './ReviewItem.module.css';

const ReviewItem = (props) => {
    return (
        <div className={s.reviewItemTextField}>
            <div className={s.reviewItemText}>
                {props.text}
            </div>
            <div className={s.reviewItemNameAndInst}>
                <span className={s.reviewItemName}>{props.name}, </span> <span className={s.reviewItemInst}>{props.instagram_username}</span>
            </div>
        </div>
    );
}

export default ReviewItem;