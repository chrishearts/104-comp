

  
    
    function addTask(){
    
    task=document.getElementById("task").value;
    
    document.getElementById("task-list").innerHTML +=`<li>${task}<button onclick="deleteItem()"> remove </button></li>`;
    
    }
    
    function deleteItem() {
      var list = document.getElementById("task-list");
      list.removeChild(list.childNodes[0]);
    }
    