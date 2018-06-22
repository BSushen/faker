const request = require('request');
const faker = require('faker');

for (let i=0; i < 5; i++) {
    let newEmpObj = {
        
        empNo: faker.random.alphaNumeric(6),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
    };

    request.post('http://localhost:3000/api/employees', { form: newEmpObj }, function(err, result) {
        if (err) {
            console.log('Error occured in seeding data');
            process.exit(-1);
        }
    });
}