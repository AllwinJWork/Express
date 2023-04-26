const chai = required("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../index");
const { describe } = require("mocha");
const { expect } = require("chai");
const { catModel } = require("../dbexplorer");

// test
describe("API tests"), ()=>{
it ("should create a cat",(done)=>{
chai.request(server).post("/cats/create").send({name:"spidey",colour:"white",evil:false})
.end((err,ress)=>{
chai.expect(err).to.be.null;
chai.expect(res.body).to.include({name:"spidey", colour:"white"});
chai.expect(res.status).to.equal(201);
done();
}

)})
}

describe("oof", function(){
    let testCat;
    this.beforeEach(async()=>{
        await catModel.deleteMany({});
        testCat=await catModel.create({name:"spidey",colour:"white",evil:false})
    })
})