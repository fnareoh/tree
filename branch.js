var period = 20;

function Branch(begin, end, level){
  this.begin = begin;
  this.end = end;
  this.level = level;

  this.show = function(t) {
    stroke(255);
    if (t > period*level){
      direction = createVector(this.begin.x +(this.end.x - this.begin.x)*min(1,t/period-level),this.begin.y +(this.end.y - this.begin.y)*min(1,t/period-level));
      line(this.begin.x, this.begin.y, direction.x, direction.y);
    }
  }
}

function Leaf(center, level, angle, rand){
  this.center = center;
  this.diam = 8;
  this.level = level;
  this.color = color(rand[0]+0.5*angle, rand[1]+0.5*angle, rand[2]+0.5*angle, 100);

  this.is_selected = function() {
    d = dist(mouseX, mouseY, this.center.x, this.center.y);
    return (d < this.diam);
  }

  this.show = function(t) {
    fill(this.color);
    noStroke();
    if (t > period*level){
      ellipse(this.center.x, this.center.y, 8*min(1,t/period-level), 8*min(1,t/period-level));
    }
  }
}
