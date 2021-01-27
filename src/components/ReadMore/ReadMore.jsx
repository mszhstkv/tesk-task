import React from 'react';
import s from './ReadMore.module.css';
import readMoreArrow from '../../assets/image/icon/arrow-read-more.svg';

const ReadMore = (props) => {


    return (
        <div className={s.readMore}>
            {
                !props.readMoreToggle
                    ? <button className={s.readMoreButton} onClick={() => props.onReadMore()}>
                        Read More <div className={s.arrowContainer}>
                            <img src={readMoreArrow} alt=''/>
                        </div>
                    </button>
                    : ''
            }

        </div>
    );
}

export default ReadMore;