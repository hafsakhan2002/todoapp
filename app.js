function add(){
    var input = document.getElementById('inpValue');

    if(input.value==""){
        alert('Please enter Something') //if value is empty then stop user from adding it
    }


    else{ //if value is not empty then do this

    var main = document.getElementById('main');

    var list = document.createElement('div');

    var text = document.createElement('li');

    text.setAttribute("class","list-group-item")

    list.setAttribute('class',"card");

    var textVal = document.createTextNode(input.value);

    text.appendChild(textVal);


    /////////////////.......BUTTONS.......////////////////////////////


    var btn = document.createElement("button")

    var btnText = document.createTextNode("Delete")

    btn.setAttribute("onclick","todoDel()")

    btn.setAttribute("class","btn btn-outline-dark")

    btn.appendChild(btnText)

    text.appendChild(btn);

    var editBtn = document.createElement('button')

    var editText = document.createTextNode("Edit")

    editBtn.setAttribute("class","btn btn-outline-info")

    editBtn.setAttribute("onclick","todoEdit()")

    editBtn.appendChild(editText);

    text.appendChild(editBtn)

    //..........................//////////////.../////////////........//

    list.appendChild(text); //list of To-Do

    main.appendChild(list); //main is the parent of all these elemets which is located in html file (ul)



    input.value=("")
    }
}


function delAll(){
    var del = document.getElementById('main')
    del.innerHTML=""
}

function todoDel(){
    var btn = event.target.parentNode
    btn.parentNode.remove()

}

function todoEdit(){
    var editBtn = event.target.parentNode.firstChild.nodeValue = prompt("Edit",event.target.parentNode.firstChild.nodeValue )
    console.log(editBtn)
} 