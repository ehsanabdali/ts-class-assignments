#! /usr/bin/env node
/*------------------------------------------------------------------------------------
Program: calculator.ts
Function: Get three inputs 1. First Number 2. Second Number 3. Operator and 
shows operation on the number na prompts for continue or not
-------------------------------------------------------------------------------------*/

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import {Sum, Sub, Multiply, Division} from "./operations.js";
// Calculator Obj defined
const CalCulator= async()=>{
   console.log(figlet.textSync("( Calculator )"));
   console.log("       ",chalk.yellow.underline("Programmed By: Ehsan"),"      ",chalk.yellowBright.underline("PIAIC59754/Q1"));
   console.log("");
 const input = await inquirer.prompt([  // get Num1, Num2 and operations
 {
    type: "number",
    name: "num1",
    message: "Enter First Number: "
 },
 {
    type: "number",
    name: "num2",
    message: "Enter Second Number: "
 },
 {
    type: "list",
    name: "operations",
    message: "Select Your Operations: ",
    choices: ["+","-","*","/"]
 },
 ])
// operations checked and performed accordingly
 if(input.operations==='+'){
    const result = Sum(input.num1,input.num2);
    console.log(chalk.bgGreen.bold(`Result: ${result}`));
 } else if(input.operations==='-'){
    const result = Sub(input.num1,input.num2);
    console.log(chalk.bgGreen(`Result: ${result}`));
 }else if(input.operations==='*'){
    const result = Multiply(input.num1,input.num2);
    console.log(chalk.bgGreen(`Result: ${result}`));
 }else if(input.operations==='/'){
    const result = Division(input.num1,input.num2);
    console.log(chalk.bgGreen(`Result: ${result}`));
 }else {
    console.log("Invalid Operation...");
 }

 };

// Loop for confirmation till press n
let Prog ={
   control: 'Y'
};
while(Prog.control === 'Y' || Prog.control == 'y'){ await CalCulator();
Prog = await inquirer.prompt( 
   [ 
      { name: "control", 
      message: "More Calculations: (y/n): " 
   } 
] 
);
};

