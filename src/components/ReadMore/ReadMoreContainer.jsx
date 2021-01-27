import React from 'react';
import ReadMore from './ReadMore';
import { connect } from 'react-redux';
import { getblogPostsData } from '../../redux/news-reducer';

class ReadMoreContainer extends React.Component {

  onReadMore = () => {
    this.props.getblogPostsData(this.props.readMoreToggle);
  }
  

    render() {
        return <ReadMore 
        news={this.props.news}
        onReadMore={this.onReadMore}
        readMoreToggle={this.props.readMoreToggle}/>
    }
}

const mapStateToProps = (state) => {
	return {
        news: state.news.news,
        readMoreToggle: state.news.readMoreToggle
	}
};

export default connect(mapStateToProps, {getblogPostsData}) (ReadMoreContainer);