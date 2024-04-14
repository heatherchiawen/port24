/**
 * FFAR - Final, TBA 
 * Heather Chester 
 * 
 * Summary 
 * (and maybe descriptions for the reicipes appear?)
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

let state = `photoDisplay`; 

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

    // Non-image settings 
    textSize(32); 
    fill(0); 
    textFont(`Courier New`); 
    strokeWeight(3); 
}


/**
 * Description of draw()
*/
function draw() {
    background(255); 

    if (state === `photoDisplay`) {
        photoDisplay();
    }
    else if (state === `dessertSection`) {
        dessertSection(); 
    }
    else if (state === `savorySection`) {
        savorySection(); 
    }

}

function photoDisplay() {
    // Text display 
    push();
    textAlign(CENTER, CENTER); 
    text(`吃饱了, Chī bǎole, I am full`, width/2, 200);  
    textSize(14) 
    text(`Heather Chester`, width/2, 250);  
    // add descriptive subtext (MAYBE WITHIN THE SHRINE IMAGE???)
    pop();

    // Cake photo 
    if (mouseX > width/2 - 500 && mouseX < width/2 - 500 + 350 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(237, 213, 147);
        image(cakePhoto, width/2 - 500, height/2, 350, 250);
    }
    else {
        noTint(); 
        image(cakePhoto, width/2 - 500, height/2, 350, 250);
    }  

    // Shrine photo display 
    if (mouseX > width/2 - 100 && mouseX < width/2 - 100 + 250 && mouseY > height/2 - 50 && mouseY < height/2 - 50 + 350) {
        tint(237, 213, 147);
        image(shrinePhoto, width/2 - 100, height/2 - 50, 250, 350); 
    }
    else {
        noTint(); 
        image(shrinePhoto, width/2 - 100, height/2 - 50, 250, 350);
    }  

    // Family photo display 
    if (mouseX > width/2 + 200 && mouseX < width/2 + 200 + 350 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(237, 213, 147);
        image(familyPhoto, width/2 + 200, height/2, 350, 250);
    }
    else {
        noTint();
        image(familyPhoto, width/2 + 200, height/2, 350, 250);
    }
}

function dessertSection() {
    // Text display 
    push();
    textAlign(CENTER, CENTER); 
    text(`吃饱了, Chī bǎole, I am full`, width/2, 200);  
    // add descriptive subtext (MAYBE WITHIN THE SHRINE IMAGE???) 
    pop();

    // Homing button 
    strokeJoin(ROUND); 
    line(30, 50, 45, 50); // bottom 
    line(30, 50, 30, 40); // left eide 
    line(30, 40, 37.5, 35); // left slant
    line(37.5, 35, 45, 40); // right slant
    line(45, 40, 45, 50); // right side 

    // Banana check 
    if (mouseX > width/2 - 450 && mouseX < width/2 - 450 + 300 && mouseY > height/2 - 100 && mouseY < height/2 - 100 + 375) {
        image(bananaTwo, width/2 - 450, height/2 - 100, 300, 375);
    } else {
        image(bananaOne, width/2 - 450, height/2 - 100, 300, 375); 
    }
    // HAVE MOUSEISPRESSED RESIZED OPTION?? 

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
    // Homing button 
    strokeJoin(ROUND); 
    line(30, 50, 45, 50); // bottom 
    line(30, 50, 30, 40); // left eide 
    line(30, 40, 37.5, 35); // left slant
    line(37.5, 35, 45, 40); // right slant
    line(45, 40, 45, 50); // right side 

    // Jerky check 
    if (mouseX > width/2 - 200 && mouseX < width/2 - 200 + 400 && mouseY > height/2 - 100 && mouseY < height/2 - 100 + 200) {
        tint(237, 213, 147);
        image(jerky, width/2 - 200, height/2 - 100, 400, 200);  
    }
    else {
        noTint(); 
        image(jerky, width/2 - 200, height/2 - 100, 400, 200);  
    }
}

function mousePressed() {
    if (state === `photoDisplay` && mouseX > width/2 - 500 && mouseX < width/2 - 500 + 350 && mouseY > height/2 && mouseY < height/2 + 250) {
        state = `dessertSection`; 
    } 
    else if (state === `photoDisplay` && mouseX > width/2 + 200 && mouseX < width/2 + 200 + 350 && mouseY > height/2 && mouseY < height/2 + 250) {
        state = `savorySection`; 
    }

    // Check for homing button 
    if (state === `dessertSection` && mouseX > 30 && mouseX < 45 && mouseY > 35 && mouseY < 50) {   // || state === `savorySection`
        state = `photoDisplay`; 
    }
    else if (state === `savorySection` && mouseX > 30 && mouseX < 45 && mouseY > 35 && mouseY < 50) {
        state = `photoDisplay`; 
    }
}