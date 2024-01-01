const asset = require('assert');

describe('test file', ()=> {
    context('function to be test', ()=> {
        // before(()=> {
        //     console.log('============before');
        // });

        // after(()=> {
        //     console.log('============after');
        // });

        // beforeEach(()=> {
        //     console.log('============beforeEach');
        // })

        // afterEach(()=>{
        //     console.log('=============afterEach');
        // })

        it('should do something', ()=> {
            asset.equal(1,1);
        });

        it('object equel check', ()=> {
            asset.deepEqual({name: 'duleepa'}, {name: 'duleepa'});
        });

        it('Todo: some logic')
    })

    context('another function', ()=> {
        it('Todo: another function logic')
    });
})