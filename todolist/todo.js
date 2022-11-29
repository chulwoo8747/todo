let create = document.createElement("div");
let btn = document.querySelector(".complete-all-btn");
let input = document.querySelector(".todo-input");
const add = document.querySelector(".body");
const enterBtn = document.querySelector(".complete-all-btn");



enterBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    const container = document.createElement('input');
    container.type = "checkbox"
    //container.checked;
    add.appendChild(div);
    div.appendChild(container);
    let addDiv = document.createElement("div");
    addDiv.classList.add("todo-input");
    addDiv.innerText = input.value;
    div.appendChild(addDiv);
    input.value = "";
    container.addEventListener("click", () =>{
        if (container.checked) {
            addDiv.classList.add("check");
        }
        else
            addDiv.classList.remove("check");
    })
    const del = document.createElement("button");
    del.innerText = "삭제";
    div.appendChild(del);

    del.addEventListener("click", () => {
        addDiv.remove();
        del.remove();
        container.remove();
        modify.remove();
    })

    const modify = document.createElement("button");
    modify.innerText = "수정";
    div.appendChild(modify);

    modify.addEventListener("click", () => {
        // addDiv.remove();
        const confirmBtn = document.createElement("input");
        const editBtn = document.createElement("button");
        div.appendChild(confirmBtn);
        div.appendChild(editBtn);
        editBtn.innerText = "확인";
        modify.remove();   
        
        editBtn.addEventListener("click", () => {
            
            addDiv.innerText = confirmBtn.value;
            confirmBtn.remove();
            editBtn.remove();
            modify.innerText = "수정";
            div.appendChild(modify);
        });
    })
})

//열거형 -> 

/**
 * editBtn.addEventListener("click", () => {
            addDiv.appendChild(qjxms.value);
        })
 */





