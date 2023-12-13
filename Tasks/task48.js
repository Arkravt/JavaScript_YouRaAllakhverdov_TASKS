'use strict'

const jackObject = {
   firstName: 'Jack',
   lastName: 'White',
   weight: 79,
   height: 1.70,
   getBMI: function () {
      this.bmi = this.weight / (this.height * this.height);
      this.info = `${this.firstName} ${this.lastName} BMI (${this.bmi})`;
      return this.bmi;
   }
}

const mikeObject = {
   firstName: 'Mike ',
   lastName: 'Black',
   weight: 91,
   height: 1.93,
   getBMI: function () {
      this.bmi = this.weight / (this.height * this.height);
      this.info = `${this.firstName} ${this.lastName} BMI (${this.bmi})`;
      return this.bmi;
   }
}

const jackBmi = jackObject.getBMI();
const mikeBmi = mikeObject.getBMI();

if (jackBmi > mikeBmi)
   console.log(`${jackObject.info} is higher than ${mikeObject.info}`);
else if (mikeBmi > jackBmi)
   console.log(`${mikeObject.info} is higher than ${jackObject.info}`);
else
   console.log('They have same BMI');
