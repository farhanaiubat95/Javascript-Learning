// Send Money
function sendmoney() {
    const currentBalance = parseFloat(document.getElementById('currentBalance').value);
    const sendMoney = parseFloat(document.getElementById('sendMoney').value);
    let receiverNumber = document.getElementById('receiverNumber').value;
    let radios = document.getElementsByName('radios');
    const mainPop = document.getElementById("main-id");
    let radioValue;
    let newbalance;
    let charge;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioValue = radios[i].value;
        }
    }
    if (currentBalance == "" || sendMoney == "" || receiverNumber == "" || radioValue == "") {
        alert('Please fill all the fields');
    } else if (receiverNumber.length != 11) {
        alert('Invalid phone number.\nPhone number must be 11 digit');
    }
    else {
        if (currentBalance < sendMoney) {
            alert('Insufficient balance');
        } else {
            if (radioValue == 'Regular Number') {
                if (sendMoney < 0) {
                    alert('Invalid amount.\nMinimum amount is 1');
                } else if (sendMoney >= 1 && sendMoney <= 25000) {
                    charge = 5;
                    newbalance = currentBalance - sendMoney - charge;

                } else {
                    charge = 10;
                    newbalance = currentBalance - sendMoney - charge;
                }
                // input update data
                alert('Money is sent successfully');
                document.getElementById('radioValuetk').innerHTML = radioValue;
                document.getElementById('sendmoneytk').innerHTML = sendMoney;
                document.getElementById('cargetk').innerHTML = charge;
                document.getElementById('receiverNumbertk').innerHTML = receiverNumber;
                document.getElementById('newbalancetk').innerHTML = newbalance;

            } else {
                if (sendMoney < 0) {
                    alert('Invalid amount.\nMinimum amount is 1');
                } else {
                    charge = 0;
                    newbalance = currentBalance - sendMoney;
                }

                // input update data
                alert('Money is sent successfully');
                document.getElementById('radioValuetk').innerHTML = radioValue;
                document.getElementById('sendmoneytk').innerHTML = sendMoney;
                document.getElementById('cargetk').innerHTML = charge;
                document.getElementById('receiverNumbertk').innerHTML = receiverNumber;
                document.getElementById('newbalancetk').innerHTML = newbalance;
            }
        }

        mainPop.classList.toggle("active");
    }
}

// Cashout
function cashout() {
    const currentBalance = parseFloat(document.getElementById('currentBalance').value);
    const cashoutmoney = parseFloat(document.getElementById('cashoutmoney').value);
    let agentnumber = document.getElementById('agentnumber').value;
    let radios = document.getElementsByName('radios');
    const mainPop = document.getElementById("main-id");
    let radioValue;
    let newbalance;
    let charge;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioValue = radios[i].value;
        }
    }
    if (currentBalance == "" || cashoutmoney == "" || agentnumber == "" || radioValue == "") {
        alert('Please fill all the fields');
    } else if (agentnumber.length != 11) {
        alert('Invalid phone number.\nPhone number must be 11 digit');
    }
    else {
        if (currentBalance < cashoutmoney) {
            alert('Insufficient balance');
        } else {
            if (radioValue == 'Regular Number') {
                if (cashoutmoney >= 50 && cashoutmoney <= 25000) {
                    charge = (cashoutmoney * 0.0185);
                    newbalance = currentBalance - cashoutmoney - charge;
                    // input update data
                    alert('Money is sent successfully');
                    document.getElementById('radioValuetk').innerHTML = radioValue;
                    document.getElementById('sendmoneytk').innerHTML = cashoutmoney;
                    document.getElementById('cargetk').innerHTML = charge;
                    document.getElementById('receiverNumbertk').innerHTML = agentnumber;
                    mainPop.classList.toggle("active"); document.getElementById('newbalancetk').innerHTML = newbalance;

                } else {
                    alert('Invalid amount.\nValid amount BDT 50 to BDT 25,000');
                }
            } else {
                if (cashoutmoney >= 50 && cashoutmoney <= 50000) {
                    charge = (cashoutmoney * 0.0149);
                    newbalance = currentBalance - cashoutmoney - charge;
                    // input update data
                    alert('Money is sent successfully');
                    document.getElementById('radioValuetk').innerHTML = radioValue;
                    document.getElementById('sendmoneytk').innerHTML = cashoutmoney;
                    document.getElementById('cargetk').innerHTML = charge;
                    document.getElementById('receiverNumbertk').innerHTML = agentnumber;
                    document.getElementById('newbalancetk').innerHTML = newbalance;
                    mainPop.classList.toggle("active");
                } else {
                    alert('Invalid amount.\nValid amount BDT 50 to BDT 50,000');
                }
            }
        }

    }
}