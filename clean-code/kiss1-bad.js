//가독성이 떨어짐 bad
function getFirst(array, isEven){
    return array.find(x => (isEven ? x % 2 === 0 : x % 2 !==0));
}


//한가지 함수가 두가지 기능 bad
function getFirst(array, isEven){
    if(isEven){
        return array.find( x=> x % 2 === 0);
    }else {
        return array.find( x=> x % 2 !== 0);      
    }
}
