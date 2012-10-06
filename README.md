Tracking with NodeJS and MongoDB or CouchDB

## Require:
 - mongodb
 - cradle

Write data to a local database the module can act with mongodb and couchdb.

## Configuration

`var options = {db: 'mongodb', host: 'localhost', port: 27017, dbname: 'tracking'}`

## Data

It's JSON and look like this:

`{url: params.url, site: params.site, timestamp: new Date().getTime()}`

## How to track data

Imagetag
`&lt;img src="http://127.0.0.1:3000/?site=track_with_image_on_page&url=/">`

Script
`&lt;script>
var site = 'example site'; 
var img = new Image(); 
img.src = "http://127.0.0.1:3000/?site=" + site + "&url=" + document.location.href;
&lt;/script>`
