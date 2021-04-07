## Introduction

_io-app-assistance-form_ provides first level automatic assistance, through a conversational form it will be possible to send request for assistance

## Must have

- [Node](https://nodejs.org/en/)

## Main technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

## How to run the app in the development mode

1. Click the green Code button on the Github repository page, select HTTPS and copy the URL.
2. Open a terminal and change the current working directory to the location where you want the cloned directory. Example: `cd desktop`
3. Type `git clone`, and then paste the URL you copied earlier.
4. Press Enter to create your local clone.
5. Move into your cloned repository (replace `<work-dir>`):
   Example: `cd <work-dir>/io-app-assistance-form`
6. Launch `npm install` in your terminal, wait for the installation of the packages to finish.
7. Launch `npm start`

If you want to see what these commands are for, see the section [Useful scripts](#useful-scripts)

## How to generate questions/answers

This tool uses a function utility named `utilityFormGenerator` that takes advantage of the library [conversational-form](https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/) to generate HTML tags based on JSON files contained in src/form.

To generate a simple question/answer you should add an object like this `{ "id": "id-example", "question": "Question example?", "answers": ["Si", "No"] }` to the JSON of the corresponding flow.

If you want to generate a conditional question/answer, therefore based on an answer previously given, you should add an object like this `{ "previousStepId": "id-example", "previousStepValue": "Si", "id": "id-example-2", "question": "Question example2?", "answers": ["Si", "No"] }` to the JSON of the corresponding flow.

If you want to stop the conversational form with an end message, based on an answer previously given, you should add an object like this `{ "previousStepId": "id-example-2", "previousStepValue": "No", "end": true, "message": "End message example" }` to the JSON of the corresponding flow.

## Useful scripts

- `npm install` downloads packages and it's dependencies defined in a package.json file and generates a node_modules folder with the installed modules.
- `npm start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- `npm run build` create a minified bundle
- `npm test` launches the test runner in the interactive watch mode
- `npm run eject` eject webpack configuration **- TO AVOID -**

## How to deploy

This step explains how to deploy your app on a server, this makes _io-app-assistance-form_ public, allowing other users to see your app using a URL.

1. Move into your actual work directory (replace `<work-dir>`):
   Example: `cd <work-dir>/io-app-assistance-form`
2. Launch `npm run build` in your terminal, this creates a build folder inside the root directory, which bundles your app and minifies it into HTML, CSS, and JavaScript files.
3. Launch `npm run start:build` to test if your build works properly in the development mode. Open [http://localhost:5000](http://localhost:5000) to view it in the browser
4. Now, you can use various platforms for deploying your build folder.
