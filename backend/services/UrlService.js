// const urls = [{
//     "id": _makeId(),
//     "url": "www.google.com",
// },
// {
//     "id": _makeId(),
//     "url": "www.broadway.com",
// },
// {
//     "id": _makeId(),
//     "url": "www.amazon.com",
// },
// ];


// const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

const data = {
    url: '',
    msg: ''
};


// const defaultUrl = 'www.galapro.com';
const defaultUrl = '';


function queryUrl(url, isChecked) {
    console.log('isChecked in queryUrl ', isChecked);
    if (isChecked && url[0] + url[1] + url[2] === 'www') {
        console.log('the url starts with www and isChecked');
        data.url = url;
        return Promise.resolve(data);
    } else if (!isChecked && url[0] + url[1] + url[2] === 'www') {
        console.log('the url starts with www and !isChecked');
        const msg = 'Please check the checkbox';
        console.log('msg', msg);
        data.msg = msg;
        return Promise.resolve(data);
    } else if (isChecked && url[0] + url[1] + url[2] !== 'www' && defaultUrl) {
        console.log('the url NOT starts with www and isChecked');
        data.url = defaultUrl;
        return Promise.resolve(data);
    } else if (isChecked && url[0] + url[1] + url[2] !== 'www' && !defaultUrl) {
        console.log('no default url and !isChecked');
        const msg = 'Please enter an URL';
        console.log('msg', msg);
        data.msg = msg;
        return Promise.resolve(data);
    }

    // console.log('url in queryUrl in service back,', defaultUrl);
    // return Promise.resolve(defaultUrl);
}

function _makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

module.exports = {
    queryUrl,
}




