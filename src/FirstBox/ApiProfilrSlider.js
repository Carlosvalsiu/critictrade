import React from "react";
import '../Styles/ApiProf.css'


export const ApiProfilrSlider = () => {
    return (
        
        <div class="container">
                          <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"/>

            <input type="radio" name="slider" class="d-none" id="s1" checked/>
            <input type="radio" name="slider" class="d-none" id="s2"/>
            <input type="radio" name="slider" class="d-none" id="s5"/>
        
            <div class="cards">
              <label for="s1" id="slide1">
                <div class="card" >
                  <div class="image">
                    <div class="dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </label>
        
              <label for="s2" id="slide2">
                <div class="card">
                  <div class="image">
                    <div class="dots">
                      <div class="dot1"></div>
                      <div class="dot2"></div>
                      <div class="dot3"></div>
                    </div>
                  </div>
                </div>
              </label>
        
              <label for="s5" id="slide5">
                <div class="card">
                  <div class="image">
                    <div class="dots">
                      <div class="dot1"></div>
                      <div class="dot2"></div>
                      <div class="dot3"></div>
                    </div>
                  </div>

                </div>
              </label>
            </div>
      </div>
      );
    };