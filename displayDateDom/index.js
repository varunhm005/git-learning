var pardiv = document.createElement("div");
pardiv.style.textAlign = "center"
pardiv.style.paddingTop = "30px"

//this is the input for the date
var inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width = "30%"
inputdate.style.margin = "10px"
//this is for the button
var button = document.createElement("button");
button.innerHTML = "Display date"
button.className = "btn btn-primary"
button.addEventListener("click",displaydata);
//Append it to parent div
pardiv.append(inputdate,button)
var displaydiv = document.createElement("div");
displaydiv.id = "displaydata"
document.body.append(pardiv)


function displaydata(){

    let getMainDiv = document.getElementById("mainDiv")
    if(getMainDiv != null){
        getMainDiv.remove()
    }

    var input = document.getElementById("dob").value
    var inpDate = new Date(input)

    var givenDateDiv = document.createElement("div")
    givenDateDiv.innerHTML = `Given input date is ${inpDate}`



    var currdate = new Date()
    var millisecdiff =  currdate.getTime() - inpDate.getTime()
    var millisecdiffDiv = document.createElement("div")
    millisecdiffDiv.innerHTML = `milli second ${millisecdiff}`


    var seconddiff = mathfloor(millisecdiff,1000)
    var seconddiffDiv = document.createElement("div")
    seconddiffDiv.innerHTML = `second ${seconddiff}`

    var minutesdiff = mathfloor(seconddiff,60)
    var minutesdiffDiv = document.createElement("div")
    minutesdiffDiv.innerHTML = `minute ${minutesdiff}`


    var hourdiff = mathfloor(minutesdiff,60)
    var hourdiffDiv = document.createElement("div")
    hourdiffDiv.innerHTML = `hour ${hourdiff}`


    var daydiff = mathfloor(hourdiff,24)
    var daydiffDiv = document.createElement("div")
    daydiffDiv.innerHTML = `day ${daydiff}`


    var monthdiff = getmonthdiff(inpDate,currdate)
    var monthdiffDiv = document.createElement("div")
    monthdiffDiv.innerHTML = `month ${monthdiff}`


    var yeardiff = getYear(inpDate,currdate)
    var yeardiffDiv = document.createElement("div")
    yeardiffDiv.innerHTML = `year ${yeardiff}`

    var mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv"
    mainDiv.style.textAlign = "center"
    mainDiv.append(givenDateDiv,yeardiffDiv,monthdiffDiv,daydiffDiv,hourdiffDiv,minutesdiffDiv,seconddiffDiv,millisecdiffDiv)
    document.body.append(mainDiv)
}


function mathfloor(value1,value2){
   return Math.floor(value1/value2) 
}

function getYear(value1,value2){
    var d1 = new Date(value1)
    var d2 = new Date(value2)
    return d2.getFullYear()-d1.getFullYear()
}

function getmonthdiff(value1,value2){
    var year= getYear(value1,value2)
    var month = (year *12)+(value2.getMonth()-value1.getMonth())
    return month
}