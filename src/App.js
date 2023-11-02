import React, {useContext, useState} from 'react';
import {AuthContext} from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const changeAuth = () => setIsAuth(!isAuth)

  return (
    <AuthContext.Provider value = {{isAuth, setIsAuth}}>
      <Page />
      <button onClick={changeAuth}>Кнопка</button>
    </AuthContext.Provider>
  )
}

const Page = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    isAuth ?
      <h1>Авторизован</h1>:
      <h1>Не авторизован</h1>
  )
}
export default App;
