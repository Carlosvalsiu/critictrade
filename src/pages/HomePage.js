import React from "react";
import '../Styles/HomePage.css'
import { SlideHomepages } from "../FirstBox/ComponentPage";
import { FooterPage } from "./FooterPage"; 

export const HomePage = () => {
    return (
        <div className="HomePage">
          <div className="UserPage">
            <div className="head1">
              <div className="staly">
                <div className="TitleHome">
                  HOME
                </div>
              </div>
              <div className="fadehead">

              </div>
            </div>
              <div className="slider">
                <SlideHomepages/>
              </div>
              <div>
                <div>hola</div>
                <div>hola</div>
                <div>hola</div>
                <div>hola</div>
                v
                <div>hola</div>
              </div>
              <div>
              <FooterPage/>
              </div>
          </div>
        </div>
      );
    };