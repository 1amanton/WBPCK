import Post from "@models/Post"
import "@styles/style.css"
import jsonfile from "./assets/jsonfile"
import foxImage from "@assets/fox"
import "@styles/doc.sass"
import "@/babel.js"

const post = new Post(`Webpack Post Title`, foxImage)
console.log(`Post to String: ${post.toString()}`)

console.log("JSON", jsonfile)

document.querySelector(".logo").src = foxImage