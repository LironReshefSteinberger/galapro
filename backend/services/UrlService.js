const ObjectId = require('mongodb').ObjectId;
const MongoService = require('./MongoService') 

var defaultUrl = '';
var data = {
    url: '',
    msg: ''
};


function _queryDefaultUrl(url) {
    var criteria = {};
    if (url) criteria.url = {$regex : `.*${url}.*`};

    console.log('Criteria', criteria);
    return MongoService.connect()
            .then(db => {
                const collection = db.collection('url');
                return collection.findOne(criteria)
            })
}


function queryUrl(url, isChecked) {
    _queryDefaultUrl(url)
        .then(data => {
            console.log('data after _queryDefaultUrl', data);
            defaultUrl = data.url;
            console.log('defaultUrl after _queryDefaultUrl:' , defaultUrl);
            
            // res.json(data);
        })
    console.log('defaultUrl after _queryDefaultUrl ', defaultUrl);
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



module.exports = {
    queryUrl,
}




