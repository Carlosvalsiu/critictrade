import React from "react";
import '../../Styles/Serchengine.css'
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Serch = () => {
    return (
      <div className="colorBack">
        <div className="onlyStyle">
          <div class="shadow__input"></div>
          <button class="input__button__shadow">
            <HiMagnifyingGlass/>
          </button>
          <input type="text" name="text" class="input__search" placeholder="Serching "/>
        </div>
      </div>
      );
    };