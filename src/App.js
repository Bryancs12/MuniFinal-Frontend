import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './components/store/store'




export const App = () => {



  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
}
