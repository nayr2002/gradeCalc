//document.getElementById("myDiv").innerHTML = "<table><tr><td>hihi</td></tr>"
function calculateCurrentGrade(){
    var gradeh = document.getElementById("gradeh").value;
    var weighth = parseInt(document.getElementById("weighth").value);

    var gradeq = document.getElementById("gradeq").value;
    var weightq = parseInt(document.getElementById("weightq").value);

    var gradet = document.getElementById("gradet").value;
    var weightt = parseInt(document.getElementById("weightt").value);

    var error = checkImputs1(gradeh, weighth, gradeq, weightq, gradet, weightt);

    if(error == f){
        return;
    } else {
        var harr = convertArrayStringToNumber(gradeh);
        var qarr = convertArrayStringToNumber(gradeq);
        var tarr = convertArrayStringToNumber(gradet);

        var hwg = avgGrade(harr);
        var qg = avgGrade(qarr);
        var tg = avgGrade(tarr);

        var hw = hwg * (weighth / 100);
        var q = qg * (weightq / 100);
        var t = tg * (weightt / 100);

        document.getElementById("hw").style.color = getColor(hwg);
        document.getElementById("quiz").style.color = getColor(qg);
        document.getElementById("test").style.color = getColor(tg);

        document.getElementById("text2").style.display = "block";
        document.getElementById("current").innerHTML = "Your current grade is a " + (hw + q + t) + "%";
        return (hw + q + t);
    }
}

function calculateFinalExamGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
    var desired = document.getElementById("gradew").value;
    var weight = document.getElementById("weightf").value;

    var error = checkImputs2(desired, weight);

    if(error == f){
        return;
    } else {
        var g = currentGrade/100;
        var n = g * (100-weight);
        var l = desired - n;
        var z = l / weight;
        var gradeNeeded = Math.round(z * 100);
        document.getElementById("needed").innerHTML = "you need a " + gradeNeeded + "%";
        document.getElementById("text3").style.display = "block";
        return gradeNeeded;
    }
}

function reset(){
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none";

    document.getElementById("needed").innerHTML = "";
    document.getElementById("current").innerHTML = "";

    document.getElementById("gradeh").value = "";
    document.getElementById("weighth").value = "";
    document.getElementById("gradeq").value = "";
    document.getElementById("weightq").value = "";
    document.getElementById("gradet").value = "";
    document.getElementById("weightt").value = "";
    document.getElementById("gradew").value = "";
    document.getElementById("weightf").value = "";

    document.getElementById("hw").style.color = "#e37222";
    document.getElementById("quiz").style.color = "#e37222";
    document.getElementById("test").style.color = "#e37222";
}
function checkImputs1(gh, wh, gq, wq, gt, wt){
    if (gh == "" || wh == "" || gq == "" || wq == "" || gt == "" || wt == ""){
        alert("Please fill all of the fields listed");
        return f;
    }
    if(!((wh+wq+wt) == 100)){
        alert("The weights you have entered do not add up to 100");
        return f;
    }
}

function checkImputs2(desired, weight){
    if (desired == "" || weight == ""){
        alert("Please fill all of the fields listed");
        return f;
    }
}
function convertArrayStringToNumber(string){
    var arrstring = string.split(",");
    for(var i = 0; i < arrstring.length; i++){
        arrstring[i]= parseInt(arrstring[i]);
    }
    return arrstring;
}

function avgGrade(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return Math.round(sum/(arr.length));
}

function getColor(grade){
    if(grade >= 90){
        return "limegreen";
    }

    if(grade >= 80 && grade < 90){
        return "darkgreen";
    }

    if(grade >= 70 && grade < 80){
        return "orange";
    }

    if(grade < 70){
        return "darkred";
    }
}