var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30; 

var player_object = "";
var block_image_object = "";

function player_update(){
fabric.Image.fromURL("13453.jpg", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top: player_y,
        left:player_x
    });
    canvas.add(player_object);
})
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("shift key and p pressed together");
block_image_width=block_image_width + 10;
block_image_height=block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("shift key and p pressed together");
block_image_width=block_image_width - 10;
block_image_height=block_image_height - 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }

    if(keyPressed == '70'){
        new_image('ironman_face.png');
        console.log("f");
    }

    if(keyPressed == '66'){
        new_image('spiderman_body.png');
        console.log("b");
    }

    if(keyPressed == '77'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }

    if(keyPressed == '2'){
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
}