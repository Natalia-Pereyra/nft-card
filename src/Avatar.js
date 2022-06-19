import "./App.css";
import avatar from "./images/image-avatar.png"

export default function Avatar() {
    return <div id="avatar-flex">
        <img src={avatar} id="avatar-img"></img>
        <p>Creation of <strong>Jules Wyvern</strong></p>
    </div>
}