# planner

**planner** is a demo front-end web app using [Angular Material](https://github.com/angular/material) and [Firebase](https://www.firebase.com/). The purpose of this project is to understand how setup quickly and easily an Angular project with a good architecture.

## Test the app

Online : [https://planner31.firebaseapp.com/](https://planner31.firebaseapp.com/) or from your computer:

### Requirements
Developed with:
- Node.js `v4.4.1`
- npm `v2.14.20`
- Gulp CLI `v1.2.1` (if you don't have it run `npm install --global gulp-cli`)


### Clone it !

Be sure to have previous requirements installed on your computer.

- Clone the repo on your computer (or download it as zip).
- Open your terminal and go to the project directory.
- Run `npm install`.
- Run `gulp`, you should see the server starting in the terminal.
- Go to `http://localhost:4000`.

:smile: **Please feel free to fork this project and make pull requests !** :smile:


## Explanations

- Gulp automates tasks like starting the server, browserify js files, watch changes automatically...
- Browserify allows us to use `require()` in our js files like in Node.js but for front-end development. Because of Gulp browserify takes all the required files in the `app/` directory and concatenate them into a single file understandable by browsers in `public/js/`.
    - To use `require('nameOfDirectory')` you must put in the directory a `index.js` file wich contains a `require('file.js')` for each file in the directory. (example in `app/controllers/`)
    - If we don't use browserify the browser cannot understand `require()` statements.


- All calls to Firebase must be in a service not a controller (example in `app/services/EventService.js`).
- To share data between controllers we must use a service and store the shared data and then notify controllers of the update (example in `app/services/SharedService.js`). Do not forget to inject the service in the controller (example in `app/controllers/PlannerCtrl.js`).


- To use Firebase hosting juste install Firebase CLI (`npm install -g firebase-tools`) and then run in your project directory `firebase init` and `firebase deploy`.


## Angular best practices

### Naming and location conventions


Element | Naming style | Example | File | Location
--------|--------|--------|--------|--------
Modules | lowerCamelCase  | angularApp | angularApp.js | `app/`
Controllers | Functionality + 'Ctrl'  | AdminCtrl | AdminCtrl.js | `app/controllers/`
Directives | lowerCamelCase  | userInfo | userInfo.js | `app/directives/`
Filters | lowerCamelCase | userFilter | userFilter.js | `app/filters/`
Services | UpperCamelCase | User | User.js | `app/services/`
Views | lowerCamelCase | mail | mail.ejs | `public/views/`

### Controllers structure

- The structure of a controller's file is :

```javascript
angular.module('nameModule').controller('NameCtrl', NameCtrl);

function NameCtrl() {
  var vm = this;
  //vm.fields...
  //vm.methods...
  ]
}

```
- Example (`app/controllers/PlannerCtrl.js`):

```javascript
angular.module('planner').controller('PlannerCtrl', PlannerCtrl);

function PlannerCtrl() {
  var vm = this;
  vm.schedules = [
    {
      id:'1',
      time:'8h - 10h',
    },
    {
      id:'2',
      time:'10h - 12h',
    }
  ]
  //...
}
```
## License


This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
