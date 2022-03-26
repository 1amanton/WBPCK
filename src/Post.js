export default class Post {
    constructor(title, img) {
        this.title = title
        this.data = new Date()
        this.img = img
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.data.toJSON(),
            img: this.img
        })
    }
}
