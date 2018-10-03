const UrlService = require('../services/UrlService')

module.exports = (app) => {
    // app.get('/url', (req, res) => {
    //    UrlService.query()
    //     .then(url => res.json(url))
    // })

    app.get('/url', (req, res) => {
        console.log('req.query.isChecked in route', req.query.isChecked);
        
        UrlService.queryUrl(req.query.url, req.query.isChecked)
            .then(data => res.json(data))
    })
}