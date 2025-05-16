const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tfoot = document.createElement("tfoot");

let body = document.getElementById("demo").appendChild(table);

/// Table Header

const tRow = document.createElement("tr");

table.appendChild(thead);

thead.appendChild(tRow);

const th1 = document.createElement("th");
const th2 = document.createElement("th");

tRow.appendChild(th1);
tRow.appendChild(th2);
th1.innerHTML = "Students";
th2.innerHTML = "Age";

/// Table Body

const bodyData1 = document.createElement("tr");
const bodyData2 = document.createElement("tr");

table.appendChild(tbody);

tbody.appendChild(bodyData1);
tbody.appendChild(bodyData2);

const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const td4 = document.createElement("td");

bodyData1.appendChild(td1);
bodyData1.appendChild(td2);
bodyData2.appendChild(td3);
bodyData2.appendChild(td4);
td1.innerHTML = "Saad";
td2.innerHTML = "22";
td3.innerHTML = "Ahmed";
td4.innerHTML = "17";

/// Table Footer

const footerData = document.createElement("td");
const tr = document.createElement("tr");

table.appendChild(tfoot).appendChild(tr).appendChild(footerData);

footerData.innerHTML = "This is Footer";
