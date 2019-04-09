
var stars=[];//array of stars
var countStar=1000;//number of stars

function setup(){
    createCanvas(400,500); 

    for (var i = 0; i < 800; i++) {
        stars[i]=new Star();//define stars
        
    }
}

function draw(){
   background(42,52,88);//background(red,green,blue);
   translate(width/2,height/2);//set center points
   for (let i = 0; i < stars.length; i++) {
       stars[i].updateLocation();
       stars[i].createStar();
       
   }
}

//star object
function Star(){
    this.x=random(-width,width);//random value between -width and width
    this.y=random(-height,height);//random value between -height and height
    this.z=random(width);//random up to width

    this.updateLocation=function(){
        this.z=this.z-1;//set new z-location 

        if(this.z<1){
            this.z=width;
        }
    }

    this.createStar=function(){
        fill (126,214,223);
        noStroke ();
        //Re-scale x and y
        var sx=map(this.x/this.z,0,1,0,width);
        var sy=map(this.y/this.z,0,1,0,height);
        ellipse(sx,sy,8,8);//ellipse(locationX,locationY,sizeX,sizeY);
    }
}

