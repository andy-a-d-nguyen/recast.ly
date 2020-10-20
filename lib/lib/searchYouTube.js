var searchYouTube = ({ key, query, max = 5 }, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: true
    },
    success: function (data) {
      callback(data.items);
    },
    error: function (response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;