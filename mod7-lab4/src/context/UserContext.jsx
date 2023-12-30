import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

export const UserProvider = (props) => {
    // store the current user in state at the top level
    const [currentUser, setCurrentUser] = useState({});
    // sets user object in state, shared via context
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
            {props.children}
        </UserContext.Provider>
    );
}
export const useUserContext = () => {return useContext(UserContext);}
