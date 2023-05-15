import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from './logout';
import { LoginButton } from './login';

export const Conditional = () => {
    const { isAuthenticated} = useAuth0();
  
    if (isAuthenticated) {
      return <LogoutButton/>;
    }
    else{
        return <LoginButton/>;
    }
};