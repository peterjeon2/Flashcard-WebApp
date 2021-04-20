import * as React from 'react'
import Login from './Login'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared.js'

export default function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(handleInitialData())
      },[dispatch]);

    const user = useSelector((state) => state.user);
    console.log(user)
    return (
        <Login />
    )
}

