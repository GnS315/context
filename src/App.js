import React, {useContext, useState} from 'react';
// Импортируем контекст
import {AuthContext} from "./context";
/*
* В зависимости от авторизации будет показываться надпись "Авторизован"/"Не авторизован"
* Авторизация происходит по нажатию на кнопку
* */
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const changeAuth = () => setIsAuth(!isAuth)
  const buttonValue = isAuth ? 'Выйти' : 'Авторизоваться'

  return (
    <AuthContext.Provider value = {{isAuth, setIsAuth}}>
      <Title1 />
      <Title2 />
      <button onClick={changeAuth}>{buttonValue}</button>
    </AuthContext.Provider>
  )
}
/*
* Использовать контекст можно при помощи хука useContext()
* Или при помощи AuthContext.Consumer
* */

const Title1 = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    isAuth ?
      <h1>Авторизован</h1>:
      <h1>Не авторизован</h1>
  )
}
const Title2 = () => {
  return (
    <AuthContext.Consumer>
      {value => value.isAuth ? <h1>Авторизован 2</h1> : <h1>Не авторизован 2</h1>}
    </AuthContext.Consumer>
  )
}

export default App;
