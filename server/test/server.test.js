const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
var {todo} = require('./../models/todo');

 beforeEach((done) => {
  todo
  .sync({force : true})
  .then(() => {
    console.log('Sync table todo OK');
    done();
  })
  .catch(err => { 
    done('Sync table todo ERROR - ', err);
  });

  // user
  // .sync({force : true})
  // .then(() => {
  //   console.log('Sync table user OK');
  //   done();
  // })
  // .catch(err => { 
  //   done('Sync table user ERROR - ', err);
  // });


 });

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var data = {
	      "text": "  aaabbb  ",
	      "completed": 0
        };
    var validData = {
      "text": "aaabbb",
	      "completed": 0
    }

    request(app)
      .post('/todos')
      .send(data)
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude(validData)
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }
         
        todo.findAll().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0]).toInclude(validData);
          done();
        }).catch((e) => done(e));
      });
  });
  it('should not add invalid data into DB', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        todo.findAll().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      })
  });
});