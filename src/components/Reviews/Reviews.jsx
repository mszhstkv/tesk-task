import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';
import s from './Reviews.module.css';
import ellipse from '../../assets/image/icon/ellipse.svg';
import arrow from '../../assets/image/icon/arrow-review.svg';
const Reviews = (props) => {

    return (
        <div className={s.reviewsContainer}>
            <div className={s.reviewItem}>
                {
                    props.reviews.length > 0
                        ? <ReviewItem name={props.reviews[props.currentPage].name} text={props.reviews[props.currentPage].text} instagram_username={props.reviews[props.currentPage].instagram_username} />
                        : <ReviewItem name={props.name} text={props.text} instagram_username={props.instagram_username} />
                }
            </div>
            <div className={s.circle}><img className={s.responsiveCircle} src={ellipse} alt='' /></div>
            <div className={s.buttons}>
                {
                    props.currentPage == 0 &&
                    <button disabled className={s.backButton} onClick={() => { props.onPageChangedBack() }}></button>
                }
                {
                    props.currentPage == 0 && <img className={s.arrowImgBackDisabled} src={arrow} />
                }
                {
                    props.currentPage > 0 &&
                    <button className={s.backButton} onClick={() => { props.onPageChangedBack() }}></button>
                }
                {
                    props.currentPage > 0 && <img className={s.arrowImgBack} src={arrow} />
                }

                {
                    props.currentPage == props.reviews.length-1 &&
                    <button disabled className={s.forwardButton} onClick={() => { props.onPageChangedForward() }}></button>
                }
                {
                    props.currentPage == props.reviews.length-1 && <img className={s.arrowImgForwardDisabled} src={arrow} />
                }
                {
                    props.currentPage < props.reviews.length-1 &&
                    <button className={s.forwardButton} onClick={() => { props.onPageChangedForward() }}></button>
                }
                {
                    props.currentPage < props.reviews.length-1 && <img className={s.arrowImgForward} src={arrow} />
                }
            </div>
        </div>
    );
}

export default Reviews;