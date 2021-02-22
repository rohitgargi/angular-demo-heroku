# AngularDemoHeroku

STEPS:

1)Create Angular App
2)Configure angular app to deploy  properly on Heroku
3)Host source code of Angular app on Github
4)Login to Heroku and create new app in Heroku
5) Connecting GIT hub repo to Heroku apps


>>Configure angular app to deploy  properly on Heroku --

a) Ensure you have the latest version of angular CLI and angular compiler cli
 
 npm install @angular/cli@latest @angular/compiler-cli --save-dev

 b) Copy below dependencies from dev dependancy to dependency in package.json
   
  "@angular/cli": "~11.0.5",
  "@angular/compiler-cli": "~11.0.5",
   "typescript": "~4.0.2"


>>Now create Heroku postbuild script in package.json and add a "heroku-postbuild" command like so:

"heroku-postbuild": "ng build --prod"

>>  Add Node and npm engine in the last of package.json(specify version which you used in your machine)

"engines":{
    "node":"14.15.3",
    "npm":"6.14.9"
}

>> Install server to run your app
npm i express path --save


>> Create a server.js in the root of the application and  paste the following code

const express = require("express");

const path = require("path");
const app = express();


//Server  only  the static  files from the dist directory
app.use(express.static('./dist/angular-demo-heroku'));



app.get("/*",(req, res) => res.sendFile('index.html',{  root:   'dist/angular-demo-heroku/'}),)

// Start the app  by listening on the default heroku port

app.listen(process.env.PORT || 8080)




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
