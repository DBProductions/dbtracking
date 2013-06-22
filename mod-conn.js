var name = null,
    host = null,
    port = null,
    db = null,
    dbStr = null,
    dbname = null;

module.exports.tracking = function(options) {
    name = options.db;  
    dbname = options.dbname || 'tracking';
    host = options.host || 'localhost';
    if (name == 'mongodb') {        
        port = options.port || 27017;
        db = require('mongodb').MongoClient;
    } else if (name == 'couchdb') {     
        port = options.port || 5984;
        var cradle = require('cradle');
        new(cradle.Connection)(host, port, {
            cache: true,
            raw: false
        });
        var c = new(cradle.Connection);
        db = c.database(dbname);
    }
};

module.exports.save = function(doc, cb) {
    if (name == 'mongodb') {
        db.connect('mongodb://'+host+':'+port+'/'+dbname, function(err, db) {
            db.collection(dbname, function(err, collection) {
                if (err) console.log(err);
                collection.insert(doc, function() {
                    cb(doc);               
                });
            });
        });
    } else if (name == 'couchdb') {
        db.save(doc, function(err, res) {
            if (err) console.log(err);
            cb(doc);
        }); 
    }
};