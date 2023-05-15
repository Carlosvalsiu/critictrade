import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Styles/estilos.css';
import './Styles/button.css';

export const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button className="options" onClick={() => logout({ returnTo: window.location.origin })}>
        <lord-icon
            src="https://cdn.lordicon.com/nhfyhmlt.json"
            trigger="hover"
            class="buttonLog"
            colors="primary:#30e849"
            >
        </lord-icon>
      </button>
    );
  };


