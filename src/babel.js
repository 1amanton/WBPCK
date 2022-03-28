async function start() {
    return await Promise.resolve("async is working")
}
start().then(console.log)

class Util {
    static id = Date.now()
}

console.log("Util Id:", Util.id)


import ("lodash").then(_ => {
    console.log(_.default.sum([2,2,2,5]))
})