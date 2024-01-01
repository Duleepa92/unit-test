const chai = require('chai');
const expect = chai.expect;

describe('chai test', ()=> {
    it('should compare some values', ()=> {
        expect(1).to.equal(1);
    });

    it('compare objects', () => { 
        expect({name: 'duleepa'}).to.deep.equal({name: 'duleepa'});
        expect({name: 'duleepa'}).to.have.property('name').to.equal('duleepa');
        expect(5 > 8).to.be.false;
        expect({}).to.be.a('object');
        expect('duleepa').to.be.a('string');
        expect('duleepa').to.be.a('string').with.length(7);
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    })
});