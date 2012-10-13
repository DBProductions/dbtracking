var http = require('http'),
    querystring = require('querystring'),
    url = require('url'),
    modconn = require('./mod-conn');

var options = {
    db: 'mongodb',
    host: 'localhost',
    port: 27017,
    dbname: 'tracking'
}
modconn.connection(options);    

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});    
    elems = url.parse(req.url);
    params = querystring.parse(elems.query);
    if (params.url === undefined || params.site === undefined) {
	res.writeHead(200, {'Content-Type': 'image/gif'});
	res.end();
	return;
    }
    doc = {
	url: params.url,
	site: params.site,
	timestamp: new Date().getTime()
    };
    modconn.save(doc);
    res.end();
}).listen(3000);

console.log('Server runs and listen to http://127.0.0.1:3000/');
