const akanNames = {
    male: ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"],
    female: ["Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama"]
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

});   