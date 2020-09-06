import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Nk1wnVtSKbShMYCU8WkY7F4RjzZzhVG6uh3SCvpJqQQ'
    }
});