
import axios from 'axios'


const URL_URL = (process.env.NODE_ENV !== 'development')? '/url': '//localhost:3000/url';

function query(criteria = {url: '', isChecked}) {
    console.log('criteria in query', criteria);
    var queryParams = `?url=${criteria.url}&isChecked=${criteria.isChecked}`;
    return axios.get(URL_URL + queryParams)
        .then(res => {
            console.log('url back from server', res.data);
            return res.data})
}

export default {
    query,
}



