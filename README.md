# Getting Started with Create React App and Redux
---------------------------------------------------------------------
Short Description of react-redux

## **REDUX**

Redux is a state management library for JavaScript applications, commonly used with React. It helps manage application state in a predictable way using a unidirectional data flow.

npm install redux react-redux @reduxjs/toolkit

npx create-react-app redux-todo --template redux

I need the createSlice this is product Slice 
import { createSlice } from '@reduxjs/toolkit'
if need to usss to update or get the data
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './features/todoSlice';

## To get the Data from Redux state we used the useSelector 
## to post the state means update or add the data used 
## useDispatch from React-redux


this is the code for add the provider to main parent component the start of the project 

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
What are middleware in Redux?

Middleware like Thunk and Saga handle side effects like API calls.
What is Reselect in Redux?

A library for memoizing selectors to optimize performance.

How do you persist Redux state across page reloads?
Using redux-persist to save state to local storage.

When should you NOT use Redux?
When the application state is simple and can be managed locally.

------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
