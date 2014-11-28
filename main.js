var http = require('http'),
    url = require('url'),
    querystring = require('querystring'),    
    db = require('mongodb').MongoClient;

var host = 'localhost';
var port = 27017;
var dbname = 'dbtracking';
var collectionname = 'trackings';

db.connect('mongodb://'+host+':'+port+'/'+dbname, function(err, db) {
    if (err) console.log(err);

    db.collection(collectionname, function(err, collection) {
        if (err) console.log(err);

        http.createServer(function(req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});    
            elems = url.parse(req.url);
            params = querystring.parse(elems.query);
            res.writeHead(200, {'Content-Type': 'image/gif'});
            if (params.url === undefined) {
                res.end();
                return;
            }
            var doc = {
                url: params.url,
                site: params.site || '',
                timestamp: new Date().getTime()
            };
            if (params.step !== undefined) {
                doc.step = params.step; 
            }

            collection.insert(doc, function() {
                console.log(doc);
            });            
            res.end();
        }).listen(3000);

        console.log('Server runs and listen to http://127.0.0.1:3000/');   
    });
});
