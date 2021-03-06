/**
 * Created by jay on 4/23/17.
 */


let expect = require('expect');
let {generateMessage} = require('./message');



describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        let from = 'Jen';
        let text = 'Some message';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});

    });
});