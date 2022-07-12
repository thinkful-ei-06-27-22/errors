const users={
    'ericaW':{
        password:'password'
    },
    'xanderJ':{
        password:'password1',
        status: 'active'
    }
}
 
try{
    let user = users['ericaW'];
    console.log(user.status.name) //naturally creates error object
    if(!user){
        throw 'User does not exist';  //throws and error string
       //throw new Error('User does not exist') //throw error objects
    }

    
} catch(e){
    if(typeof e === 'string'){
        console.log(e);
    } else{
        console.log(`${e.name}: ${e.message}`)
    }
}
console.log('moving on!')