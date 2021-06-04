// chuyển đổi số âm--> số dương
function changeNumber() {
    var soamInput = document.getElementById("soam");
    if (soamInput.value > 0) {
        document.getElementById("info-no1").style.display = "block";
        document.getElementById("info-no1").innerHTML = "Số bạn nhập không phải số âm. Xin hãy kiểm tra lại";
    }
    else {
        document.getElementById("info-no1").style.display = "none";
        var resultChangeNum = -soamInput.value;
        document.getElementById("ketquaSoduong").value = resultChangeNum;
    }

}
// bài 2: tính tiền phạt trả ngân hàng
function paymendCard() {
    const laisuat = 0.15;
    var creditcard = document.getElementById("soduTD");
    var payment = document.getElementById("payTD");
    var balance = creditcard.value - payment.value;
    if (balance > 0) {
        document.getElementById("infoResult").style.display = "none"
        document.getElementById("formResult").style.display = "block";
        document.getElementById("resultTT").style.display = "block";
        document.getElementById("balanceTD").value = balance;
        var paymentNH = balance + balance * laisuat;
        document.getElementById("totalMoney").value = paymentNH;

    }
    else {
        document.getElementById("formResult").style.display = "block";
        document.getElementById("resultTT").style.display = "none";
        document.getElementById("infoResult").style.display = "inline"
    }
}
// Bài 3: Tính tiền lương lao động trong một tuần của nhân viên
function salaryPay() {
    var wHour = document.getElementById("hour");
    var payperHour = document.getElementById("moneyHour");
    if (wHour > 40) {
        var salaryWeek = payperHour.value * 40 + payperHour.value * 1.5 * (wHour.value - 40);
    } else {
        var salaryWeek = payperHour.value * wHour.value;
    }
    document.getElementById("formresultSalary").style.display = "block";
    document.getElementById("salaryID").value = salaryWeek;
}
// Bài 4 Tính tiền thanh toán:
function changeDongia() {
    document.getElementById("moneyperPro").value = document.getElementById("productID").value;
}
function moPayTienthanhtoan() {
    var Qty = document.getElementById("proQty").value;
    var perPro = document.getElementById("moneyperPro").value
    var productName = document.getElementById("productID").options[document.getElementById("productID").selectedIndex].text;
    if (Qty >= 50 && Qty <= 100) {
        var ProPayment = Qty * perPro - Qty * perPro * 0.08;
    }
    else if (Qty > 100) {
        var ProPayment = Qty * perPro - Qty * perPro * 0.12;
    }
    else {
        var ProPayment = Qty * perPro;
    }
    document.getElementById("productN").innerHTML = productName;
    document.getElementById("paymentID").value = ProPayment;
    document.getElementById("resultPay").style.display = "block";
}
// Bài 5: Tính và xuất kết quả học tập
function TB() {
    var studentName = document.getElementById("HS-fullName").value;
    var mathPoint = parseFloat(document.getElementById("toanID").value);
    var sciencePoint = parseFloat(document.getElementById("lyID").value);
    var BioPoint = parseFloat(document.getElementById("hoaID").value);
    var tbPoint = (mathPoint + sciencePoint + BioPoint) / 3;

    document.getElementById("resultLearn").style.display = "block";
    document.getElementById("HSID").innerHTML = studentName;
    document.getElementById("TBID").value = tbPoint;
    if (tbPoint < 5) {
        document.getElementById("xeploaiID").innerHTML = "Yếu";
    }
    else if (tbPoint >= 5 && tbPoint < 6.5) {
        document.getElementById("xeploaiID").innerHTML = "Trung Bình";
    }
    else if (tbPoint >= 6.5 && tbPoint < 8.5) {
        document.getElementById("xeploaiID").innerHTML = "Khá";
    }
    else {
        document.getElementById("xeploaiID").innerHTML = "Giỏi";
    }
}
/// HomeWork
//Bài 1: Nhập 3 số và sắp xếp theo thứ tự tăng dần.
function arrangeFunc() {
    var firstNumber = parseInt(document.getElementById("firstNum").value);
    var secondNumber = parseInt(document.getElementById("secondNum").value);
    var thirstNumber = parseInt(document.getElementById("thirstNum").value);

    if (firstNumber >= secondNumber && firstNumber >= thirstNumber) {
        if (secondNumber >= thirstNumber) {
            document.getElementById("resultArrange").value = thirstNumber + " " + secondNumber + " " + firstNumber;
        }
        else {
            document.getElementById("resultArrange").value = secondNumber + " " + thirstNumber + " " + firstNumber;
        }
    }
    else if (secondNumber >= thirstNumber) {
        if (firstNumber >= thirstNumber) {
            document.getElementById("resultArrange").value = thirstNumber + " " + firstNumber + " " + secondNumber;
        }
        else {
            document.getElementById("resultArrange").value = firstNumber + " " + thirstNumber + " " + secondNumber;
        }
    }
    else if (thirstNumber >= secondNumber) {
        if (firstNumber >= secondNumber) {
            document.getElementById("resultArrange").value = secondNumber + " " + firstNumber + " " + thirstNumber;
        }
        else {
            document.getElementById("resultArrange").value = firstNumber + " " + secondNumber + " " + thirstNumber;
        }
    }
}
// Bài 2: Chương trình chào hỏi các thành viên trong gia đình.

function memberList() {
    switch (document.getElementById("memberID").value) {
        case "B":
            document.getElementById("Talk").innerHTML = "Hello Dad";
            break;
        case "M":
            document.getElementById("Talk").innerHTML = "Hello Mom";
            break;
        case "A":
            document.getElementById("Talk").innerHTML = "Hello Bro";
            break;
        case "E":
            document.getElementById("Talk").innerHTML = "Hello Sister";
            break;
        case "T":
            document.getElementById("Talk").innerHTML="Get out of my face";
            break;
        default:
            document.getElementById("Talk").innerHTML="";
    }

}
/// Bài 3: Chương trình tìm số lượng số chẵn và số lẻ
function findFunc() {
    var firstNumber3 = parseInt(document.getElementById("firstNum3").value);
    var secondNumber3 = parseInt(document.getElementById("secondNum3").value);
    var thirstNumber3 = parseInt(document.getElementById("thirstNum3").value);
    var sochanCount=0;
    var soleCount =0;
// processing
    if(firstNumber3%2!==0){
        soleCount++;
    }
    else{
        sochanCount++;
    }

    if(secondNumber3%2!==0){
        soleCount++;
    }
    else{
        sochanCount++;
    }
    if(thirstNumber3%2!==0){
        soleCount++;
    }
    else{
        sochanCount++;
    }
// output
    document.getElementById("Numbertypeid").value = soleCount + ": Số lẻ" +" "+ sochanCount + ": Số chẵn";
}
/// Bài 4: Chương trình nhận biết loại tam giác
function defTriangle(){
    var cur1=parseFloat(document.getElementById("cur1").value);
    var cur2=parseFloat(document.getElementById("cur2").value);
    var cur3=parseFloat(document.getElementById("cur3").value);

    if(cur1===cur2 && cur2===cur3 && cur3===cur1){
        document.getElementById("TriangleTypeId").value=" Tam giác đều";
    }
    else if((cur1===Math.sqrt(cur2*cur2+cur3*cur3))||(cur2===Math.sqrt(cur1*cur1+cur3*cur3))||(cur3===Math.sqrt(cur2*cur2+cur1*cur1))){
        document.getElementById("TriangleTypeId").value=" Tam giác vuông";
    }
    else if((cur1===cur2)||(cur2===cur3)||(cur3===cur1)){
        document.getElementById("TriangleTypeId").value=" Tam giác cân";
    }
    else {
        document.getElementById("TriangleTypeId").value=" Tam giác thường";
    }
    
}