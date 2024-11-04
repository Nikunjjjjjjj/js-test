//everything in{} is a scope
function one() {
    const username="niknj"
    function two() {
        const age=21
        console.log(username); //it will be global because child can access parent but parent can,t of child
        
    }
    //console.log(age);it will not print because out of scope
    two()

}  
one()