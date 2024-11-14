let stockBalance = [20000, 0, 0];
let balance = [19284, 1285, 102009];

function total (countableArray) {
    var value = 0;
    for (i = 0; i < 3; i++){
        value += countableArray[i];
    }
    return value;
}

document.getElementById("totalBalance").innerHTML = " $ " + total(balance);
document.getElementById("totalStockBalance").innerHTML = " $ " + total(stockBalance);