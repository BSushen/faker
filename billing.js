// const request = require('request');
const faker = require('faker');
const axios = require('axios');

for (let i=0; i < 5; i++) {
    let newEmpObj = {
        product_name: faker.lorem.word(),
        mobile_number: faker.phone.phoneNumber(),
        customer_name: faker.name.firstName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        status: faker.name.title(),
        generate_bill_date: faker.date.past(1),
        due_bill_date: faker.date.past(1),
        total_amount: faker.random.number({min:1, max:4})
    };

    axios.post("http://localhost:3000/api/bills",newEmpObj)
    .then((res)=>{
        console.log("Job data  created successfully.", res)
    })
    .catch((err)=>{
        console.log(err);
        process.exit(-1);
    })
}