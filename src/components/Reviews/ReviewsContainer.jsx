import React from 'react';
import Reviews from './Reviews';
import { connect } from 'react-redux';
import { getFeedBackData, getBackPage, getForwardPage } from '../../redux/reviews-reducer';

class ReviewsContainer extends React.Component {

    componentDidMount() {
		this.props.getFeedBackData();
    }
    
    onPageChangedBack = () => {
        this.props.getBackPage(this.props.currentPage)
    }

    onPageChangedForward = () => {
        this.props.getForwardPage(this.props.currentPage)
    }

    render() {
        return <Reviews 
        reviews={this.props.reviews}
        currentPage={this.props.currentPage}
        name={this.props.name}
        text={this.props.text}
        instagram_username={this.props.instagram_username}
        onPageChangedBack={this.onPageChangedBack}
        onPageChangedForward={this.onPageChangedForward}/>
    }

    
}

const mapStateToProps = (state) => {
	return {
		reviews: state.reviews.reviews,
		text: state.reviews.text,
        instagram_username: state.reviews.instagram_username,
        name: state.reviews.name,
        currentPage: state.reviews.currentPage
	}
};

export default connect(mapStateToProps, {getFeedBackData, getBackPage, getForwardPage })(ReviewsContainer);