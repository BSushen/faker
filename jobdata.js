
const faker = require('faker');
const axios = require('axios');
//import faker from 'faker';
//import axios from 'axios';

for(i=0; i<10; i++){
    let jobdata = {
        title: faker.lorem.word(),
        location: faker.address.city(),
        experience: faker.random.number({min:2, max:20}),
        postedBy: faker.name.findName(),
        description: faker.name.jobDescriptor(),
        company: faker.company.companyName() 
    }

    axios.post("http://localhost:3000/api/jobs",jobdata)
    .then((res)=>{
        console.log("Job data  created successfully.")
    })
    .catch((err)=>{
        console.log(err);
        process.exit(-1);
    })
}