import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDecks } from '../actions/decks'
import List from './List'

export default function Decks() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users);
    React.useEffect(() => {
        dispatch(getDecks(user._id))
    }, [dispatch, user]);
    const decks = useSelector((state) => state.decks);

    console.log(decks)
    return (
        <div>
            <h2>
                Decks
            </h2>

           { decks && <List items={decks}/>}
        </div>
    )
}