document.addEventListener('input', function (input) {
    var value;
    if (input.type === 'input') {
        value = input.target.value;
        if (!isInt(value)) {
            alert('Vul hele nummer in');
            input.target.value = '';
        }
    }
});

function isInt(n) {
    return n % 1 === 0;
}