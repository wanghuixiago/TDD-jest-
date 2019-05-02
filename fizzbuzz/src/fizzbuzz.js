const fizzbuzz=()=>{
    const ary=[];
    for(var i=1;i<=100;i++){
        if(i%15==0){
            ary.push("fizzbuzz")
        }else if(i%3==0){
            ary.push("fizz")
        }else if(i%5==0){
            ary.push("buzz")
        }else{
            ary.push(i)
        }
       
    }
    return ary
}

module.exports= fizzbuzz