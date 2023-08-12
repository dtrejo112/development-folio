// @ts-nocheck
"use client";

import { createContext, useContext, useState } from "react";


 const NavigationContext = createContext({});

export const NavigationContextProvider = ({children}: any) => {
    const [projects, setProjects] = useState(true);
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(false);
    const value = {
                   projects, 
                   setProjects, 
                   contact,
                   setContact,
                   home,
                   setHome,
                }
 
      return (
        <NavigationContext.Provider value={value}> 
          {children}
        </NavigationContext.Provider>
      )

}

export const useNavigationContext = () => {
    const {   
            projects, 
            setProjects, 
            contact,
            setContact,
            home,
            setHome 
        } = useContext(NavigationContext);
    return {   
        projects, 
        setProjects, 
        contact,
        setContact,
        home,
        setHome 
    };  
  };
   