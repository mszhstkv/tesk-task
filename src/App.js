import React from 'react';
import './App.css';
import NewsContainer from './components/News/NewsContainer';
import ReadMoreContainer from './components/ReadMore/ReadMoreContainer';
import ReviewsContainer from './components/Reviews/ReviewsContainer';

const App = () => {
  return (
    <main className='app-wrapper'>
      <ReviewsContainer />
      <div className='header-news'>
        <h1 className='header-news__text'>What's New?</h1>
      </div>
      <NewsContainer />
      <ReadMoreContainer />
    </main>

  )
}

export default App;
