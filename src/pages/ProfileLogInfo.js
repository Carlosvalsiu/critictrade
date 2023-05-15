import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserPage } from "../pages/UserPage";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

export const ProfileLogInfo = () => {
    const { isAuthenticated} = useAuth0();
  
    if (isAuthenticated) {
      return <Route path="/Perfil"  component={UserPage}/>;
    }
    else{
        return 'NO INFO FOUND';
    }
};