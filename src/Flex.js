import "./App.css";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import Avatar from "./Avatar";

export default function Flex() {
    return <div>
    <div id="flex-div">
        <section>
        <img src={ethereum} alt="icon-ethereum" id="ethereum-icon"></img> 
        <span>0.041ETH</span>
        </section>
        <section>
        <img src={clock} alt="clock-icon" id="clock-icon"></img> 
        <p id="days-left">3 days left</p>
        </section>
    </div>
    <hr />
    <Avatar />
    </div>
}