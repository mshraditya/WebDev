   function sum(...args){
    return args.reduce((sum, el) => sum+el)
   }
 function min(...arg){
      return arg.reduce((min,el)=>{
        if(min>el) return el;
        else return min;
      })
 }