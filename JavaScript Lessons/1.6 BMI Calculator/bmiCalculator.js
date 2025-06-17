/*
BMI Calculator Challenge
Create a BMI calculator using JavaScript functions. 

The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

You can calculate it using the formula, weight(kg) divided by height squared(m^2).

Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. 
The output should be rounded to the nearest whole number.

The first parameter should be the weight and the second should be the height.

If my weight is 60kg and my height is 1.6m, I should be able to call your function like this:

var bmi = bmiCalculator(60, 1.6); 

bmi should equal 23 when it's rounded to the nearest whole number.

*****NOTE*******
****For exponents you can use Math.pow(base, exponent)
****Math.round(number) rounds to the nearets whole number
*/

function bmiCalculator(weight, height){
    var bmi = Math.round(weight/Math.pow(height, 2));
    
    return bmi
}

var bmi = bmiCalculator(60, 1.6);
console.log(bmi)


/* BMI CALCULATOR PART 2*/