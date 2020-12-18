import axios from 'axios';

const KEY = 'AIzaSyBNR7idYQQzayS-PVS9HrudilYA99DO9sk';

// default component to search Youtube for videos only (not playlists!)
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
  }
});
