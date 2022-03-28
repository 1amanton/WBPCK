import Post from "@models/Post"
import "@styles/style.css"
import jsonfile from "./assets/jsonfile"
import foxImage from "@assets/fox"
import "@styles/doc.sass"
import "@/babel.js"
import React from "react";
import {render} from "react-dom";

const post = new Post(`Webpack Post Title`, foxImage)
console.log(`Post to String: ${post.toString()}`)

console.log("JSON", jsonfile)

const App = () => (
    <div className="container">
        <h1>Red Fox</h1>
        <hr/>
        <img className="logo" src={foxImage} alt=""/>
        <hr/>
        <h1 className="sass">SASS</h1>
    </div>
)

render(<App/>, document.getElementById("app"))
