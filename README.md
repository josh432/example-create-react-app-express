# create-react-app React Project with Node Express Backend

> Example on using create-react-app with a Node Express Backend

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

## How this works

The key to use an Express backend with a project created with `create-react-app` is on using a **proxy**. We have a _proxy_ entry in `client/package.json`

```
"proxy": "http://localhost:5000/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**

## Tutorial

Visit my [blog post](https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/) entry for a detailed step-by-step guide.

## SpotME!

Thanks Esau for the file structure. This is a workout app used to track exercises in the gym. It is a full-stack application built with React, Node.JS, and MongoDB. This was a very challenging project to code and deploy, as I'm still learning my way around React. The deployed app can be viewed here. https://salty-taiga-31769.herokuapp.com/
