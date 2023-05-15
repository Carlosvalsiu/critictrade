import React from "react";
import '../Styles/Userpage.css'
import '../Styles/Firstzone.css'
import { Profile } from '../porfile';
import { ApiProfilrSlider } from "../FirstBox/ApiProfilrSlider";
import { FooterPage } from "./FooterPage";

export const UserPage = () => {
    return (
        <div className="UserPage">
            <div className="FirstZone">
              <div className="ImageProfileP">
                {/* <Profile/> */}
              </div>
              <div>
                <div className="Name">Pedro</div>
                <div className="Addons">
                <div className="total">
                    <div className="HorasTotal">
                      120h
                    </div>
                    <div className="Juegostotal">
                      300
                    </div>
                  </div> 
                  <div className="Trofees">
                    <div className="copa">copa</div>
                    <div className="Totaltofees">Trofee</div>
                  </div> 
                             
                </div>
              </div>
            </div>
            <div className="SecondZone">

            </div>
            <div className="TrirdZone">
                <ApiProfilrSlider/>
            </div>
            <div>
              <FooterPage/>
            </div>
        </div>
      );
    };