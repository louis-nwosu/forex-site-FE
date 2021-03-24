import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//import store
import store from './store/store'

//create the redux store
const reduxStore = createStore(
    store,
    composeWithDevTools(applyMiddleware(thunk))
)

const app = (
    <Provider store={reduxStore}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
