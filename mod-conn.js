var name = null;
var db = null;
var dbname = null;

module.exports.connection = function(options) {
    name = options.db;	
    dbname = options.dbname || 'tracking';
    var host = options.host || 'localhost';    
    if (name == 'mongodb') {  	    
        var port = options.port || 27017;		
        var mongo = require('mongodb');
        db = new mongo.Db(dbname, new mongo.Server(host, port, {}), {});		
    } else if (name == 'couchdb') {	    
        var port = options.port || 5984;
        var cradle = require('cradle');
        new(cradle.Connection)(host, port, {
            cache: true,
            raw: false
        });
        var c = new(cradle.Connection);
        db = c.database(dbname);
    }
};

module.exports.save = function(doc) {
    if (name == 'mongodb') {
        db.open(function() {
            db.collection(dbname, function(err, collection) {
                collection.insert(doc, function() {
                    console.log(doc);				
                });
            });
        });
    } else if (name == 'couchdb') {
        db.save(doc, function(err, res) {
            console.log(doc);
        });	
    }
};
