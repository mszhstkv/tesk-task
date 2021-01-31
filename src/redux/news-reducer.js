import blogPostsData from '../json/blog_posts.json'
import imageDOne from '../assets/image/desktop/img1.png'
import imageDOne2x from '../assets/image/desktop/img1@2x.png'
import imageDOne3x from '../assets/image/desktop/img1@3x.png'
import imageMOne from '../assets/image/mobile/img1.png'
import imageMOne2x from '../assets/image/mobile/img1@2x.png'
import imageMOne3x from '../assets/image/mobile/img1@3x.png'
import imageDTwo from '../assets/image/desktop/img2.png'
import imageDTwo2x from '../assets/image/desktop/img2@2x.png'
import imageDTwo3x from '../assets/image/desktop/img2@3x.png'
import imageMTwo from '../assets/image/mobile/img2.png'
import imageMTwo2x from '../assets/image/mobile/img2@2x.png'
import imageMTwo3x from '../assets/image/mobile/img2@3x.png'
import imageDThree from '../assets/image/desktop/img3.png'
import imageDThree2x from '../assets/image/desktop/img3@2x.png'
import imageDThree3x from '../assets/image/desktop/img3@3x.png'
import imageMThree from '../assets/image/mobile/post3.png'
import imageMThree2x from '../assets/image/mobile/post3@2x.png'
import imageMThree3x from '../assets/image/mobile/post3@3x.png'


const READ_MORE = 'READ_MORE';

let initialState = {
    news: [
        {
            url: 'https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b',
            title: 'Instagram FAQ — All You Need To Know',
            imgDefault: imageDOne,
            imagesDesktop: `${imageDOne} 1x, ${imageDOne2x} 2x, ${imageDOne3x} 3x`,
            imagesMobile: `${imageMOne} 1x, ${imageMOne2x} 2x, ${imageMOne3x} 3x`
        },
        {
            url: 'https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63',
            title: 'DMEXCO 2019 — Meet Combin in Cologne',
            imgDefault: imageDTwo,
            imagesDesktop: `${imageDTwo} 1x, ${imageDTwo2x} 2x, ${imageDTwo3x} 3x`,
            imagesMobile: `${imageMTwo} 1x, ${imageMTwo2x} 2x, ${imageMTwo3x} 3x`

        },
        {
            url: 'https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7',
            title: 'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1',
            imgDefault: imageDThree,
            imagesDesktop: `${imageDThree} 1x, ${imageDThree2x} 2x, ${imageDThree3x} 3x`,
            imagesMobile: `${imageMThree} 1x, ${imageMThree2x} 2x, ${imageMThree3x} 3x`
        }
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