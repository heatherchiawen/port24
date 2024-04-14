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
let cakePhoto, familyPhoto, shrinePhoto; 

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

    // simulation(); 
    title(); 
}

function title() {
    push();
    textSize(64); 
    fill(0); 
    textAlign(CENTER, CENTER); 
    text(`吃饱了, Chī bǎole, I am full`, width/2, 100);  
    // add descriptive subtext (MAYBE WITHIN THE SHRINE IMAGE???)
    // ADD FONT 
    pop();

    photoDisplay(); 
    // add check that would lead to sweet or savoury display 
    
    // dessertSection();
    // savorySection(); 
}

function photoDisplay() {
    // Cake photo 
    if (mouseX > width/2 - 500 && mouseX < width/2 - 500 + 350 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(214, 157, 0); 
        image(cakePhoto, width/2 - 500, height/2, 350, 250);
    }
    else {
        noTint(); 
        image(cakePhoto, width/2 - 500, height/2, 350, 250);
    }  

    // Shrine photo display 
    if (mouseX > width/2 - 100 && mouseX < width/2 - 100 + 250 && mouseY > height/2 - 50 && mouseY < height/2 - 50 + 350) {
        tint(214, 157, 0);
        image(shrinePhoto, width/2 - 100, height/2 - 50, 250, 350); 
    }
    else {
        noTint(); 
        image(shrinePhoto, width/2 - 100, height/2 - 50, 250, 350);
    }  

    // Family photo display 
    if (mouseX > width/2 + 200 && mouseX < width/2 + 200 + 350 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(214, 157, 0);
        image(familyPhoto, width/2 + 200, height/2, 350, 250);
    }
    else {
        noTint();
        image(familyPhoto, width/2 + 200, height/2, 350, 250);
    }
}

function dessertSection() {
    // Banana check 
    if (mouseX > width/2 - 450 && mouseX < width/2 - 450 + 300 && mouseY > height/2 - 100 && mouseY < height/2 - 100 + 375) {
        image(bananaTwo, width/2 - 450, height/2 - 100, 300, 375);
    } else {
        image(bananaOne, width/2 - 450, height/2 - 100, 300, 375); 
    }

    // chester cookies 
    image(chester, width/2 - 150, height/2 - 100, 300, 375);

    // Jam check 
    if (mouseX > width/2 + 150 && mouseX < width/2 + 150 + 300 && mouseY > height/2 - 100 && mouseY < height/2 - 100 + 375) {
        image(jamTwo, width/2 + 150, height/2 - 100, 300, 375); 
    }
    else {
        image(jamOne, width/2 + 150, height/2 - 100, 300, 375); 
    }
}

function savorySection() {
    image(jerky, width/2 - 200, height/2 - 100, 400, 200);  
}
// function mousePressed() {
// }