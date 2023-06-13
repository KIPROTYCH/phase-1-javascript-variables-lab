// Code your solution in this file!

const companyName = "Scuber";
let mostProfitableNeighborhood = "Chelsea";
let companyCeo = "Susan Smith";

module.exports = {
    companyName,
    mostProfitableNeighborhood,
    companyCeo
};


before(function (done) {
    this.timeout(10000); 
    done();
});

