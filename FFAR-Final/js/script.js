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

// Sweet recipes 
let bananaOne, bananaTwo, jamOne, jamTwo, chester; 

// Savory recipes 
let jerky, teaEgg; 

// Photos for initial display 
let cakePhoto, familyPhoto, shrinePhoto; 

let state = `photoDisplay`; 

function preload() {
    // Loading sweet recipes 
    bananaOne = loadImage(`assets/images/banana1.png`); 
    bananaTwo = loadImage(`assets/images/banana2.png`); 
    jamOne = loadImage(`assets/images/jam1.png`);
    jamTwo = loadImage(`assets/images/jam2.png`);  
    chester = loadImage(`assets/images/chester.png`); 

    // Loading savory recipes 
    jerky = loadImage(`assets/images/jerky.png`); 
    teaEgg = loadImage(`assets/images/teaEgg.png`); 

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
    textSize(32); 
    textAlign(CENTER, CENTER); 
    text(`吃饱了, Chī bǎole, I am full: an archive for family recipes`, width/2, 75);  
    textSize(14) 
    text(`click images on the side for recipes`, width/2, 110);  
    // add descriptive subtext (MAYBE WITHIN THE SHRINE IMAGE???)
    pop();

    // Cake photo 
    if (mouseX > width/2 - 500 && mouseX < width/2 - 150 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(227, 195, 207);
        image(cakePhoto, width/2 - 600, height/2, 350, 250);
    }
    else {
        noTint(); 
        image(cakePhoto, width/2 - 600, height/2, 350, 250);
    }  

    // Shrine photo display 
    if (mouseX > width/2 - 187.5 && mouseX < width/2 + 187.5 && mouseY > height/2 - 150 && mouseY < height/2 + 370) {
        tint(237, 213, 147);
        image(shrinePhoto, width/2 - 187.5, height/2 - 150, 375, 520); 
    }
    else {
        noTint(); 
        image(shrinePhoto, width/2 - 187.5, height/2 - 150, 375, 520);
    }  

    // Family photo display 
    if (mouseX > width/2 + 250 && mouseX < width/2 + 600 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(195, 201, 230); 
        image(familyPhoto, width/2 + 250, height/2, 350, 250);
    }
    else {
        noTint();
        image(familyPhoto, width/2 + 250, height/2, 350, 250);
    }
}

function dessertSection() {
    // Text display 
    push();
    textSize(64); 
    text(`sweet`, 20, 125);  
    textSize(14);
    text(`hover image to expand view\nclick to see back\n\n\non this page top to bottom:\n\n\nbanana bread\n\nchester cookies\n\njam drop cookies`, 40, 150); 
    pop();

    // Homing button 
    strokeJoin(ROUND); 
    line(30, 50, 45, 50); // bottom 
    line(30, 50, 30, 40); // left eide 
    line(30, 40, 37.5, 35); // left slant
    line(37.5, 35, 45, 40); // right slant
    line(45, 40, 45, 50); // right side
    text(`home`, 55, 50);  

    // Dessert image display 
    noTint(); 
    image(bananaOne, width/5, height/2 - 375, 170, 200);
    image(chester, width/5, height/2 - 150, 170, 200); 
    image(jamOne, width/5, height/2 + 75, 170, 300); 

    // Banana check 
    if (mouseX > width/5 && mouseX < width/5 + 170 && mouseY > height/2 - 375 && mouseY < height/2 - 175) {
        if (mouseIsPressed === true) {
            image(bananaTwo, width/2 - 100, height/2 - 300, 510, 600);
        } else {
            image(bananaOne, width/2 - 100, height/2 - 300, 510, 600);
        }
        tint(227, 195, 207); 
        image(bananaOne, width/5, height/2 - 375, 170, 200);
    } 
    // chester cookies 
    if (mouseX > width/5 && mouseX < width/5 + 170 && mouseY > height/2 - 150 && mouseY < height/2 + 50) {
        image(chester, width/2 - 100, height/2 - 300, 510, 600);
        tint(227, 195, 207);
        image(chester, width/5, height/2 - 150, 170, 200);
    } 
    // Jam check 
    if (mouseX > width/5 && mouseX < width/5 + 170 && mouseY > height/2 + 75 && mouseY < height/2 + 375) {
        if (mouseIsPressed === true) {
            image(jamTwo, width/2 - 100, height/2 - 375, 425, 750); 
        } else {
            image(jamOne, width/2 - 100, height/2 - 375, 425, 750);
        }
        tint(227, 195, 207); 
        image(jamOne, width/5, height/2 + 75, 170, 300); 
    } 
}

function savorySection() {
    // Text display 
    push();
    textSize(64); 
    text(`savory`, 20, 125);  
    textSize(14);
    text(`hover image to expand view\n\n\non this page:\n\n\njerky\n\ntea eggs`, 40, 160); 
    pop();

    // Homing button 
    strokeJoin(ROUND); 
    line(30, 50, 45, 50); // bottom 
    line(30, 50, 30, 40); // left eide 
    line(30, 40, 37.5, 35); // left slant
    line(37.5, 35, 45, 40); // right slant
    line(45, 40, 45, 50); // right side 
    text(`home`, 55, 50); 

    // Savory image display 
    noTint(); 
    image(jerky, width/2 - 200, height/2 + 125, 400, 200);  
    image(teaEgg, width/2 + 250, height/2 + 125, 300, 200);

    // Jerky check 
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 + 100 && mouseY < height/2 + 300)  {
        image(jerky, width/2 - 400, height/2 - 300, 800, 400);  

        tint(213, 216, 230);
        image(jerky, width/2 - 200, height/2 + 125, 400, 200);  
    } 
    // teaEgg check 
    if (mouseX > width/2 + 250 && mouseX < width/2 + 550 && mouseY > height/2 + 125 && mouseY < height/2 + 325) {
        image(teaEgg, width/2 - 300, height/2 - 300, 600, 400);

        tint(213, 216, 230); 
        image(teaEgg, width/2 + 250, height/2 + 125, 300, 200);
    }
}

function mousePressed() {
    // Check for if images in displayPhotos if pressed 
    // cakePhoto
    if (state === `photoDisplay` && mouseX > width/2 - 500 && mouseX < width/2 - 150 && mouseY > height/2 && mouseY < height/2 + 250) {
        state = `dessertSection`; 
    } 
    // familyPhoto 
    else if (state === `photoDisplay` && mouseX > width/2 + 250 && mouseX < width/2 + 600 && mouseY > height/2 && mouseY < height/2 + 250) {
        state = `savorySection`; 
    }

    // Check for homing button 
    if (state === `dessertSection` && mouseX > 30 && mouseX < 45 && mouseY > 35 && mouseY < 50) { 
        state = `photoDisplay`; 
    }
    else if (state === `savorySection` && mouseX > 30 && mouseX < 45 && mouseY > 35 && mouseY < 50) {
        state = `photoDisplay`; 
    }
}