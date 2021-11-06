let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}




function increase() {
    count = count + 5
    countEl.innerText = count
    console.log(count)
}

function minus() {
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function save() {
  saveEl.innerText += " " + count + ", "

        console.log(count)
        count = 0
        countEl.innerText = count
}

saveEl()
//let username = "per"
//let message = "You have tree new notifications"

//let messageToUser = message + ", " + username + "!"

//console.log(messageToUser)
