
function tail(n, a = 0, b = 1) {
  if (n == 0) {
      return a;
  }
  let c = a + b;
  return tail(n - 1, b, c);
}

//n = 7;
//result = tail(n);
//console.log(result);
