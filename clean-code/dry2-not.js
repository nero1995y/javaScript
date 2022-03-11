//? 
function validateBody(body){
    if(!body.id){
        throw new Error('Validation failed. The attribute id is missing.');
    }
    if(!body.name){
        throw new Error('Validation failed. The attribute id is missing.');

    }

    if(!body.count){
        throw new Error('Validation failed. The attribute id is missing.');
    }
}