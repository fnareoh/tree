var t = 0;
var branch_list = [];
var leaf_list = [];
var tf;
var nb_leaf = 0;

function setup() {
  createCanvas(700,500);
  for (var i = 200; i < 600; i=i+100) {
    nb_leaf = 0;
    tf = new Transformer();
    tf.translate(i,height);
    const r = Math.random(0.5);
    const rand =  [Math.random()*255,Math.random()*255,Math.random()*255]
    print(rand)
    tree(50+r*100,0, rand);
  }
}

function draw() {
  t = t+1;
  background(51);
  stroke(255);
  line(0,500,450,500-1);
  line(450,500-1,700,500);
  for (var i = 0; i < branch_list.length; i++) {
    branch_list[i].show(t);
  }
  for (var i = 0; i < leaf_list.length; i++) {
    leaf_list[i].show(t);
  }
}

function mousePressed() {
  i = 0;
  found = false;
  c = color(255, 255, 355);
  while (!found && i < leaf_list.length) {
    i++;
    if (leaf_list[i].is_selected()){
      c = leaf_list[i].color;
      found = true;
    }
  }
  print(c)
}

function tree(len, level, rand){
  const r = Math.random(0.5);
  const angle = PI/8 + 0.5*r*PI/8;
  a = createVector(tf.x,tf.y);
  tf.translate(0,-len);
  b = createVector(tf.x,tf.y);
  var br = new Branch(a, b, level);
  branch_list = branch_list.concat([br]);
  if (level < 8){
    tf.rotate(angle);
    tree(len*0.65, level+1, rand);
    tf.rotate(-2*angle);
    tree(len*0.65, level+1, rand);
    tf.rotate(angle);
  }
  else {
    nb_leaf = nb_leaf + 1;
    var lf = new Leaf(b, level+1, nb_leaf, rand);
    leaf_list = leaf_list.concat([lf]);
  }
  tf.translate(0,len);
}
