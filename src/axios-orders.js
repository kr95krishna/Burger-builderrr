import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-my-burger-96b98.firebaseio.com/'

});

export default instance;