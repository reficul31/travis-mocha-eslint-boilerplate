import assert from 'assert'
import {Hello, Bye} from '../src/hello'
// Test for activity logger module
describe('Hello-Test', function() {
    it('should say greet hello', function() {
        assert.equal('Hello,World', Hello('World'))
    })
    it('should say bye', function() {
        assert.equal('Bye,World', Bye('World'))
    })
})
