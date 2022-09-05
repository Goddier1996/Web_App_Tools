
//                                                          big calc


// show numbers in the screen
function showNum(val) {

    document.getElementById("resultBigCalc").innerHTML += val
}



// show result,if dont have input show message,if have input show result num in the screen
function Worth() {

    let x = document.getElementById("resultBigCalc").innerHTML;

    // library math js = math.evaluate()
    let mathResult = math.evaluate(x);

    if (mathResult == null) {

        let errMessage = "please input value";

        document.getElementById("resultBigCalc").innerHTML = errMessage;
    }

    else {

        document.getElementById("resultBigCalc").innerHTML = mathResult;
    }

}


// clear screen in the calc
function clearCalcScreen() {

    document.getElementById("resultBigCalc").innerHTML = ""
}






//                                                           bmi Calc


// check value use this function in checkBMI()
function checkInput(inputValue, min, max, errorElement) {

    let errorParagraph = document.getElementById(errorElement)

    if (inputValue >= min && inputValue <= max) {
        errorParagraph.style.display = 'none'
        return true
    }

    if (inputValue == '') {
        errorParagraph.style.display = 'block'
        return false
    }

    else {
        errorParagraph.style.display = 'block'
        return false
    }

}



// calculation bmi
function calcBMI(weight, height) {

    return weight / (height * height) * 10000
}




// check value and show result
function checkBMI() {


    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;


    if (weight == '' || height == '') {
        Swal.fire({
            text: 'input value please',
            icon: 'warning',
            confirmButtonColor: 'green'
        });

        return;
    }

    else {


        if (
            checkInput(weight, 30, 200, 'weightError') ||
            checkInput(height, 120, 220, 'heightError')
        ) {

            let BMIResult = calcBMI(weight, height);


            switch (true) {

                case BMIResult < 18.5:
                    // document.getElementById('resultBmi').innerHTML = "Underweight" + BMIResult;

                    Swal.fire({
                        icon: 'warning',
                        confirmButtonColor: 'green',
                        html: '<h5>Result BMI Calculator :</h5><br/>Underweight' + '<br/><br/>' + BMIResult
                    });
                    break;

                case BMIResult < 25:
                    // document.getElementById('resultBmi').innerHTML = "A proper weight" + BMIResult;

                    Swal.fire({
                        icon: 'warning',
                        confirmButtonColor: 'green',
                        html: '<h5>Result BMI Calculator :</h5><br/>A proper weight' + '<br/><br/>' + BMIResult
                    });
                    break;

                case BMIResult < 30:
                    // document.getElementById('resultBmi').innerHTML = "Overweight" + BMIResult;

                    Swal.fire({
                        icon: 'warning',
                        confirmButtonColor: 'green',
                        html: '<h5>Result BMI Calculator :</h5><br/>Overweight' + '<br/><br/>' + BMIResult
                    });
                    break;

                case BMIResult < 35:
                    // document.getElementById('resultBmi').innerHTML = "Grade 1 obesity" + BMIResult;

                    Swal.fire({
                        icon: 'warning',
                        confirmButtonColor: 'green',
                        html: '<h5>Result BMI Calculator :</h5><br/>Grade 1 obesity' + '<br/><br/>' + BMIResult
                    });
                    break;

                case BMIResult < 40:
                    // document.getElementById('resultBmi').innerHTML = "Grade 2 obesity" + BMIResult; 

                    Swal.fire({
                        icon: 'warning',
                        confirmButtonColor: 'green',
                        html: '<h5>Result BMI Calculator :</h5><br/>Grade 2 obesity' + '<br/><br/>' + BMIResult
                    });
                    break;

                default:

                    // document.getElementById('resultBmi').innerHTML = "Grade 3 obesity" + BMIResult;

                    Swal.fire({
                        icon: 'warning',
                        confirmButtonColor: 'green',
                        html: '<h5>Result BMI Calculator :</h5><br/>Grade 3 obesity' + '<br/><br/>' + BMIResult
                    });
                    break;
            }

        }
        else {

            Swal.fire({
                icon: 'warning',
                confirmButtonColor: 'green',
                html: 'Invalid weight field Or Invalid height field'
            });
        }
    }
}





//                                                         mini calc  


// all opertion calc
function calcmn() {

    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let oper = document.getElementById('operators').value;



    if (oper === '+') {
        document.getElementById('resultCalcMini').innerHTML = n1 + n2;
    }

    else if (oper === '-') {
        document.getElementById('resultCalcMini').innerHTML = n1 - n2;
    }

    else if (oper === '/') {
        document.getElementById('resultCalcMini').innerHTML = n1 / n2;
    }

    else if (oper === '*') {
        document.getElementById('resultCalcMini').innerHTML = n1 * n2;
    }

}



// check if value was number , we create input type text because we input number parseFloat
function checkInputValue(element) {


    let Boolres = isNaN(element.value);

    if (Boolres == false) {

        element.style.border = '2px solid #989e92'
    }

    if (Boolres == true) {

        element.style.border = '2px solid red'
        // document.getElementById('resultCalcMini').innerHTML = "Please input";
    }
}





//                                             multi table Multiplication


// active fuction 
multiplicationTable()


function multiplicationTable() {

    let table;
    table = '<table id="mtable">';

    // let num1 = document.getElementById("number1").value;
    // let num2 = document.getElementById("number2").value;

    let num1 = 1;
    let num2 = 10;

    if (num1 == null || num1 == "")
        num1;

    if (num2 == null || num2 == "")
        num2;

    for (i = 1; i <= 10; i++) {

        table += '<tr>';

        for (num = num1; num <= num2; num++) {

            table += '<td>' + num * i + '</td>';
        }

        table += '</tr>';

    }

    table += '</table>';
    document.getElementById("resultMultiplication").innerHTML = table;
}




//                                           function exit from Tools
function exit() {

    window.location.reload(false);
}