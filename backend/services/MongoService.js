var dbConn = null;

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://url_db:url123@ds121413.mlab.com:21413/url_db';

    return MongoClient.connect(url)
        .then(client => {
            // console.log('Connected to MongoDB');
            client.on('close', ()=>{
                // console.log('MongoDB Diconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}

module.exports = {
    connect : connectToMongo
}
