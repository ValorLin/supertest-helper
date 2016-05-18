# Supertest Helper
A helper for supertest.

I created this because sometimes we don't want to aseert objects strictly. Because sometimes the response would contains something like `timestamp` or `random value`, and we don't need to check them.

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
        // with supertest-helper
        request(app)
           .get('/api/something')
           // e.g. {"code": 1, msg: "success"} would pass test,
           // and  {"code": 1, msg: "ok"} also pass test.
           .expect(supertestHelper.like({
                "code": 1
            })).end(done);
    });
    
    it('without supertest-helper', function(done) {
        request(app)
           .get('/api/something')
           // e.g. {"code": 1, msg: "success"} would failed,
           // and  {"code": 1, msg: "ok"} failed either.
           .expect({
                "code": 1
            }).end(done);
            
        request(app)
           .get('/api/something')
           // e.g. {"code": 1, msg: "success"} would pass test,
           // but  {"code": 1, msg: "ok"} would be failed.
           .expect({
                "code": 1,
                "msg" : 'success'
            }).end(done);
        
    });
});
```
