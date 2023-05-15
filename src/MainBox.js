import React from "react";
import './Styles/Serchengine.css'
import { Serchengine } from "./serchEngine";
import './App.css';
import { PageMainSyte } from "./PageMainSyte";
import { HomePage } from "./pages/HomePage";

export const MainBox = () => {
    return (
        <div>
            <div className='BoxPosition'>
                <div className="Sercposition">
                    <Serchengine/>
                </div>
                <PageMainSyte/>
            </div> 
        </div>
      );
    };