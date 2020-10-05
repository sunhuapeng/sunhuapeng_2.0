function webOrphone() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        console.log('是移动端')
        return true
    } else {
        console.log('非移动端')
        return false
    }
}
export {
    webOrphone
}