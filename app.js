//SELECTORS
let add=document.querySelector('.input-data');
let adbtn=document.querySelector('.addbtn');
let list=document.querySelector('.b-list');

adbtn.addEventListener('click',() => {
    let txt=add.value;
    if(txt==="")
    {
        alert("You must write something");
    }
    else{

        //Crating a to-do div which will have the delete btn and edit button and the li
        let todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
         // now creating the li
         let task=document.createElement('li');
         task.innerHTML=txt;
         task.classList.add("thingsToo");
         //check button
         let butdiv=document.createElement("div");
         butdiv.classList.add("butdiv");
         let checkbtn=document.createElement('button');
         checkbtn.innerHTML='<i class="fas fa-check-square"></i>';
         checkbtn.classList.add("donebtn");
         //remove button
         let removebtn=document.createElement('button');
         removebtn.innerHTML='<i class="fas fa-trash"></i>';
         removebtn.classList.add("trashbtn");
        //Now we need to append the two buttons and the list item to the todoDiv
        
        butdiv.appendChild(checkbtn);
        butdiv.appendChild(removebtn);
        todoDiv.appendChild(task);
        todoDiv.appendChild(butdiv);
        //now we need to append this todoDiv to the list
        list.appendChild(todoDiv);
        add.value="";
        checkbtn.addEventListener('dblclick',() =>{
            task.style.textDecoration="none";
        })
        checkbtn.addEventListener('click',() =>{
            task.style.textDecoration="line-through";
    
        })
        
        removebtn.addEventListener('click',() =>{
            list.removeChild(todoDiv);
        })
    }
    // let textt=document.querySelector('.thingsToo');
    // let remove=document.querySelector('.trashbtn');
    // remove.addEventListener('click',() =>{
    //     textt.style.textDecoration="line-through";

    // })

})
