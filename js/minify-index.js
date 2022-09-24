const todoForm=document.querySelector(".form-todo"),todoInput=document.querySelector(".form-todo input[type='text']"),todoList=document.querySelector(".todo-list");todoForm.addEventListener("submit",t=>{t.preventDefault();let e=todoInput.value,o=document.createElement("li"),n=`
        <span class="text">${e}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;o.innerHTML=n,todoList.append(o),todoInput.value=""}),todoList.addEventListener("click",t=>{if(t.target.classList.contains("remove")){let e=t.target.parentNode.parentNode;e.remove()}if(t.target.classList.contains("done")){let o=t.target.parentNode.previousElementSibling;o.style.textDecoration="line-through"}});