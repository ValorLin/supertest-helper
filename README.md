# Supertest Helper
## Exmaple
```js
var request = require('supertest');
var supertestHelper = require('supertest-helper');
describe('supertest-helper', function () {
    var app;
    before(function () {
        app = require('path/to/your/app');
    });
    it('like', function (done) {
        request(app)
           .get('/api/')
           // match response like {"code": 1}
           // e.g. {"code": 1, msg: "success"} would pass test
           .expect(supertestHelper.like({
                "code": 1
            })).end(done);
    });
});
```