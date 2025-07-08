document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    
    const input = document.getElementById("new-task-description")
    const task = input.value
      if(task === ""){
          alert("Please enter a task")
        }

    const showTask =document.createElement("li")

        showTask.textContent = task
  
      
    document.getElementById("tasks").appendChild(showTask)
           let btn = document.createElement("button")
           btn.addEventListener("click" ,handleBtn )
           btn.textContent = "x"
           showTask.appendChild(btn)
           btn.style.marginLeft = "10px";

 form.reset()
           
  })
  function handleBtn(e){
    e.target.parentNode.remove()
  }
  
});
