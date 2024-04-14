/**
 * FFAR - Final, TBA 
 * Heather Chester 
 * 
 * Summary 
 * 
 * CREATE A SCROALLABLE PAGE 
 * Have the main page display family photos with a header 
 * when the mouse is hovering the photo becomes tinted (and maybe descriptions for the reicipes appear?)
 * when the user clicks the image, a new state appears (recipes) and the images of recipes appear, with titles 
 * 
 * For paper: 
 * Mention the limitations of the libraries I'm using 
 * As an artist, updating the pogram and altering the code is part of my intent of continuing to work 
 * As coding is an ever evolivng art form, and I am barely a complete newbie.... 
 * I was learning how to code with p5js around gaming but this project was attempt in translating that towrds a web application 
 * 
 */

"use strict";

/**
 * Description of preload
*/

// Recipes 
let bananaOne, bananaTwo, jamOne, jamTwo, chester, jerky; 

// Photos for initial display 
// let cakePhoto, familyPhoto, shrinePhoto; 

// let photoX = width/2; 
// let photoSpacing = 200; 

// let state = `title`; 
// image(cakePhoto, width/2 - 450, height/2, 300, 200);
let cakePhoto = {
    x: 0,
    y: 0, 
    w: 300, 
    h: 200, 
    image: undefined 
}

function preload() {
    // Loading recipes 
    // bananaOne = loadImage(`assets/images/banana1.png`); 
    // bananaTwo = loadImage(`assets/images/banana2.png`); 
    // jamOne = loadImage(`assets/images/jam1.png`);
    // jamTwo = loadImage(`assets/images/jam2.png`);  
    // chester = loadImage(`assets/images/chester.png`); 
    // jerky = loadImage(`assets/images/jerky.png`); 

    // Loading photos for initial display 
    cakePhoto.image = loadImage(`assets/images/cake.png`); 
    // familyPhoto = loadImage(`assets/images/family.png`); 
    // shrinePhoto = loadImage(`assets/images/shrine.png`); 
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    cakePhoto.x = windowWidth/2; 
    cakePhoto.y = windowHeight/2; 

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
    // text(`HI`, width/2, height/2);  
    pop();

    photoDisplay(); 
}

function photoDisplay() {

    // if (mouseOver()) {

    // } else {
        // image(cakePhoto, width/2 - 450, height/2, 300, 200); 
        image(cakePhoto.image, cakePhoto.x, cakePhoto.y, cakePhoto.w, cakePhoto.y);    
    // }

    // image(shrinePhoto, width/2 - 100, height/2 - 50, 200, 300);  
    // image(familyPhoto, width/2 + 150, height/2, 300, 200);
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

// function mousePressed() {
//     if (state === `title`) {
//         state = `simulation`; 
//     }
// }