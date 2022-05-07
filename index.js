function calculateDogAge(age) {
    var age = document.getElementById("age").value;
    var DogYears = 7;
    var ageTotal = (age * DogYears)

    document.getElementById("result").innerHTML = "Your puppy is " + ageTotal + " years old in dog years.";
}
