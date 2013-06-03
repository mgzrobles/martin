
var Spark = function() {
  var self = this;
  this.b = 'http://rendergraf.org/index_archivos/';
  this.s = ['spark.png', 'spark2.png', 'spark3.png', 'spark4.png'];
  this.i = this.s[this.random(this.s.length)];
  this.f = this.b + this.i; 
  this.n = document.createElement('img');  
          
  this.newSpeed().newPoint().display().newPoint().fly();
};

Spark.prototype.display = function() {
  $(this.n)
   .attr('src', this.f)
   .css('position', 'absolute')
   .css('z-index', this.random(20))
   .css('top', this.pointY)
   .css('left', this.pointX);
                
  $(document.body).append(this.n);
  
  return this;
};

Spark.prototype.fly = function() {
  var self = this;
  $(this.n).animate({
      "top": this.pointY,
      "left": this.pointX,
  }, this.speed, 'linear', function(){
    self.newSpeed().newPoint().fly();  
  });
};

Spark.prototype.newSpeed = function() {
  this.speed = (this.random(10) + 5) * 1100;
  
  return this;
};

Spark.prototype.newPoint = function() {
  this.pointX = this.random(window.innerWidth - 100);
  this.pointY = this.random(350);
        
  return this;
};

Spark.prototype.random = function(max) {
  return Math.ceil(Math.random() * max) - 1;
}

$(function(){
  // Sparks
  var totalSparks = 40;
  var sparks = [];
  
  for (i = 0; i < totalSparks; i++){  
    sparks[i] = new Spark();
  }
});

