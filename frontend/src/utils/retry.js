module.exports = function retry(fn, retriesLeft = 100, interval = 1000) {
	return new Promise((resolve, reject) => {
		fn()
			.then(resolve)
			.catch((error) => {
				setTimeout(() => {
					if (retriesLeft === 1) {
						reject(error);
						return;
					}
					retry(fn, retriesLeft - 1, interval).then(resolve, reject);
				}, interval);
			});
	});
};