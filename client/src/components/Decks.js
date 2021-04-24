import * as React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import List from './List'

export default function Decks() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
}