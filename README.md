# Descripition

Game code for Space Apps hackathon held in Brookhaven, NY.
This uses the kaplay.js api to game.

# Folder Links

Kaplay Documentation https://kaplayjs.com/reference/

- `src` - source code for your kaplay project
- `www` - distribution folder, contains your index.html, built js bundle and static assets


## Development

```sh
$ npm run dev
```

will start a dev server at http://localhost:8000

## Distribution

```sh
$ npm run build
```

will build your js files into `www/main.js`

```sh
$ npm run bundle
```

will build your game and package into a .zip file, you can upload to your server or itch.io / newground etc.
