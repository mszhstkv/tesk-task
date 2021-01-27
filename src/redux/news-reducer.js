import blogPostsData from '../json/blog_posts.json'
import imageOne from '../assets/image/desktop/img1.png'
import imageTwo from '../assets/image/desktop/img2.png'
import imageThree from '../assets/image/desktop/img3.png'

const READ_MORE = 'READ_MORE';

let initialState = {
    news: [
        { url: 'https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b', title: 'Instagram FAQ — All You Need To Know', img: imageOne },
        { url: 'https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63', title: 'DMEXCO 2019 — Meet Combin in Cologne', img: imageTwo },
        { url: 'https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7', title: 'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1', img: imageThree }
    ],
    readMoreToggle: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_MORE:
            return {
                ...state,
                news: [...state.news, action.news],
                readMoreToggle: true
            }
        
        default:
            return state;
    }
};

export const setReadMore = (news, readMoreToggle) => ({ type: READ_MORE, news, readMoreToggle });

export const getblogPostsData = () => {

    return (dispatch) => {
        dispatch(setReadMore(blogPostsData));
    };
};

export default newsReducer;