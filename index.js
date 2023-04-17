let fromEl = document.getElementsByName("from")
let toEl = document.getElementsByName("to")
let convertResult = document.getElementById("result")

function convert() {
    let userValue = document.getElementById("value").value

    if (fromEl[0].checked && toEl[1].checked) {
        let result = (parseFloat(userValue) * (9 / 5) + 32)
        convertResult.innerHTML = result.toFixed(2) + "°F"
    }

    if (fromEl[0].checked && toEl[2].checked) {
        let result = parseFloat(userValue) + 273.15
        convertResult.innerHTML = result.toFixed(2) + "K"
    }

    if (fromEl[1].checked && toEl[0].checked) {
        let result = (parseFloat(userValue) - 32) * 5 / 9
        convertResult.innerHTML = result.toFixed(2) + "°C"
    }

    if (fromEl[1].checked && toEl[2].checked) {
        let result = (parseFloat(userValue) - 32) * 5 / 9 + 273.15
        convertResult.innerHTML = result.toFixed(2) + "K"
    }

    if (fromEl[2].checked && toEl[0].checked) {
        let result = parseFloat(userValue) - 273.15
        convertResult.innerHTML = result.toFixed(2) + "°C"
    }

    if (fromEl[2].checked && toEl[1].checked) {
        let result = 1.8 * (parseFloat(userValue) - 273.15) + 32
        convertResult.innerHTML = result.toFixed(2) + "°F"
        
    }
}

function clearBtn() {
    document.getElementById("value").value = ""
    convertResult.innerHTML = ""
}