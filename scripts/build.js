var ncp = require('ncp').ncp;

ncp('lib/doc', 'dist/doc');
ncp('lib/dist', 'dist/lib/dist');
