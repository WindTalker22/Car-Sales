import React from "react"
import { carReducer } from "./reducers/carReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import App from "./App"

import "bulma/css/bulma.css"
import "./styles.scss"

const store = createStore(carReducer)
// console.log(store.getState())

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
