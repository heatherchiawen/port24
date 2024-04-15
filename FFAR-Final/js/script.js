/**
 * FFAR - Final, 吃饱了, chī bǎole
 * Heather Chester 
 * 
 * Archive of family recipes for FFAR 250 final project at Concordia Univeristy. 
 * 
 */

"use strict";

/**
 * Description of preload
*/

// Sweet recipes 
let bananaOne, bananaTwo, jamOne, jamTwo, chester; 

// Savory recipes 
let jerky, teaEgg, mapoTofu, sanBeiJi; 

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
    mapoTofu = loadImage(`assets/images/mapoTofu.png`); 
    sanBeiJi = loadImage(`assets/images/sanBeiJi.png`); 
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
    strokeWeight(2); 
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
    // Title text display 
    push();
    fill(0); 
    textSize(32); 
    textAlign(CENTER, CENTER); 
    textStyle(BOLDITALIC); 
    text(`吃饱了, chī bǎole, i am full: an archive of family recipes`, width/2, 100);  

    // Subtext display 
    textSize(14); 
    text(`click side images side for recipes and middle for dedications\n-Heather Chester`, width/2, 150);  
    pop();

    // Cake photo 
    if (mouseX > width/2 - 600 && mouseX < width/2 - 150 && mouseY > height/2 && mouseY < height/2 + 250)  {
        push(); 
        tint(166, 134, 146);
        image(cakePhoto, width/2 - 600, height/2, 350, 250);
        pop(); 
    }
    else {
        noTint(); 
        image(cakePhoto, width/2 - 600, height/2, 350, 250);
    }  

    // Shrine photo display 
    if (mouseX > width/2 - 187.5 && mouseX < width/2 + 187.5 && mouseY > height/2 - 150 && mouseY < height/2 + 370) {
        tint(122, 94, 21);
        image(shrinePhoto, width/2 - 187.5, height/2 - 150, 375, 520);
        fill(255);
        textSize(18); 
        text(`This digital archive is dedicated\n\nto my family.\n\n\nThank you for feeding me\n\nand teaching me the joy of eating.`, width/2 - 182, height/2 + 45);  
    }
    else {
        noTint(); 
        image(shrinePhoto, width/2 - 187.5, height/2 - 150, 375, 520);
    }  

    // Family photo display 
    if (mouseX > width/2 + 250 && mouseX < width/2 + 600 && mouseY > height/2 && mouseY < height/2 + 250) {
        tint(132, 138, 163); 
        image(familyPhoto, width/2 + 250, height/2, 350, 250);
    }
    else {
        noTint();
        image(familyPhoto, width/2 + 250, height/2, 350, 250);
    }
}

function dessertSection() {
    // Title text display 
    push();
    fill(0); 
    textSize(64); 
    text(`sweet`, 20, 125); 

    // Subtext display  
    textSize(14);
    text(`hover image to expand view\nclick to see back\n\n\non this page top to bottom:\n\n\nbanana bread\n\nchester cookies\n\njam drop cookies`, 40, 160);

    // Homing button 
    strokeJoin(ROUND); 
    line(30, 50, 45, 50); // bottom 
    line(30, 50, 30, 40); // left eide 
    line(30, 40, 37.5, 35); // left slant
    line(37.5, 35, 45, 40); // right slant
    line(45, 40, 45, 50); // right side
    text(`home`, 55, 50);  
    pop();

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
    fill(0); 
    textSize(64); 
    text(`savoury`, 20, 125);  
    textSize(14);
    text(`hover image to expand view\n\n\non this page left to right:\n\n\nsan bei ji\n\nmapo Tofu\n\njerky\n\ntea eggs`, 40, 160); 

    // Homing button 
    strokeJoin(ROUND); 
    line(30, 50, 45, 50); // bottom 
    line(30, 50, 30, 40); // left eide 
    line(30, 40, 37.5, 35); // left slant
    line(37.5, 35, 45, 40); // right slant
    line(45, 40, 45, 50); // right side 
    text(`home`, 55, 50); 
    pop();

    // Savory image display 
    noTint(); 
    image(jerky, width/2 - 50, height/2 + 125, 400, 200);  
    image(teaEgg, width/2 + 375, height/2 + 125, 300, 200);
    image(mapoTofu, width/2 - 400, height/2 + 125, 300, 200); 
    image(sanBeiJi, width/2 - 700, height/2 + 125, 300, 200); 

    // Jerky check 
    if (mouseX > width/2 - 50 && mouseX < width/2 + 350 && mouseY > height/2 + 125 && mouseY < height/2 + 325)  {
        image(jerky, width/2 - 400, 50, 800, 400);  

        tint(213, 216, 230);
        image(jerky, width/2 - 50, height/2 + 125, 400, 200);  
    } 
    // teaEgg check 
    if (mouseX > width/2 + 375 && mouseX < width/2 + 675 && mouseY > height/2 + 125 && mouseY < height/2 + 325) {
        image(teaEgg, width/2 - 300, 50, 600, 400);

        tint(213, 216, 230); 
        image(teaEgg, width/2 + 375, height/2 + 125, 300, 200);
    }
    // mapoTofu check 
    if (mouseX > width/2 - 400 && mouseX < width/2 - 400 + 300 && mouseY > height/2 + 125 && mouseY < height/2 + 325) {
        image(mapoTofu, width/2 - 300, 50, 600, 400);

        tint(213, 216, 230); 
        image(mapoTofu, width/2 - 400, height/2 + 125, 300, 200); 
    }
    // SanBeiJi check 
    if (mouseX > width/2 - 700 && mouseX < width/2 - 400 && mouseY > height/2 + 125 && mouseY < height/2 + 325) {
        image(sanBeiJi, width/2 - 300, 50, 600, 400); 

        tint(213, 216, 230);
        image(sanBeiJi, width/2 - 700, height/2 + 125, 300, 200); 
    }
}

function mousePressed() {
    // Check for if images in displayPhotos if pressed 
    // cakePhoto
    if (mouseX > width/2 - 600 && mouseX < width/2 - 150 && mouseY > height/2 && mouseY < height/2 + 250)  {
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