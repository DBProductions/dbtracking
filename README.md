Tracking with NodeJS
====================
Can use MongoDB or CouchDB to store data.

### MongoDB
 - mongodb

### CouchDB
 - cradle

Write data to database, the module can act with mongodb and couchdb.

## Configuration

`var options = {db: 'mongodb', host: 'localhost', port: 27017, dbname: 'tracking'}`

## Data

It's JSON and look like this:

`{url: params.url, site: params.site, timestamp: new Date().getTime()}`

## How to track data

Imagetag<br />
`<img src="http://127.0.0.1:3000/?site=track_with_image_on_page&url=/">`

Script<br />
`var site = 'example site';`<br />`
var img = new Image();`<br />`
img.src = "http://127.0.0.1:3000/?site=" + site + "&url=" + document.location.href;`
