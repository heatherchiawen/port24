/**
 * FFAR - Final, TBA 
 * Heather Chester 
 * 
 * Summary 
 * 
 * Have the main page display family photos with a header 
 * when the mouse is hovering the photo becomes tinted (and maybe descriptions for the reicipes appear?)
 * when the user clicks the image, a new state appears (recipes) and the images of recipes appear, with titles 
 * 
 * For paper: 
 * Mention the limitations of the libraries I'm using 
 * As an artist, updating the pogram and altering the code is part of my intent of continuing to work 
 * As coding is an ever evolivng art form, and I am barely a complete newbie.... 
 * 
 * 
 */

"use strict";

/**
 * Description of preload
*/

// Recipes 
let bananaOne, bananaTwo, jamOne, jamTwo, chester, jerky; 

// Photos for initial display 
let cakePhoto, familyPhoto, shrinePhoto; 

// let state = `title`; 

function preload() {
    // Loading recipes 
    bananaOne = loadImage(`assets/images/banana1.png`); 
    bananaTwo = loadImage(`assets/images/banana2.png`); 
    jamOne = loadImage(`assets/images/jam1.png`);
    jamTwo = loadImage(`assets/images/jam2.png`);  
    chester = loadImage(`assets/images/chester.png`); 
    jerky = loadImage(`assets/images/jerky.png`); 

    // Loading photos for initial display 
    cakePhoto = loadImage(`assets/images/cake.png`); 
    familyPhoto = loadImage(`assets/images/family.png`); 
    shrinePhoto = loadImage(`assets/images/shrine.png`); 
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); 

}


/**
 * Description of draw()
*/
function draw() {
    background(255); 

    title(); 
    // if (state === `title`) {
    //     title(); 
    // }
    // else if (state === `simulation`) {
    //     simulation(); 
    // }
}

function title() {
    push();
    textSize(64); 
    fill(0); 
    textAlign(CENTER, CENTER); 
    text(`HI`, width/2, height/2);  
    pop(); 

    // photoDisplay(); 

    // image(cakePhoto, x, y, w, h);  
    // image(familyPhoto, x, y, w, h);  
    // image(shrinePhoto, x, y, w, h);  
}

function simulation() {
    // recipeDisplay(); 

    // image(bananaOne, x, y, w, h); 
    // image(bananaTwo, x, y, w, h); 
    // image(jamOne, x, y, w, h); 
    // image(jamTwo, x, y, w, h); 
    // image(chester, x, y, w, h);
    // image(jerky, x, y, w, h);  
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`; 
    }
}