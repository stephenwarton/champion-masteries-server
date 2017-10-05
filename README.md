# Champion Masteries

A simple web app to check your champion mastery stats. Only implemented for the NA server for now. This is the repo for the backend/server. The frontend/client repo can be found here: [champion-masteries-client](https://github.com/stephenwarton/champion-masteries-client).

## Getting Started

After downloading/cloning you will need to install dependencies:

```
npm install
```
You'll need your own API key. You can get one here: [Riot Developer Portal](https://developer.riotgames.com/)

Once you have an API key, create a .env file and add your API key there. You can use [.env.example](https://github.com/stephenwarton/champion-masteries-server/blob/master/.env.example) as a reference.

To run the server:

```
npm start
```
You should be good to go now for the server. To get the client set up go here: [champion-masteries-client](https://github.com/stephenwarton/champion-masteries-client).

Note: The server is set up to run on port 3000. If you need to change the port, edit this line: [link](https://github.com/stephenwarton/champion-masteries-server/blob/master/bin/www#L15)

## Built With

* Node, Express
