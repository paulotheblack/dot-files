///home/pi/MagicMirror/config/config.js
var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	customCss: "css/main.css",
	modules: [
		{
			module: "clock",
			position: "top_center",
			zoom: 2
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Kosice (centrum)",
				locationID: "865084",
				appid: "d8ec8c82bd02deb36bf57113d004abbe"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Kosice",
				locationID: "865084", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "d8ec8c82bd02deb36bf57113d004abbe"
			}
		},
		{
			module: "MMM-BurnIn", //screen flicker - to prevent display burn-in
			positions: "bottom_bar", //not displayed!
			config: {
				updateInterval: 15
			}
		},
		{
			module: "MMM-Screencast",
			position: "bottom_center", // This position is for a hidden <div /> and not the screencast window
			config: {
				position: "bottomCenter",
				height: 300,
				width: 500,
			}
		},
		{
			module: "calendar",
			position: "top_left",	// This can be any of the regions. Best results in left or right regions.
			header: "Paulovic Family Calendar",
			config: {
				colored: true,
				calendars: [
					{
						url: "https://calendar.google.com/calendar/ical/p3ffr4ts6cu82hb70f4ru2i1as%40group.calendar.google.com/private-5dc98c0bd6cbb360e13acc61532c140d/basic.ics",
						symbol: "calendar",
						auth: {
							user: "kavomatapi",
							pass: "Heslo911"
						}
					}
				]
			}
		},
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "bottom_left",
			config: {
				showCoverArt: true,
			  	clientID: "3a587813d86a4f8dbd73604496c14578", // Paulo -> ucet
			  	clientSecret: "a5f5ba41f00d45f68dad25325debf67f",
			  	accessToken: "BQBboD2TKgOWr0Dc74HI3s2glyySHJmeo7uKXHYTQtxHTfgf9McO-eBYBFfx-NJgJrX3ABxwMaz6mf3PybBOS-PNlh1UlCGHnUScvdeWd5ShieYjW1_khMTh1eQHl0acEGQhRHF_4BSjVuacgsurcPytCTq3_2gGAN6T_kN-lF8iVA",
			  	refreshToken: "AQBR9Hce_vuKGZZ2j3eq0sPLV1PQRmCWuNebr3Y3RCOzstLzEgsMHsAfVyCZ8uE9cIDLfAlR_EjnSrjoFJ8rUXpDa3Mgx1MRwR_FIi5LSdHY703YDa4yvsd1gbZaXZCLsNE"
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
