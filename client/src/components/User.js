import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function User() {
    const user = useSelector((state) => state.users);
    return (
        <h1>
            Hi {user.displayName}
        </h1>
    )
}