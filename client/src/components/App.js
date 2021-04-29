import * as React from 'react'
import Login from './Login'
import User from './User'
import Decks from './Decks'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'

export default function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(handleInitialData())
        
      },[dispatch]);
    return (
        <div>
            <Login />
            <User />
            <Decks/>
        </div>
    )
}

