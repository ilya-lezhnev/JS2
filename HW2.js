var term = {
    Belarus: 15,
    Russia: 13,
    Spain: 22,
    England: 10,
    India: 20,
}
console.log(term);

var sum = 0;
for (var i in term) sum += term[i];
var average = sum / Object.keys(term).length;
console.log("1. Средняя температура всех стран: " + average);

function maxTerm(obj) {
    var max = 0;
    for (var i in obj) {
        if(max < obj[i]) max = obj[i];
    }
    return max;
}
var max = maxTerm(term);
console.log("2. Максимальная температура среди стран: " + max);