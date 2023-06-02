// form functionality

document.querySelector("form").addEventListener("submit",todo)

function todo(event){
    event.preventDefault()
    // select id of input
    let firstInput=document.querySelector("#task").value ;
    let secondInput=document.querySelector("#selection").value ;
    //console.log(firstInput,secondInput)

    // functionality for appending the body
let rows=document.createElement("tr")
// first column
let td1=document.createElement("td");
td1.innerText=firstInput;
td1.style.backgroundColor="yellow";

// second column

let td2=document.createElement("td");
td2.innerText=secondInput;
if(secondInput=="High"){
    td2.style.backgroundColor="red";
    td2.style.color="white";

}else if
    (secondInput=="Medium"){
        td2.style.backgroundColor="Yellow";

    }else{
        td2.style.backgroundColor="green";
        td2.style.color="white";

    }

// third column
let td3=document.createElement("td");
td3.innerText="Remove";
td3.style.backgroundColor="red";
td3.style.color="white";
// del funtionality
td3.addEventListener("click",deleteList)

rows.append(td1,td2,td3);
document.querySelector("tbody").append(rows);
}
// delete functionality

function deleteList(e){
    e.target.parentNode.remove();
}
