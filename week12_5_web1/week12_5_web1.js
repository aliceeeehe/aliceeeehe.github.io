
function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xCB, 0xA0, 0xF0));
    fill(color(0xAB, 0x4C, 0xFA));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 150, 2);
    if (choice == 4)
        rect(50, 250, 150, 2);
    text("中餐吃泡麵", 50, 50);
    text("中餐吃Uber Eats", 50, 100);
    text("中餐吃foodpanda", 50, 150);
    text("中餐吃牛排",50,200);
    text("中餐吃大餐",50,250);
}

function mousePressed() {
    choice = int(random(5));
}

function initializeFields() {
    choice = -1;
}
