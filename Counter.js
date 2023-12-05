let data = 0; // initial value of the counter

let element = document.getElementById("FF"); // selecting the counter by id
data = element.innerText; // the inner value of element is now stored on the variable data

function increase() {
    data++;
    element.innerText = data; // updating the value of data / the inner text

}
function decrease(){
    data--;
    element.innerText = data; // same
}
