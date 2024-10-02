const { expect } = require('chai');
import { describe } from "mocha";
const removeWords = require('./removeWords')

describe("removeWords" , function (){
    it("should return Hello, est test" , function(){
        const result = removeWords('Hello, ceci est un test', ['ceci', 'un']);
        expect(result).to.equal('Hello, est test');

    it("should return Hello Java", function() {
            const result = removeWords('Hello Java', ['java']);
            expect(result).to.equal('Hello Java');
          });

    })
})


