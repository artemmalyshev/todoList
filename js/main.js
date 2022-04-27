let push = document.querySelector("#push");
push.addEventListener("click", function () {
    let newTask = document.querySelector("#newtask input").value;
    if (newTask.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `;

        let current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
})


