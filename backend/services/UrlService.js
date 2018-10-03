const ObjectId = require('mongodb').ObjectId;
const MongoService = require('./MongoService') 

var defaultUrl = '';
var data = {
    url: '',
    msg: ''
};


function _queryDefaultUrl() {
    return MongoService.connect()
            .then(db => {
                const collection = db.collection('url');
                return collection.findOne()
            })
}


function queryUrl(url, isChecked) {
    _queryDefaultUrl()
        .then(data => {
            console.log('data after _queryDefaultUrl', data);
            defaultUrl = data.url;
            console.log('defaultUrl after _queryDefaultUrl:' , defaultUrl);
            // res.json(data);
        })
        // defaultUrl = '';

    // if (defaultUrl == '') {
    //     console.log('default url is empty doesnt mean false');
    // } else {
    //     console.log('default url is empty mean false');
    // }
    
    if (isChecked === 'true' && ((url[0] + url[1] + url[2]) === 'www')) {
        // console.log('the url starts with www and isChecked: url');
        data.url = url;
        return Promise.resolve(data);
    } else if (isChecked === 'false' && ((url[0] + url[1] + url[2]) === 'www')) {
        // console.log('the url starts with www and !isChecked');
        const msg = 'Please check the checkbox';
        // console.log('msg', msg);
        data.msg = msg;
        return Promise.resolve(data);
    } else if (isChecked === 'true' && ((url[0] + url[1] + url[2]) !== 'www') && defaultUrl) {
        // console.log('the url NOT starts with www and isChecked');
        data.url = defaultUrl;
        return Promise.resolve(data);
    } else if (isChecked === 'true' && ((url[0] + url[1] + url[2]) !== 'www') && !defaultUrl) {
        // console.log('no default url and !isChecked');
        const msg = 'Please enter an URL';
        // console.log('msg', msg);
        data.msg = msg;
        return Promise.resolve(data);
    }
    data = {
        url: '',
        msg: ''
    };
}



module.exports = {
    queryUrl,
}




