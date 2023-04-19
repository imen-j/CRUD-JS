var selectedRow=null;

//show alerts

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container =document.querySelector('.container');
    const main=document.querySelector(".main")
    container.insertBefore(div,main);
    setTimeout(()=>document.querySelector(".alert").remove(),3000);
}

//clear all fiels

function clearFields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value="";
    document.querySelector("#RollN").value="";

}

//add DATA
document.querySelector("#studentform").addEventListener("submit",(e)=>{
    e.preventDefault();

    //Get form values
    const firstName=document.querySelector("#firstName").value;
    const LastName=document.querySelector("#LastName").value;
    const RollN=document.querySelector("#RollN").value;

    //validate 
    if (firstName==""|| LastName==""||RollN==""){
        showAlert("Please fill in all fiels", "danger");
    }
    else{
        if (selectedRow==null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML=`
                <td>${firstName}</td>
                <td>${LastName}</td>
                <td>${RollN}</td>
                <td>
                  <a href="#" class="btn btn-success btn-sm">edit</a>
                <a href="#" class="btn btn-danger btn-sm">delete</a>
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("student  added", "success");
        }
        else{
            selectedRow.children[0].textContent= firstName;
            selectedRow.children[1].textContent= LastName;
            selectedRow.children[2].textContent= RollN;
            selectedRow=null;
            showAlert("student edited","info");

        }
        clearFields();
    }
});

//Eidt data

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target= e.target;
    if (target.classList.contains("btn-info")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value= selectedRow.children[0].textContent;
        document.querySelector("#LastName").value= selectedRow.children[1].textContent;
        document.querySelector("#RollN").value= selectedRow.children[2].textContent;

    }
    
});

//delete data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("btn-danger")) {
      target.parentElement.parentElement.remove();
      showAlert("student data deleted", "danger");
    }
    console.log("hello");
  });
  