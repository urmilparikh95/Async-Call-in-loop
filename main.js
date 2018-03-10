var Promise = require('bluebird');

promises = [];
for (i = 0; i < 100; i++) {
	promise = new Promise(function (resolve, reject) {
		setTimeout(resolve, 2000, i);
	});
	promises.push(promise);
}

Promise.all(promises).then(function (values) {
	console.log(values);
});