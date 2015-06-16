var SteamID = require("node-steamid");
module.exports = function(app) {
	app.param("sid", function(req, res, next, sid) {
		var sid = new SteamID(sid);
		
		var temp = {
			valid: true
		};
		
		if(sid.valid()) {
			temp.sid = sid.sid64();
		} else {
			temp.valid = false;
		}
		req.sid = temp;
		
		next();
		
	});
};