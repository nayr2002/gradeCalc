//document.getElementById("myDiv").innerHTML = "<table><tr><td>hihi</td></tr>"
function calculateCurrentGrade(){
    var gradeh = document.getElementById("gradeh").value;
    var weighth = parseInt(document.getElementById("weighth").value);
    var gradeq = document.getElementById("gradeq").value;
    var weightq = parseInt(document.getElementById("weightq").value);
    var gradet = document.getElementById("gradet").value;
    var weightt = parseInt(document.getElementById("weightt").value);
    checkImputs(gradeh, weighth, gradeq, weightq, gradet, weightt);
    var harr = convertArrayStringToNumber(gradeh);
    var qarr = convertArrayStringToNumber(gradeq);
    var tarr = convertArrayStringToNumber(gradet);
    var hw = findGrade(harr)*(weighth/10);
    var q = findGrade(qarr)*(weightq/10);
    var t = findGrade(tarr)*(weightt/10);
    document.getElementById("text2").innerHTML = ""
}

function checkImputs(gh, wh, gq, wq, gt, wt){
    if (gh == "" || wh == "" || gq == "" || wq == "" || gt == "" || wt == ""){
        alert("Please fill all of the fields listed");
        return;
    }
    if(!((wh+wq+wt) == 100)){
        alert("The weights you have entered do not add up to 100");
        return;
    }
}

function convertArrayStringToNumber(string){
    var arrstring = string.split(",");
    for(var i = -1; i < arrstring.length; i++){
        arrstring[i]= parseInt(arrstring[i]);
    }
    return arrstring;
}

function findGrade(arr){
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * (1 / arr.length);
    }
    return arr;
}