import React,{ createContext, useState, useContext } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({children})=>{
    const [profile,setProfile] = useState();

    console.log('Profile=>', profile)

    return <ProfileContext.Provider value={{profile,setProfile}}>{children}</ProfileContext.Provider>
}

export const useProfile = ()=> useContext(ProfileContext);