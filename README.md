# Supertest Helper
A helper for supertest.

I created this because sometimes we don't want to compare objects strictly. Sometimes the response would contains something like `timestamp` or `random value`, but we don't need to check them.

## Install
```bash
npm i -D supertest-helper
```

## Exmaple
```js
var request = require('supertest');
var supertestHelper = require('supertest-helper');
describe('supertest-helper', function () {
    var app;
    before(function () {
        app = require('path/to/your/app');
    });
    it('with supertest-helper', function (done) {
        request(app)
           .get('/api/something')
           // {"code": 1, msg: "success"} would pass,
           // and  {"code": 1, msg: "ok"} also pass.
           .expect(supertestHelper.like({
                "code": 1
            })).end(done);
    });
    
    it('without supertest-helper', function(done) {
        request(app)
           .get('/api/something')
           // {"code": 1, msg: "success"} would fail,
           // and  {"code": 1, msg: "ok"} fail either.
           .expect({
                "code": 1
            }).end(done);
            
        request(app)
           .get('/api/something')
           // {"code": 1, msg: "success"} would pass,
           // but  {"code": 1, msg: "ok"} would fail.
           .expect({
                "code": 1,
                "msg" : 'success'
            }).end(done);
        
    });
});
```
