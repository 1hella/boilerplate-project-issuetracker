const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    this.timeout(5000);
    test('Create an issue with every field', done => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/issues/apitest')
            .type('form')
            .send({
                'issue_title': 'test',
                'issue_text': 'issue text',
                'created_by': 'tester',
                'assigned_to': 'developer',
                'status_text': 'Open'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.assigned_to, "developer");
                assert.equal(res.body.created_by, "tester");
                assert.equal(res.body.issue_text, "issue text");
                assert.equal(res.body.issue_title, "test");
                assert.isString(res.body._id);
                assert.isString(res.body.created_on);
                assert.isString(res.body.updated_on);
                assert.equal(res.body.created_on, res.body.updated_on);
                assert.isBoolean(res.body.open);
                assert.isTrue(res.body.open);
                done();
            })
    })
});
