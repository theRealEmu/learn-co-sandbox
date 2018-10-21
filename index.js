console.log("index.js is online :");

function innerScope(){
  var innerSecret = "I am the innerSecret Variable";
  return outerSecret;
}

function outerScope(fu) {
  var outerSecret = "I'm the outer Secret closure variable";
  return fu;
}

//Doen't work
//var letMeSee = outerScope(innerScope());




function outerScope2() {
  var outerVar = "outerVar";
  return function innerScope() {
    var innerVar = "innerVar";
    console.log(outerVar);
    return outerVar;
  }
}

var letMeSee = outerScope2()
let sth = letMeSee();

console.log("sth: " + sth);

