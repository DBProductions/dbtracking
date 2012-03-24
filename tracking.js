var sys = require('sys'),
    http = require('http'),
    querystring = require('querystring'),
    url = require('url'),
    mongo = require('mongodb'),
    db = new mongo.Db('tracking', new mongo.Server('127.0.0.1', 27017, {}), {});

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    db.open(function() {
    	db.collection('pagetracks', function(err, collection){
    		elems = url.parse(req.url);
			params = querystring.parse(elems.query);
			if (params.url === undefined || params.site === undefined) {
				res.writeHead(200, {'Content-Type': 'image/jpeg'});
				res.end();
				return;
			}
			doc = {url: params.url, site: params.site, timestamp: new Date().getTime()};
			collection.insert(doc, function() {
				res.end();
			});
    	});
    });
}).listen(8080);
