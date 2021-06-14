function solve() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(strToAppend) {
        str += strToAppend;
    }

    function removeStart(n) {
        str = str.slice(n);
    }

    function removeEnd(n) {
        str = str.substring(0, -n);
    }

    function print() {
        console.log(str);
    } 
}

let firstZeroTest = solve();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
