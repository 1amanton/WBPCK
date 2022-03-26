import Post from "./Post"
import "./styles/style.css"
import jsonfile from "./assets/jsonfile"


const post = new Post(`Webpack Post Title`)
console.log(`Post to String: ${post.toString()}`)

console.log("JSON", jsonfile)