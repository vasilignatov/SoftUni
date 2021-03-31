function solve(arr){
    let sorted = arr.sort((a, b) => a - b);
    let half = Math.ceil(arr.length / 2);  


    return sorted.slice(-half);
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));