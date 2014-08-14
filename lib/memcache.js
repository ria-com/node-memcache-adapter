var Memcached = require('memcached'),
    config = require('config');

module.exports = new Memcached(
    config.memcached.host+':'+config.memcached.port,
    config.memcached.options
);