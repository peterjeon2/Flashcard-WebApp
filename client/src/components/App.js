import * as React from 'react'
import Login from './Login'
import User from './User'
import Decks from './Decks'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { getDecks } from '../actions/decks'

export default function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(handleInitialData())
        
      },[dispatch]);
    const user = useSelector((state) => state.users);
    return (
        <div>
            <Login />
            <User />
            <Decks/>
        </div>
    )
}

