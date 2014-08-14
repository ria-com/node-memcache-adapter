## node-memcache-adapter ##
Node.js memcache adapter with [config][1] module integration
## Installing ##
Add to you package.json file:

    "dependencies": {
       "node-memcache-adapter": "git://github.com/ria-com/node-memcache-adapter.git"
    }
Then run `npm install`...
## Usage example ##
Add to your `default.js` config file:

    memcached: {
        host: '127.0.0.1',
        port: '11211',
        options: {
            poolSize: 32
        }
    }
Then include and use:

    var memcache = require('node-memcache-adapter');
    
    memcache.get('some_cache_name', function (err, data) {
        /* Do what you need here */
    });


  [1]: https://github.com/lorenwest/node-config