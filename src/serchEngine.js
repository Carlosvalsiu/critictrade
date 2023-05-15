import React from "react";
import './Styles/Serchengine.css'
import { Serch } from "./FirstBox/navbar/Serch";
import { IndexNavBar } from "./FirstBox/navbar/IndexNavBar";
import {Slideshow} from "./SlideShow"

export const Serchengine = () => {
    return (
    <div class="input__container">
      <div className="IconPage"><Slideshow/></div>
      <IndexNavBar/>
      <Serch/>
    </div>
      );
    };