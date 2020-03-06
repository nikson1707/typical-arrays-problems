exports.min = function min (array) {
  return typeof(array)==='undefined'|| array.length===0 ? 0: Math.min(...array);
}

exports.max = function max (array) {
    return typeof(array)==='undefined'|| array.length===0 ? 0: Math.max(...array);
}

exports.avg = function avg (array) {
    let summ = 0;
    if(typeof(array)==='undefined'||array.length===0){
        return 0;
    }
    else{
        summ = array.reduce((previous, current) => current += previous);
    }   
    return summ/=array.length;
}
