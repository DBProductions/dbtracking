# dbtracking

Simple tracking system based on NodeJS which stores data in a MongoDB.

## Data

The JSON looks like this:

`{url: params.url, site: params.site, timestamp: new Date().getTime()}`

There is a optional parameter `step`, if you want to track different steps.

## How to track data

Imagetag  

    <img src="http://127.0.0.1:3000/?site=track_with_image_on_page&url=/">

Script

    <script>  
    var site = 'example site';  
    var img = new Image();  
    img.src = "http://127.0.0.1:3000/?site=" + site + "&url=" + document.location.href;  
    </script>

## Feedback
Star this repo if you found it useful. Use the github issue tracker to give feedback on this repo.
