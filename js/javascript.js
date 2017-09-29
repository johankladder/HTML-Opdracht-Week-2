
var basketData = [];

var total = 0;

document.addEventListener('input', function (input) {
    var value;
    if (input.type === 'input') {
        value = input.target.value;
        lol = 'moi';
        if (!isInt(value)) {
            alert('Vul hele nummer in');
            input.target.value = '';
        } else {
            addToBasket(input)
        }
    }
});

function isInt(n) {
    return n % 1 === 0;
}

function addToBasket(input) {
        tds = input.target.parentNode.parentNode.getElementsByTagName('td');

        name = tds.item(0).innerText;
        price = tds.item(1).innerText;
        q = input.target.value;

        basketData[name] = {
            "name": name,
            "price": price.replace(/,/g, '.'),
            "q": q
        };

        renderBasket();
}

function renderBasket() {
    var table = document.getElementById('basket');

    var oldBody = table.getElementsByTagName('tbody')[1];

    var newBody = document.createElement('tbody');
    total = 0;

    Object.keys(basketData).forEach(function (key, number) {

        var data = basketData[key];

        var row = newBody.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // Add some text to the new cells:

        subTotal = parseFloat(parseFloat(data.price) * parseFloat(data.q)).toFixed(2);
        total = (parseFloat(total) + parseFloat(subTotal));
        cell1.innerHTML = key;
        cell2.innerHTML = data.q;
        cell3.innerHTML = data.price;
        cell4.innerHTML = subTotal;
    });

    oldBody.parentNode.replaceChild(newBody, oldBody);

    totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = total;


}