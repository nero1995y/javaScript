//기능 분리
function getFirstOdd(array){
    return array.find( x=> x % 2 === 0);
}

function getFirstEven(array){
    return array.find( x=> x % 2 !== 0);
}