console.log('hollo world');

const display = document.getElementById('display');


const appendValue = (input) => {
   display.value += input
}

const clearDisplay = () => {
    display.value = ''
}

const deleteLast = () => {
    display.value = display.value.toString().slice(0, -1)
}

function calculate() {
    try {
        // eval handles basic strings like '7+3*2' natively
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}