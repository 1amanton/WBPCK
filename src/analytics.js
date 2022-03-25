const createAnalytics = () => {
    let counter = 0
    let isDestroyed = false

    console.log(isDestroyed)

    const listener = () => counter++

    document.addEventListener("click", listener)

    return {
        destroy() {
            document.removeEventListener("click", listener)
            isDestroyed = true
        },

        getClicks() {
            if(isDestroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()