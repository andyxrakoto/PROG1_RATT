const { expect } = require('chai');
import { describe } from "mocha";
const getMostPopularPlaces = require('./getMostPopularPlaces');

describe("getMostPopularPlaces", function(){
    it("should return Itaosy Analamahitsy", function(){
        const result = getMostPopularPlaces("Analamahitsy", "Analamahitsy", "Itaosy", "Behoririka", "Itaosy", "Itaosy");
        expect(result).to.equal("Itaosy Analamahitsy");
    })
})


