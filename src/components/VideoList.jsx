import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = () => (
  <div className = "video-list">
    <VideoResults videos = {exampleVideoData}/>
  </div>
);

var VideoResults = (props) => (
  <div className ="video-list">
    {props.videos.map(video =>
      <VideoListItems video={video} />
    )}
  </div>
);

class VideoListItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.video.snippet.thumbnails.default.url}/>
        <div>{this.props.video.snippet.title}</div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
