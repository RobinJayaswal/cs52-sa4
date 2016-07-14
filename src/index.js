import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import youtubeSearch from './youtube-api.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import debounce from 'lodash.debounce';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

  search(text) {
    youtubeSearch(text).then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar id="searchbar" onSearchChange={(text) => this.search(text)} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => { this.setState({ selectedVideo }); }} />
        </div>
      </div>);
  }
}
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>);
// };

ReactDOM.render(<App />, document.getElementById('main'));
