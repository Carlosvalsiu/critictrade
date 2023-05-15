import React from "react";
import '../App.css';
import { HomePage } from "../pages/HomePage";
import { GroupsPage } from "../pages/GroupsPage";
import { ComunityPage } from "../pages/ComunityPage";
import { CriticasPage } from "../pages/CriticasPage";
import {Switch,Route} from 'react-router-dom';
import { ProfileLogInfo } from "../pages/ProfileLogInfo";


export const PageChange = () => {
    return (
        <div className="EstileChange">
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/Groups" exact component={GroupsPage}/>
              <Route path="/Comunity" exact component={ComunityPage}/>
              <Route path="/Criticas" exact component={CriticasPage}/>
              <ProfileLogInfo/>
            </Switch>
        </div>
      );
    };
