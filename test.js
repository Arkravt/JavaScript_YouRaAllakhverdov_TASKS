'use strict';

const obj = {
   x: 10,
   foo() {


      setTimeout(function () {
         console.log(this.x);
      }, 1000)
   }
};

obj.foo();
