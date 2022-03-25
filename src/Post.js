export default class Post {
    constructor(title) {
        this.title = title
        this.data = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.data.toJSON()
        })
    }
}
