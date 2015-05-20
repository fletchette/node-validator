var SteamID = require("node-steamid");
module.exports = function(app) {
	app.param("sid", function(req, res, next, sid) {
		console.log(req.params);
		var sid = new SteamID(sid);
		if(sid.valid()) {
			req.params.sid = sid.sid64();
			next();
		} else {
			next(new Error("Invalid SteamID"));
		}
	});
};