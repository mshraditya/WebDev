console.log("Enter the command form the RightSide");
let req = prompt("Enter command");
let lists=[]
while(true){
        if(req=="quit"){
        console.log("Thanks for Using Us ");
        break;
        }
           if(req=="list"){
         for(let i=0;i<lists.length;i++){
                console.log(i,lists[i]);
         }
       }
        else if (req=="delete"){
        let indx=prompt("Enter the index of of the task which you want to delete");
        lists.splice(indx,1);
       }
       else if(req== "add"){
        let tasks=prompt("Enter the tasks");
        lists.push(tasks);
        console.log("Task added");
       }
       else {
        console.log("Enter valid prompt")
       }
        req = prompt("Enter command");
      
    //    else{
    //     prompt("Enter the correct command");
    //    }
}
