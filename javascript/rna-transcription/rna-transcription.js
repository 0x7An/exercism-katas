'use strict';

var DnaTranscriber = function () {};

const dnaRnaMap = {
    A: 'U',
    T: 'A',
    C: 'G',
    G: 'C'
}   

function dnaRnaTranscript(nucleotide) {
    return dnaRnaMap[nucleotide];
}

function dnaIsValid(dna){
    for (let i = 0; i < dna.length; i++) {
        let mappedNucleotide = dnaRnaMap[dna[i]];

        if (!mappedNucleotide) {
            throw new Error(`Invalid input`);
        }
    }
}

DnaTranscriber.prototype.toRna = function (dna) {
    dnaIsValid(dna);

    dna = dna.split('');
    return dna.map(dnaRnaTranscript).join('');
}

module.exports = DnaTranscriber;
