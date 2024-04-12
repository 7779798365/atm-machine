#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 90000; // Dollar

let myPin = 2037;

let pinAnswer = await inquirer.prompt(
    [
        {
          name: "pin",
          message: "enter your pin",
          type: "number"
       }
    ]
);

if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");
    
 let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type: "list",
                choices: ["withdraw" , "check balance" , "fast cash"]
            }
        ]
    );
    
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
         let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"enter your amount",
                    type: "number" 
                }  
             ]
         );
       // =, -=, +=  
       myBalance -= amountAns.amount;


       console.log("your remaining balance is: " + myBalance)
    
}else if (operationAns.operation === "check balance"){
    console.log("your balance is:" + myBalance)

}else if (operationAns.operation === "fast cash"){
    let cashAmount = await inquirer.prompt({
       name: "cash",
       message: "choose your amount",
       type: "rawlist",
       choices: ["1000", "2000" , "5000" , "10000" , "25000" , "50000" , "75000" , "90000"] 
    })
     myBalance -= cashAmount.cash;
     console.log("your remaining balance is:" + myBalance)

}

}else {
    console.log("Incorrect pin number");
}