import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { useRecoilState } from "recoil";
import { uidState } from "@/atom/atomProvider";
//import { useRegisterModal } from "@/hooks";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [uid, setUid] = useRecoilState(uidState);
    const [user, setUser] = useState(null);
    const [brand, setBrand] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUid(currentUser?.uid);
                fetchAccount(currentUser?.uid)
            } else {
                setUid(null)
            }
        });
        return () => unsubscribe();
    }, []);

    

    return (
        <AuthContext.Provider value={{ uid, setUid, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};