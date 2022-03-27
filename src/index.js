import Post from "./Post"
import "./styles/style.css"
import jsonfile from "./assets/jsonfile"
import foxImage from "./assets/fox"

const post = new Post(`Webpack Post Title`, foxImage)
console.log(`Post to String: ${post.toString()}`)

console.log("JSON", jsonfile)

document.querySelector(".logo").src = foxImage