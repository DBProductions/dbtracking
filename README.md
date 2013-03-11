Tracking with NodeJS
====================
Can use MongoDB or CouchDB to store data.

### MongoDB
 - mongodb

### CouchDB
 - cradle

Write data to database, the module can act with mongodb and couchdb.

## Configuration

MongoDB  

`var options = {db: 'mongodb', host: 'localhost', port: 27017, dbname: 'tracking'};`

CouchDB  

`var options = {db: 'couchdb', host: 'localhost', port: 5984, dbname: 'tracking'};`

## Data

The JSON looks like this:

`{url: params.url, site: params.site, timestamp: new Date().getTime()}`

There is a optional parameter `step`, if you want to track different steps.

## How to track data

Imagetag  
    <img src="http://127.0.0.1:3000/?site=track_with_image_on_page&url=/">

Script

    var site = 'example site';  
    var img = new Image();  
    img.src = "http://127.0.0.1:3000/?site=" + site + "&url=" + document.location.href;
