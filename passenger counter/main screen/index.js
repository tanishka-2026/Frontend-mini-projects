// document.getElementById("count").innerText = 5
/* let bonuspoints = 50
console.log(bonuspoints)

bonuspoints = bonuspoints + 50
console.log(bonuspoints)

bonuspoints = bonuspoints - 75
console.log(bonuspoints)

bonuspoints = bonuspoints + 45

console.log(bonuspoints)
*/
let saveEl= document.getElementById("save-el")
console.log(saveEl)

alert("JS Loaded");
console.log("JS file loaded");

let count = 0
function inc() {
    count=count+1
    document.getElementById("count").textContent = count;
    console.log(count)
}

function save() {
    let coun= count + " - "
    saveEl.textContent += coun
    console.log(count)
    count.textContent=0
    count=0
}
/*
let un="per"
let var1="you have three new notifications"
let messagetouser= un + var1
console.log(messagetouser)
*/
/*
let lap1=20
let lap2=30
let lap3=40

function laptime() {
      let total=lap1+lap2+lap3
      console.log(total)
}

laptime()

let lapscompleted=0
function lap() {
    lapscompleted=lapscompleted+1
}
console.log()
lap()
lap()
lap()
*/