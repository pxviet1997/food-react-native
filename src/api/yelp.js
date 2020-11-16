import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer aDFPNc0satn5DPpYnVvQ9F4ucPbH-0OCBIMy4yc9U9XyCuWhWVCZE7LqnCXxSWNLv1CaZJkN8NGge0cADNxbcnXHoYfyrglK74XCXZv5f8oQwJzs8JC44sw4BA2yX3Yx'
  }
});

