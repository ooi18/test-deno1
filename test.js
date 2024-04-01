import { IP2Location } from "https://deno.land/x/ip2location@8.2.0/mod.ts";

/*let ip2location = new IP2Location();

ip2location.open("./IP2LOCATION-LITE-DB3.IPV6.BIN");

let testip = ['8.8.8.8', '2404:6800:4001:c01::67'];

for (var x = 0; x < testip.length; x++) {
	let result = ip2location.getAll(testip[x]);
	for (var key in result) {
		console.log(key + ": " + result[key]);
	}
	console.log("--------------------------------------------------------------");
}

ip2location.close();*/

const ip2location = new IP2Location();
ip2location.open("./IP2LOCATION-LITE-DB3.BIN");
// ip2location.open("./IP2LOCATION-LITE-DB3.IPV6.BIN");
// get ip address from request
// const ip = '8.8.8.8';
const ip = '2404:6800:4001:c01::67';
const geo = ip2location.getAll(ip);
console.log(geo);