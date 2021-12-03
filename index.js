function mouseOver(str) {
    document.getElementById(`${str}`).innerHTML = `{ ${str} }`;
}
function mouseOut(str) {
    document.getElementById(`${str}`).innerHTML = `${str}`;
}