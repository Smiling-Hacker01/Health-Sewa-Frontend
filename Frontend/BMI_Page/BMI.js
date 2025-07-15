const myform = document.querySelector('form');
myform.addEventListener('submit',(event) => {
  event.preventDefault();
const height = parseFloat(document.getElementById("height").value);
const weight = parseFloat(document.getElementById("weight").value);
const result = document.querySelector('#result');
if (height <= 0 || isNaN(height) ) {
    result.innerHTML = `Please Enter a Valid Height : ${height}`;
    return;
}
else if (weight <= 0 || isNaN(weight) ) {
     result.innerHTML = `Please Enter a Valid weight : ${weight}`;
     return;
}
else{ 
    const BMI =  (weight / ((height * height) / 10000)).toFixed(2)
    if (BMI <= 18.6) { 
        result.innerHTML= `<span>Your BMI is: <strong>${BMI}</strong> i.e Under-Weight</span>`;
    }
    else if (BMI > 18.6 && BMI <= 24.9 ) { 
        result.innerHTML= `<span>Your BMI is: <strong>${BMI}</strong> i.e Normal-Weight</span>`;
    }
    else{
        result.innerHTML= `<span>Your BMI is: <strong>${BMI}</strong> i.e Over-Weight</span>`
    }
}
});