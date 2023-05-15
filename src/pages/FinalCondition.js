import React, { useState } from "react";
import { HomePage } from "./HomePage";
import { Counter } from "./CondicionalPage"; 

export const FinalCondition = () => {
    function paginator(Count){
        if (Count == 1) {
            return 'home';
          }
        if (Count == 2){
            return 'perfil';
        }
    } 
};