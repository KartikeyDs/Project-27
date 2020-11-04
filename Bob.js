class Bob{
constructor(x,y,r){

var options = {
isStatic:false,
'restitution':1,
'friction':0,
'density':20
}



this.x = x;
this.y = y;
this.r = r;


this.body =  Bodies.circle(x,y,this.r/2,options);
World.add(world, this.body)
}
display() {
var pos = this.body.position;
push()
translate(pos.x,pos.y)

fill(255,0,255);
ellipseMode(CENTER)
ellipse(0,0,this.r);
pop();
}
};