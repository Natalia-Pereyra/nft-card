import "./App.css";
import img from "./images/image-equilibrium.jpg";
import Flex from "./Flex";
import icon from "./images/icon-view.svg";

export default function Card() {
    return  <div id="card-container">

               <div id="overlay-container">
                   <div id="main-img">
                      <img id="card-img" src={img} alt="card"></img>
                   </div>

                   <div id="overlay">
                    <img id="overlay-icon" src={icon} alt=""></img>
                   </div>
               </div>

                 <h1>Equilibrium #3429</h1>
                 <p>Our Equilibrium collection promotes balance and calm.</p>
                <Flex />
            </div>;
    
}