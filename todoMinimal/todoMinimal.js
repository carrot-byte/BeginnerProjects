const todoInput = document.querySelector(".todo-input");
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");
   

        todoButton.addEventListener("click", addTodo);
        todoList.addEventListener("click", checkTask);  //i guess you can only add eventlistener to the declared variable


        function addTodo(){
            if(todoInput.value === ""){
                alert("You must write something!");
            }else{
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("todo-div");

                const todoName = document.createElement("li");
                todoName.classList.add("todo-name");
                todoName.innerText = todoInput.value;
                todoInput.value = "";
                todoDiv.appendChild(todoName);

                const completedButton = document.createElement("button");
                completedButton.classList.add("completed-button");
                completedButton.innerText = "Done"
                todoDiv.appendChild(completedButton);

                const delButton = document.createElement("button");
                delButton.classList.add("del-button");
                delButton.innerText = "Del"
                todoDiv.appendChild(delButton);

                todoList.appendChild(todoDiv);
                todoDiv.scrollIntoView();
            }            
        }

        function checkTask(event){
            const item = event.target;
            const parentItem = item.parentElement;
            const childLi = parentItem.childNodes[0];

            if(item.classList[0] == "completed-button"){                
                childLi.classList.toggle("task-completed");
                // console.log(childLi);
                // console.log(parentItem.child)
            }else if(item.classList[0] == "del-button"){
                parentItem.classList.add("fall");                
                parentItem.addEventListener("transitionend", function(){
                    parentItem.remove();
                })
            }
        }