/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here

setup(); 

function setup() {
    console.log(document); 

    // Get the <h1> element with id "main-heading" and store it in a variable 
    let mainHeading = document.getElementById(`main-heading`); 

    // Set its color property 
    mainHeading.style[`color`] = `#339966`; 
    mainHeading.style[`font-size`] = `5rem`; 
    mainHeading.style[`font-family`] = `Helvetica, sans-serif`; 
    mainHeading.style[`background-color`] = `#000000`; 

    let pronoun = document.getElementById(`pronoun`); 
    // pronoun.innerText = `you`; 
    // if (pronoun.innerText === `we`) {
    //     pronoun.innerText = `you`; 
    // }
    pronoun.innerHTML = "<strong>you<strong>"

    // setting an attribute 
    let image = document.getElementById(`clown-image`); 
    // image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`); 
    // OR 
    let src = image.getAttribute(`src`); 
    if (src.includes(`clown`)) {
        image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);
    }

    // More selection methods 
    // Get all elements with class "header" on the page 
    let headers = document.getElementByClassName(`header`);
    // Loop through all the elements returned 
    for (let i = 0; i < headers.length; i++) {
        //set the color style property to red for each one 
        headers[i],style.color = `#ff0000`; 
    } 



}