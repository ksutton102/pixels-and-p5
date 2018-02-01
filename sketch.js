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
           
           
          if(keyIsPressed){
              if(key=="1"){
                 me_filter(startingIndex, r, a); 
              }
              
              if(key=="2"){
                 myself_filter(startingIndex, g, a); 
              }
              
              if(key=="3"){
                 andI_filter(startingIndex, r, b, g, a); 
              }
              
              if(key=="4"){
                 love_filter(startingIndex, r, b, g, a); 
              }
              
               if(key=="5"){
                 cool_filter(startingIndex, r, b, g, a); 
              }
              
              if(key=="6"){
                 awesome_filter(startingIndex, r, b, g, a); 
              }
              
              if(key=="7"){
                 tired_filter(startingIndex, r, b, g, a, col, row); 
              }
          }
          
        }
    }
    
    
    
    updatePixels();
}

function me_filter(startingIndex, r, a){
    pixels[startingIndex + 0] = r; //red
    pixels[startingIndex + 1] = r; //green
    pixels[startingIndex + 2] = r; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}


function myself_filter(startingIndex, g, a){
    pixels[startingIndex] = 0; //red
    pixels[startingIndex + 1] = g; //green
    pixels[startingIndex + 2] = 0; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}

function andI_filter(startingIndex, r, b, g, a){
    pixels[startingIndex] = r; //red
    pixels[startingIndex + 1] = b; //green
    pixels[startingIndex + 2] = g; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}

function love_filter(startingIndex, r, b, g, a){
    pixels[startingIndex] = r/2; //red
    pixels[startingIndex + 1] = g/2; //green
    pixels[startingIndex + 2] = b/2; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}

function cool_filter(startingIndex, r, b, g, a){
    pixels[startingIndex] = r*2; //red
    pixels[startingIndex + 1] = b*2; //green
    pixels[startingIndex + 2] = g*2; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}

function awesome_filter(startingIndex, r, b, g, a){
    pixels[startingIndex] = 255 - r; //red
    pixels[startingIndex + 1] = 255 - b; //green
    pixels[startingIndex + 2] = 255 - g; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}

function tired_filter(startingIndex, r, b, g, a, col, row){
    pixels[startingIndex] = r + col -200; //red
    pixels[startingIndex + 1] = b - row + 10; //green
    pixels[startingIndex + 2] = g - 20; //blue
    pixels[startingIndex + 3] = a; //transparent(alpha)
}