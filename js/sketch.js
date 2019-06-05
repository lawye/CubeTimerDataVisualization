var f=false;
var big=0;
var ma=250;
c=[];

function setup() {
  createCanvas(1000,600);
  frameRate(60);
}

function draw() {
  background(0);
  for (var i=0;i<c.length;i++){ 
    if(c[i].pi()==false){
      c.shift();
      i--;
      console.log('gun');
    }
  }
}
function mousePressed() {
  f=true;
  c.push(new Circles());
  c[c.length-1].x=mouseX;
  c[c.length-1].y=mouseY;
  var r=random(255);
  var g=random(255);
  var b=random(255);
  if(r+g+b<350){
    r=constrain(random(255), 160, 255);
    g=constrain(random(255), 160, 255);
    b=constrain(random(255), 160, 255);
  }
  c[c.length-1].nc(r,g,b);
  return false;
}

function Circles() {
  this.x = 0;
  this.y = 0;
  this.r = 1;
  this.cr = 255;
  this.cg = 255;
  this.cb = 255;

  this.nc=function(a,b,c) {
    this.cr = a;
    this.cg = b;
    this.cb = c;
  }
  
  this.pi=function() {
    this.r+=3;
    noFill();
    strokeWeight(4);
    stroke(this.cr*(1-this.r/ma),this.cb*(1-this.r/ma),this.cb*(1-this.r/ma));
    //stroke(this.cr,this.cg,this.cb,[this.r/ma]);
    ellipse(this.x, this.y, this.r, this.r);
    if(this.r>ma){
      f=false;
      this.r=0;
      return false;
      } else{
        return true;
      }
  }
}