import { dataAPI } from '../api/dataAPI';

const SET_FEEDBACK = 'SET_FEEDBACK';
const SET_BACK_PAGE = 'SET_BACK_PAGE';
const SET_FORWARD_PAGE = 'SET_FORWARD_PAGE';

let initialState = {
    reviews: [],
    currentPage: 0,
    name: 'Rusty',
    text: 'I have never come across an Instagram growth application like Combin. It has everything I need: PC-friendly, targeted hashtag search and many other handy features. Combin has worked wonders for my account @pet.of.art with getting new followers!',
    instagram_username: 'pet.of.art'
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEEDBACK:
            return { ...state, reviews: action.reviews }
        case SET_BACK_PAGE:
            return {
                ...state,
                currentPage: action.currentPage > 0
                    ? action.currentPage - 1
                    : action.currentPage = 0
            }
        case SET_FORWARD_PAGE:
            return {
                ...state,
                currentPage: action.currentPage < state.reviews.length
                    ? action.currentPage + 1
                    : action.currentPage = state.reviews.length
            }
        default:
            return state;
    }
};


export const setReviews = (reviews) => ({ type: SET_FEEDBACK, reviews });
export const setBackPage = (currentPage) => ({ type: SET_BACK_PAGE, currentPage });
export const setForwardPage = (currentPage) => ({ type: SET_FORWARD_PAGE, currentPage });

export const getFeedBackData = () => (dispatch) => {
    dataAPI.getFeedBack()
        .then(data => {
            dispatch(setReviews(data));
        });
};

export const getBackPage = (currentPage) => {
    return (dispatch) => {
        dispatch(setBackPage(currentPage));
    };
}

export const getForwardPage = (currentPage) => {
    return (dispatch) => {
        dispatch(setForwardPage(currentPage));
    };
}

export default reviewsReducer;