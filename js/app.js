let hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getColor() {
    const arrayLength = hexCode.length;
    let arrColor = '#';

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.round(Math.random() * 15) + 0;
        arrColor = arrColor.concat(hexCode[randomNumber]);
    }
    document.body.style.backgroundColor = arrColor;
    const colorField = document.getElementById('color-field');
    colorField.value = arrColor;
}