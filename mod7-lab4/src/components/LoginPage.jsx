import { useState } from "react";
import { useUserContext } from "../context/UserContext";
function LoginPage() {
    // destructure the context values passed via UserProvider
    const { currentUser, handleUpdateUser } = useUserContext();
    // alternative using the useContext hook directly, either works
    //const {currentUser, handleUpdateUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
    }
    if (currentUser.email) return (
        <><p>Welcome {currentUser.email}!</p>
            <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    );
}

export default LoginPage;