///import peasy.*;

///PeasyCam cam;

int dim = 3;

final int UPP = 0;
final int DWN = 1;
final int RGT = 2;
final int LFT = 3;
final int FRT = 4;
final int BCK = 5;

// Up (white), Down(Yellow), Right (Red), Left (Orange), Front (Green), Back(Blue)
color[] colors = {
  #FFFFFF, #FFFF00,
  #FF0000, #FFA500,
  #00FF00, #0000FF
};

Cubie [][][] cube = new Cubie[dim][dim][dim];

void setup (){
 size (600,600, P3D); 
 ///cam = new PeasyCam(this, 400);
 for (int i = 0; i < dim; i++){
   for (int j = 0; j < dim; j++){
     for (int k = 0; k < dim; k++){
       float len = 50;
       float offset = (dim - 1) * len * 0.5;
       float x = len * i - offset;
       float y = len * j - offset;
       float z = len * k - offset;
       cube[i][j][k] = new Cubie(x, y, z, len);
     } 
   } 
 }
}

void draw() {
  background(51);
 for (int i = 0; i < dim; i++){
   for (int j = 0; j < dim; j++){
     for (int k = 0; k < dim; k++){
       cube[i][j][k].show();
     } 
   } 
 }
}

/// Cube

class Cubie {
 PVector pos;
 float len;
  
 Cubie(float x, float y, float z, float len_){
 pos = new PVector(x, y, z);
 len = len_;
 
 }
 
 void show(){
 fill(255);
 stroke(0);
 strokeWeight(8);
 pushMatrix();
 translate(pos.x, pos.y, pos.z);
 
 beginShape(QUADS);
 float r = len/2;
 
 /// Fixed Z
 fill(colors[BCK]);
 vertex(-r,-r,-r);
 vertex( r,-r,-r);
 vertex( r, r,-r);
 vertex(-r, r,-r);
fill(colors[LFT]);
 vertex(-r,-r, r);
 vertex( r,-r, r);
 vertex( r, r, r);
 vertex(-r, r, r);
/// Fixed X
fill(colors[RGT]);
 vertex(-r,-r,-r);
 vertex(-r, r,-r);
 vertex(-r, r, r);
 vertex(-r,-r, r);
 fill(colors[RGT]);
 vertex( r,-r,-r);
 vertex( r, r,-r);
 vertex( r, r, r);
 vertex( r,-r, r);
/// Fixed Y
fill(colors[DWN]);
 vertex(-r,-r,-r);
 vertex( r,-r,-r);
 vertex( r,-r, r);
 vertex(-r,-r, r);
 fill(colors[UPP]);
 vertex(-r, r,-r);
 vertex( r, r,-r);
 vertex( r, r, r);
 vertex(-r, r, r);
 
 endShape();
 
 popMatrix();
 }
 
}