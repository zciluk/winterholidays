let mongoose = require("mongoose");
let Form = require('../models/formModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');
let should = chai.should();
chai.use(chaiHttp);
// Mocha tests of GET and POST calls

describe('Forms API tests', () => {
    beforeEach((done) => {
        Form.deleteMany({}, (err) => { 
           done();           
        });        
    });
  describe('/GET form', () => {
      it('it should get all the forms', (done) => {
        chai.request(app)
            .get('/form')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
                  res.body.data.length.should.be.eql(0);
              done();
            });
      });
  });
 

  describe('/POST form', () => {
      it('it should not post a form without name field', (done) => {
          let form = {
              surname: "Kowalski",
              email: "kowalski@o2.pl",
              date: "2015-16-15"
          }
        chai.request(app)
            .post('/form')
            .send(form)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('name');
                  res.body.errors.name.should.have.property('kind').eql('required');
              done();
            });
      });
    
    
      it('it should not post a form without surname field', (done) => {
          let form = {
              name: "Jan",
              email: "kowalski@o2.pl",
              date: "2015-16-15"
          }
        chai.request(app)
            .post('/form')
            .send(form)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('surname');
                  res.body.errors.surname.should.have.property('kind').eql('required');
              done();
            });
      }); 
      
      
      it('it should not post a form without email field', (done) => {
          let form = {
              name: "Jan",
              surname: "Kowalski",            
              date: "2015-16-15"
          }
        chai.request(app)
            .post('/form')
            .send(form)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('email');
                  res.body.errors.email.should.have.property('kind').eql('required');
              done();
            });
      }); 
     
      
      it('it should not post a form without date field', (done) => {
          let form = {
              name: "Jan",
              surname: "Kowalski",  
              email: "kowalski@o2.pl"                       
          }
        chai.request(app)
            .post('/form')
            .send(form)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('date');
                  res.body.errors.date.should.have.property('kind').eql('required');
              done();
            });
      });   
    
      it('it should POST a filled form ', (done) => {
          let form= {
              name: "Jan",
              surname: "Kowalski",
              email: "kowalski@o2.pl",
              datePicker: "12-12-2025"
          }
        chai.request(app)
            .post('/form')
            .send(form)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('New record created in database.');
                  res.body.data.should.have.property('name');
                  res.body.data.should.have.property('surname');
                  res.body.data.should.have.property('email');
                  res.body.data.should.have.property('date');
              done();
            });
      });
  });
});