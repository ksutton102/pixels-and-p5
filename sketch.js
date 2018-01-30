var kpopUpload;

function preload(){
    kpopUpload = loadImage("kpop.jpg");
}

function setup(){
    createCanvas(kpopUpload.width,kpopUpload.height);
    
}

function draw(){
    background(0);
    image(kpopUpload, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
           var startingIndex = (col + row * width)*4;
           
           var r = pixels[startingIndex + 0];
           var g = pixels[startingIndex + 1];
           var b = pixels[startingIndex + 2];
           var a = pixels[startingIndex + 3];
           
          pixels[startingIndex] = r+50; //red
          pixels[startingIndex + 1] = g+50; //green
          pixels[startingIndex + 2] = b+50; //blue
          pixels[startingIndex + 3] = a; //transparent(alpha)
        }
    }
    
    
    
    updatePixels();
}