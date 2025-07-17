let todo=[];

let req=prompt("Enter your request");
while(true){
    if(req=="quit"){
        console.log("You have quit the app");
        break;
    }
    if(req=="showlist"){
        for(i of todo){
            console.log(i);
        }
        req = prompt("Enter your request");
    }else if(req=="add"){
        let task=prompt("Enter your task");     
        todo.push(task);
        console.log(`"${task}" has been added to the list`);
        req=prompt("Enter your request");
    }else if(req=="delete"){
        let index=prompt("Enter the index of the task to delete");
        if(index<0 || index>=todo.length){
            console.log("Invalid index");
        }else{
            let deletedTask=todo[index];
            todo.splice(index,1);
            console.log(`"${deletedTask}" has been deleted from the list`);
        }
        req=prompt("Enter your request");
    }else{
        console.log("Invalid request, please try again");
        req=prompt("Enter your request");
    }
}