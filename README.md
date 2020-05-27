# Sonos Doorbell API

This project allows you to play a doorbell sound on all your Sonos speakers.

## How to use

- Clone the project
- Install the project dependencies: `npm i`
- Run `npm start`, this will start up your local API

You can also run `node ./dist/index.js` once you build the project.

## API endpoints

- [http://localhost:5050/devices](http://localhost:5050/devices): Returns all the retrieved devices from your network
- [http://localhost:5050/ring](http://localhost:5050/ring): Play a doorbell sound on all the speakers in your network