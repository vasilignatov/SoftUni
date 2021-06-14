function solve(area, vol, input) {
    return JSON.parse(input)
        .map(x => x = {
                area: area.call(x),
                volume: vol.call(x)
        });
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


const string = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`

console.log((solve(area, vol, string)))