/// Rubix Cube


int dim = 3;

Box [][][] cube = new Box[dim][dim][dim];

void setup (){
 size (400,400, P3D); 
 for (int i = 0; i < dim; i++){
   for (int j = 0; j < dim; j++){
     for (int k = 0; k < dim; k++){
 
       cube[i][j][k] = new Box(__, __, __, __);
 
     } 
   } 
 }
}

void draw() {
  
}

/// Box


class Box {
 PVector pos;
 float len;
  
 Box(float x, float y, float z, float len_){
 pos = new PVector(x, y, z);
 len = len_;
 
 }
 
 void show(){
 fill(255);
 stroke(0);
 strokeWeight(8);
 pushMatrix();
 translate(pos.x, pos.y, pos.z);
 box(len);
 
 popMatrix();
 }
 
}