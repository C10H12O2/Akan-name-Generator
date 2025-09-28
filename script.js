const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("Akan-Form").addEventListener("submit", function (e) {
    e.preventDefault();

const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const gender = document.getElementById("gender").value;
const resultDiv = document.getElementById("result");

if (day<1 || day>31){
    resultDiv.style.display = "block";
    resultDiv.innerHTML = " Please enter a day that's between 1 and 31.";
    return;
}

if (month<1 || month>12){
    resultDiv.style.display = "block";
    resultDiv.innerHTML = " Please enter a month thats between 1 and 12.";
    return;
}

if (!gender){
    resultDiv.style.display = "block";
    resultDiv.innerHTML = " Please pick a gender.";
    return;
}

const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = day;

let daysOfWeek= ((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM+1)/10)+DD;
if (d < 0) d += 7;

const akanName = akanNames[gender][d];
const dayName = daysOfWeek[d];

});   