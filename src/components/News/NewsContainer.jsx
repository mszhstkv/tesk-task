import React from 'react';
import News from './News';
import { connect } from 'react-redux';
import { getblogPostsData } from '../../redux/news-reducer';

class NewsContainer extends React.Component {



    render() {
        return <News 
        news={this.props.news}
        readMoreToggle={this.props.readMoreToggle}/>
    }
}

const mapStateToProps = (state) => {
	return {
        news: state.news.news,
        readMoreToggle: state.news.readMoreToggle
	}
};

export default connect(mapStateToProps, {}) (NewsContainer);