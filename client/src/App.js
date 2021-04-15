import React , {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {dispatchLogin} from './components/redux/actions/authAction'
import axios from 'axios'
import './components/body/auth/auth.css'
import Header from "./components/header/Header"
import Body from "./components/body/Body"

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state=> state.token)
  const auth = useSelector(state => state.auth)

  useEffect( () => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin) {
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        console.log(res)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  }, [auth.isLogged, dispatch]
  )

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())
      }
    }
  }, [token])

  return (
    <Router>
    <div className="App">
      <Header />
      <Body />
    </div>
    </Router>
  );
}

export default App;
