const textElement = document.getElementById('written-text')
const textValue = textElement.value;
console.log(textValue)


document.getElementById('bold-text').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.fontWeight = 'bold';
})

document.getElementById('italic-text').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.fontStyle = 'italic';
})

document.getElementById('underline-text').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.textDecoration = 'underline';
})





document.getElementById('left-text').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.textAlign = 'left';
})
document.getElementById('center-text').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.textAlign = 'center';
})
document.getElementById('right-text').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.textAlign = 'end';
})




// font size regulator
// document.getElementById('right-text').addEventListener('click', function () {
//     const textElement = document.getElementById('written-text'); 
//     const textWritten = textElement.innerText;

//     const style = getComputedStyle(textElement);
// const defaultFontSize = style.getPropertyValue('font-size');
// console.log(parseFloat(defaultFontSize));
// })


document.getElementById('uppercase-lowercase').addEventListener('click', function () {
    document.getElementById('written-text').innerText =  textElement.style.textTransform = 'uppercase';
})


document.getElementById('color-input').addEventListener('click', function (event) {
    const inputColorElement = document.getElementById('color-input');
    inputColorElement.oninput = () =>{
        document.getElementById('written-text').innerText =  textElement.style.color = inputColorElement.value;
    }
    
})



document.getElementById('font-size-input').addEventListener('click', function (event) {
    const inputSizeElement = document.getElementById('font-size-input');
    inputSizeElement.oninput = () =>{
        document.getElementById('written-text').innerText =  textElement.style.fontSize = inputSizeElement.value + 'px';
        console.log(inputSizeElement.value)
    }
    
})