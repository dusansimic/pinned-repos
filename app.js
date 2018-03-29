const micro = require('micro');
const got = require('got');

const server = micro(async req => {
	const data = await micro.json(req);
	const reqBody = {query: `query {
		user(login:"${data.username}") {
			pinnedRepositories() {
				nodes {
					name
					description
					languages(orderBy: {direction: DESC, field: SIZE}, first:3) {
						nodes {
							name
							color
						}
					}
				}
			}
		}
	}`};
	const {body} = await got.post('https://api.github.com/graphql', {
		headers: {
			Authorization: 'bearer <token here>',
			'Content-Length': JSON.stringify(reqBody).length
		},
		body: reqBody,
		json: true
	});
	return body;
});

const PORT = process.env.PORT | 3000;
server.listen(PORT, '0.0.0.0', err => {
	if (err) {
		console.error(err);
	}

	console.log(`Listening on port ${PORT}`);
})
