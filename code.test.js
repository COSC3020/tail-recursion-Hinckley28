const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    if (n == 0) {
      return 0;
    }
    if (n == 1) {
      return 1;
    }
    return fibTest(n - 1) + fibTest(n - 2);
}

const test =
    jsc.forall(jsc.integer(1, 40), function(n) {
        return JSON.stringify(tail(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);
console.log('tests passed');