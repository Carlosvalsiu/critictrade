import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Styles/button.css';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="options" onClick={() => loginWithRedirect()}>
<lord-icon
    src="https://cdn.lordicon.com/bhfjfgqz.json"
    trigger="hover"
    class="buttonLog"
    colors="primary:#30e849"
    >
</lord-icon>
    </button>;
  };