var Username
var RollNumber
var score = 0;
var attempt=0;
var displayname;
function saveLogin(){
    // alert("hi")
    // if (typeof(Storage) !== "undefined") {
    Username=document.getElementById("uname").value
    RollNumber=document.getElementById("rollnumber").value
    localStorage.setItem("Username", Username);
    localStorage.setItem("RollNumebr", RollNumber);
    localStorage.setItem("score", score);
    alert(Username)
    alert(RollNumber)
 
// }
}
// if


function nextPage(qid, name, type, page)
{
    if(type == "radio" && qid == "q1"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == '2')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }
}


if(type == "radio" && qid == "q2"){
    ql = document.getElementsByName(name)
    for(let i = 0; i < ql.length; i++)
    {
        console.log(ql[i].value)
        if(ql[i].checked){attempt++}
        if(ql[i].checked && ql[i].value == '2')
        {
            score = Number(getScore()) + 1
            setScore(score)
        }
    }
}

if(type == "radio" && qid == "q3"){
    ql = document.getElementsByName(name)
    for(let i = 0; i < ql.length; i++)
    {
        console.log(ql[i].value)
        if(ql[i].checked){attempt++}
        if(ql[i].checked && ql[i].value == '2')
        {
            score = Number(getScore()) + 1
            setScore(score)

        }
    }
}

function getScore(){
    return localStorage.getItem("score", score)
}

function setScore(score){
    localStorage.setItem("score", score)
}

displayname = localStorage.getItem("Username")
displayroll = localStorage.getItem("RollNumber")
displayscore = localStorage.getItem("score")
console.log(displayname, score, displayroll)
document.getElementById("setUname").innerHTML = displayname + " - "+displayroll
document.getElementById("result").innerHTML="Score: "+ displayscore

