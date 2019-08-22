const pMap = require('p-map');
const got = require('got');
 
const sites = [
    getWebsiteFromUsername('https://sindresorhus'), //=> Promise
    'https://ava.li',
    'https://github.com'
];
 
(async () => {
    const mapper = async site => {
        const {requestUrl} = await got.head(site);
        return requestUrl;
    };
 
 	const result = await pMap(sites, mapper, {concurrency: 2});
 
    console.log(result);
    //=> ['https://sindresorhus.com/', 'https://ava.li/', 'https://github.com/']
})();