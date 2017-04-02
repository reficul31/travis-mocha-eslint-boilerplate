import assert from 'assert'
import {Hello} from '../src/hello'
// Test for activity logger module
describe('Hello-Test', function() {
    it('should say greet hello', function() {
    	assert.equal('Hello,World', Hello('World'));
    });
});
