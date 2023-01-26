//buttoni
let btn = document.getElementById("btn");

//shfaqja e rezultatit
let bmiresult = document.getElementById("bmiresult")


//do perdoret per stilizimin e tekstit
let bmi = document.getElementById("BMI");

function kalkulimiiBMI(){
    //formlua per kalkulimin e BMI (Body mass index)
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;
    const bmiValue = weightValue / (heightValue * heightValue);
    let n = bmiValue.toFixed(2); //Metoda Math e cila pas pikes dhjetore shfaq vetem dy numra

    bmiresult.innerText = "Your BMI is : " + n;   // shfaqja e rezultatit bmi


    //kushtezimi i cili shfaq rangun e BMI (body mass index) dhe ne baz te tij merr ngjyren edhe teksi nga ngjyra me te lehta
    //tek ngjyra me te ndezura

    if(bmiValue<16){
        bmi.style.color = "lightblue"
        bmi.innerText = "UnderWeight"
    } 
    else if(bmiValue>18.5 && bmiValue<24.9){
        bmi.style.color = "lightgreen"
        bmi.innerText = "Normal weight"
    } 
    
    else if(bmiValue>25 && bmiValue<29.99){
        bmi.innerText = "Increased"
        bmi.style.color = "darkgreen"
    }
    
    
    else if(bmiValue>30 && bmiValue<34.9){
        bmi.style.color = "orange"
        bmi.innerText = "Overweight";
    } 
    
    else if (bmiValue>35){
        bmi.style.color = "red"
        bmi.innerText = "Obese";
    }

}


btn.addEventListener("click", kalkulimiiBMI); //ne rast klikimit te buttonit ekzekutohet funksioni me lart
