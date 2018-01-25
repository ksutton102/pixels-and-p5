function setup(){
    createCanvas(600,400);
    
}

function draw(){
    background(0);
    
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
           var startingIndex = (col + row * width)*4;
           pixels[startingIndex] = 255; //red
           pixels[startingIndex + 1] = 110; //green
           pixels[startingIndex + 2] = 115; //blue
           pixels[startingIndex + 3] = 70; //transparent(alpha)
        }
    }
    
    
    
    updatePixels();
}