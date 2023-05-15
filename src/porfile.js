import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import lock from './Styles/assets/logout.gif'
import './App.css';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isAuthenticated) {
      return <img className="userImage" src={user.picture} alt={user.name} />;
    }
    else{
        return <div className="LOGOUT">
            <img src={lock} className="lock" alt="lock"/>
        </div>;
    }


    // return (
    //     isAuthenticated && (
    //       <div>
    //         <img className="userImage" src={user.picture} alt={user.name} />
    //         {/* <h2>{user.name}</h2>
    //         <p>Email: {user.email}</p> */}
    //       </div>
    //     )
        
    //   );
    };