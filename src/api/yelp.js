import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer t4i91q9Bg5tVve--z1GiaE9KdnJIVVsj1tVclroVZxh8dpQRdT_tpPYK6pTbOzAxrkLdzqMXkjIvGzVEH5UF0xk90_6NCQlS1EYQujEA3h1QvSQADYE1UbCzsP-yX3Yx'
  }
});
