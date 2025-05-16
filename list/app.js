const ul = document.createElement("ul")
const nestedList = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const li6 = document.createElement("li")



const body = document.getElementById("list")

body.appendChild(ul)

ul.appendChild(li1) 
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li6)
nestedList.appendChild(li4)
nestedList.appendChild(li5)

li1.innerHTML ="Orange"
li2.innerHTML ="Green"
li3.innerHTML ="Blue"
li3.appendChild(nestedList)
li4.innerHTML ="Yellow"
li5.innerHTML ="Red"
li6.innerHTML ="Pink"