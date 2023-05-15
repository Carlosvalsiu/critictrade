import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Styles/button.css';
import './Styles/character.css';
import './Styles/estilos.css';
import './Styles/gameboy.css';
import './Styles/liveLevel.css';
import './Styles/pitBoy.css';
import cora from './Styles/assets/hearth.svg'
import 'https://cdn.lordicon.com/ritcuqlt.js'
import { Profile } from './porfile';
import { ConditionalProfile } from './conditionalProfile';
import { Conditional } from './Conditional';
import { Link } from "react-router-dom";



export function SideMenu() {

    function openCloseMenu() {
      const body = document.getElementById("body");
      const sideMenu = document.getElementById("menu_side");
      body.classList.toggle("body_move");
      sideMenu.classList.toggle("menu__side_move");
    }
  
    //Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
    useEffect(() => {
      if (window.innerWidth < 760) {
        const body = document.getElementById("body");
        const sideMenu = document.getElementById("menu_side");
        body.classList.add("body_move");
        sideMenu.classList.add("menu__side_move");
      }
    }, []);
  
    //Haciendo el menú responsive(adaptable)
    useEffect(() => {
      const body = document.getElementById("body");
      const sideMenu = document.getElementById("menu_side");
  
      function handleResize() {
        if (window.innerWidth > 760) {
          body.classList.remove("body_move");
          sideMenu.classList.remove("menu__side_move");
        }
  
        if (window.innerWidth < 760) {
          body.classList.add("body_move");
          sideMenu.classList.add("menu__side_move");
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);
    return (
        
        <body id="body">
            <div>
                <div className="menu__side" id="menu_side">
                    <div className="secondSide">
                        <div className="ComonBox">
                            <div className="GameBoyExtension">
                                <div className="BodyExtension">
                                    <div className="BodyExtension2">
                                        <div className="BodyExtensionLast">
                                            <div className="imageProfile">
                                                <div>
                                                    <Profile/>
                                                </div>
                                            </div>
                                            <div className="butonsProfile">
                                                <div className="corss">
                                                    <div className="CrossUp"></div>
                                                    <div className="CrossSide"></div>
                                                </div>
                                                <div className="buttonsRed">
                                                    <div className="buttonsUp">
                                                        <button className="button1"></button>
                                                        <button className="button2"></button>
                                                    </div>
                                                    <div className="buttonsDown">
                                                        <button className="button3"></button>
                                                        <button className="button4"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="levelLife">
                                                <img src={cora} className="live"></img>
                                                <div className="level">Nv. 12</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="PibBoy">
                                    <div className="PitBoyBorder">
                                        <div className="PitBoySecondBorder">
                                            <div className="LastPitBoyBorder">
                                                <div className="infoUser">
                                                    <div className="GreenCristal">
                                                        <div className="glowGlass">
        
        
                                                        </div>
                                                        <div className="buttonsPit"></div>
                                                        <div className='ButtonPosition'>
                                                            <button className="PerfilButton"><ConditionalProfile/></button>
                                                            <Conditional/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slidebuton">
                                <div id="icon__menu">
                                    <i onClick={openCloseMenu} id="btn_open"></i>
                                </div>
                            </div>
                            <div className="box1">
                                <div className="icons">
                                    <lord-icon src="https://cdn.lordicon.com/iiixgoqp.json" trigger="hover"
                                        colors="primary:#ffffff" class="iconsStile">
                                    </lord-icon>
                                    <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover"
                                        colors="primary:#ffffff" class="iconsStile">
                                    </lord-icon>
                                    <lord-icon src="https://cdn.lordicon.com/pnhskdva.json" trigger="hover"
                                        colors="primary:#ffffff" class="iconsStile">
                                    </lord-icon>
                                </div>
                            </div>
        
                            <div className="box2">
                                <div className="rateCritic">
                                    <div className="interiorCritics">
                                        <div className="LikeDislikeS">
                                            <div className="like">45</div>
        
                                            <div className="dislike">17</div>
                                        </div>
                                        <lord-icon src="https://cdn.lordicon.com/fsghhhtr.json" trigger="hover"
                                            colors="primary:#ffffff" class="likeIcon">
                                        </lord-icon>
                                    </div>
                                </div>
                                <div className="TheCritics">
                                    <ul className="ul">
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                        <ul className="Critica">
                                            <div className="CriticName">Titulo</div>
                                            <div className="DescriptionCrit">critica jdbcwbdfhb wsdbvh wbrhvbhwbrhv
                                                jrwbfhgwerpivuyerg hywbrfyghwirhfiywgkrf ywbrkfhwkhfhj</div>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                            <div className="character">
                                hola
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="js/script.js"></script>
        </body>
            )  
  }




