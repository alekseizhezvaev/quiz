import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-9b21e.firebaseio.com/'
})