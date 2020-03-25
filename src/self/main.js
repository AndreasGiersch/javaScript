function showDate() {
    document.getElementById('show').innerHTML = new Date().toDateString()
}

function reset() {
    document.getElementById('show').innerHTML = ''
}
