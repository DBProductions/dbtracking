Tracking with NodeJS and MongoDB or CouchDB

Require:
--------
- mongodb
- cradle

Write data to a local database the module can act with mongodb and couchdb.


The data has JSON formatand looks like this:
{url: params.url, site: params.site, timestamp: new Date().getTime()}

How to track data:\n
&lt;img src="http://127.0.0.1:3000/?site=track_with_image_on_page&url=/">

&lt;script>\n
var site = 'example site';\n
var img = new Image();\n
img.src = "http://127.0.0.1:3000/?site=" + site + "&url=" + document.location.href;\n
&lt;/script>