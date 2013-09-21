var host = process.env.HOST, port = 80;
var app = require('http').createServer()
	, io = require('socket.io').listen(app);

// var url = require("url").parse(process.env.OPENREDIS_URL);
// var redis = require("redis").createClient(url.port, url.hostname);
// redis.auth(url.auth.split(":")[1]);

// Redis Cloud
// process.env.REDISCLOUD_URL=redis://rediscloud:9BrvTFM4UKa3c1gU@pub-redis-15994.us-east-1-4.3.ec2.garantiadata.com:15994
// var redis = require("redis").createClient(15994, "pub-redis-15994.us-east-1-4.3.ec2.garantiadata.com");
// redis.auth("9BrvTFM4UKa3c1gU");

// Redis To Go
// process.env.REDISTOGO_URL=redis://redistogo:8dc1ca1ae85ad5a2b8e17c942455b544@dory.redistogo.com:11101/
//var redis = require("redis").createClient(11101, "dory.redistogo.com");
//redis.auth("8dc1ca1ae85ad5a2b8e17c942455b544");

// Openredis
// redis-cli -h proxy3.openredis.com  -p 13178 -a e9edeab20a11f5f693df70fdeae62647909314499e85d7b0a12a671a9048302d
// process.env.OPENREDIS_URL=redis://:e9edeab20a11f5f693df70fdeae62647909314499e85d7b0a12a671a9048302d@54.225.188.108:13178
// var redis = require("redis").createClient(13178, "54.225.188.108");
// redis.auth("e9edeab20a11f5f693df70fdeae62647909314499e85d7b0a12a671a9048302d");

/*
OPENREDIS_URL:  redis://:e9edeab20a11f5f693df70fdeae62647909314499e85d7b0a12a671a9048302d@54.225.188.108:13178
REDISCLOUD_URL: redis://rediscloud:9BrvTFM4UKa3c1gU@pub-redis-15994.us-east-1-4.3.ec2.garantiadata.com:15994
REDISTOGO_URL:  redis://redistogo:8dc1ca1ae85ad5a2b8e17c942455b544@dory.redistogo.com:11101/
*/

app.listen(port, host);

io.configure(function () { 
	io.set("transports", ["xhr-polling"]); 
	io.set("polling duration", 10); 
});

function handler(req, res) {
	res.writeHead(200);
	res.end("Hello Socket");
}

