A demo of Slack's Android app's screen-switching interactions, for the web.

---

## Why?

I use Slack's Android app a lot. It recently got an overhaul and introduced a new interaction system. I like the new interactions a lot and was playing around with the app when I had these questions:
- When does it decide to switch screens? What are the thresholds?
- Could someone build a web app with transitions as smooth as this?

I had already built [swipe-listener](https://github.com/umanghome/swipe-listener) some time ago for another (abandoned) project. I wanted to see if I could leverage [swipe-listener](https://github.com/umanghome/swipe-listener) and try to build something for the web.

This project is built on [Svelte](https://svelte.dev), but it should be super easy to port the logic to any library/framework of your choice.

## Setup

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
