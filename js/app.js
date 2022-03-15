export const pascalToSnake = (message) => {
    let newords = ""

    if(isNaN(message) == false){
        return newords = message.toString();
    }
    
    for(let i = 0; i < message.length; i++){
        if((i != 0) && (message[i].match(/[A-Z]/))){
        newords += '_'
        newords += message[i];
        }

        else{
            newords += message[i];
        }
    }

    return newords.toLowerCase();
}

