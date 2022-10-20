import { useState } from "react"
import { getAuth, signInWithPopup } from 'firebase/auth'
import { app, googleAuthProvider } from "./firebase";
import { useEffect } from "react";
import { Main } from "./modules/main/main";

export const AuthProvider = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);


    useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                return setUser(maybeUser)
            }

            signInWithPopup(auth, googleAuthProvider).then(cred => {
                setUser(cred.user)
            }).catch(err => console.error(err));
        })

        return unsub;
    }, [auth])

    return user ? <>
        <Main user={user}/>
    </> : <div>loading...</div>
}