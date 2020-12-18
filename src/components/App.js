import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  // component starts as an empty array, and no selected video
  state = {
    videos: [],
    selectedVideo: null
  };

  // default search term when application first loads
  componentDidMount(){
    this.onTermSubmit('Everton Press Conference');
  }

  // callback
  onTermSubmit = async (term) => {
    // make request to YouTube
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    // set results as state for component, and set selected video
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  // video fetched from Youtube API
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render(){
    return(
      <div className="ui container">
        { /* Add callback as property */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo } />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={ this.onVideoSelect }
                videos={ this.state.videos }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
