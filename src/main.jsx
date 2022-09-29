import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store'
import { APP_ROUTES } from './routes/APP_ROUTES'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <APP_ROUTES />
  </Provider>
)
