function error(): never {  
    throw new Error('Error!!');
}

function fail(){
    return error();
}

function infinite(): never{
    while (true){ }
}