import {expect} from "chai";
import * as jsstats from "../src/main.js";

describe("Create chi square distribution", function() {
  describe("default constructor", function() {
    var distribution = new jsstats.ChiSquareDistribution(20);
    it("has df of 10.00", function() {
    	expect(distribution.df).to.equal(20); 
      
    });
  });

  describe('run cumulative probability', function(){
    var distribution = new jsstats.ChiSquareDistribution(20);
    it('has cumulativeProbability working', function(){
      for(var X=0.2; X < 10.0; X += 0.5){
        console.log(X + ': ' + distribution.cumulativeProbability(X));
      }
    });
  });


});