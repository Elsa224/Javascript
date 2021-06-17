function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  /**
   * BMI Calculator
   */

function bmiCalculator (weight, height) 
{
    let interpretation, bmi;
    bmi = weight/(Math.pow(height, 2));
    bmi = Math.floor(bmi);
    if (bmi < 18.5)
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    else
    {
        if (bmi >= 18.5 && bmi <= 24.9)
            interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
        else
            interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

bmiCalculator(60, 2);