import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const ConditionalProfile = () => {
    const { isAuthenticated} = useAuth0();
  
    if (isAuthenticated) {
      return <Link className="PerfilButton" to='/Perfil'>Profile</Link>;
    }
    else{
        return 'Log In';
    }
};