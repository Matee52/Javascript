let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
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

function total() {
  totalEl.innerText += " " + count + ", "

        console.log(count)
        count = 0
        countEl.innerText = count
}


function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;

}

myFunction()
//let username = "per"
//let message = "You have tree new notifications"

//let messageToUser = message + ", " + username + "!"

//console.log(messageToUser)
