let ele = document.createElement("div");
ele.setAttribute("class", "container");

let rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "row");

let columnDiv = document.createElement("div");
columnDiv.setAttribute("class", "col-1");
columnDiv.innerText = "this is a col";
rowDiv.append(columnDiv);

ele.append(rowDiv);
document.body.append(ele);
