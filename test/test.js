let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const config = require('../config');
const app = require('../app')
const routes = require('../routes/routes')
const methods = require('../controllers/methods')


chai.use(chaiHttp);
const url = "localhost:3001";

describe('REST API test' , ()=>{
    it("/getHello -> Gets the Hello World! phrase as a json", (done) =>{
        chai.request(url).get("/getHello").end(function(err, res){
            expect(res).to.be.json
          done();  
          console.log(res.body);
        })
    }),

    it("/getHello/Daniel -> Gets the Hello World! phrase with the name Daniel as a json", (done) =>{
        chai.request(url).get("/getHello/Daniel").end(function(err, res){
            expect(res).to.be.json
          done();  
          console.log(res.body);
        })
    }),

    it("/getStates -> Gets the name of states of Mexico as a json. There are only three states (Ciudad de México, México, Hidalgo). "+
    "This will only work when the data is loaded", (done) =>{
        chai.request(url).get("/getStates").end(function(err, res){
            
            if(expect(res).to.be.json.length > 1)
            {
                expect(res).to.be.json
            }
            else
                expect(res).to.be.html
          done();  
          console.log(res.body);
        })
    }),

    it("/getCP/55600 -> Gets the information about the zip code 55600 as a json. This will only work when the data is loaded", (done) =>{
        chai.request(url).get("/getCP/55600").end(function(err, res){
            if(expect(res).to.be.json.length > 1)
            {
                expect(res).to.be.json
            }
            else
                expect(res).to.be.html
          done();  
          console.log(res.body);
        })
    }),

    it("/getCP/556999 -> Gets an error as a json because the CP size is greater than 5 characters.", (done) =>{
        chai.request(url).get("/getCP/556999").end(function(err, res){
            expect(res).to.be.json
          done();  
          console.log(res.body);
        })
    }),

    it("/getCP/XSsadfs -> Gets error as json because the CP isn't a number", (done) =>{
        chai.request(url).get("/getCP/XSsadfs").end(function(err, res){
            expect(res).to.be.json
          done();  
          console.log(res.body);
        })
    }),

    it("/getCP/01005 -> Gets error as json because the CP doesn't exist", (done) =>{
        chai.request(url).get("/getCP/01005").end(function(err, res){
            expect(res).to.be.json
          done();  
          console.log(res.body);
        })
    })
})