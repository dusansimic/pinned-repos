# pinned-repos
> Get pinned GitHub repos from a specific user

This micro service written in node.js can be run also as a serverless function so it's very easy to set it up and use it in some web app.

## Usage

Send http request to `http://<service url>:<service port>` with body
``` javascript
{
	'username': '<github username>'
}
```

The default port is `3000`.

## License
MIT © [Dušan Simić](http://dusansimic.me)