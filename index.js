const TAUX_DE_TVA = 20.0;


var montantHT;
var montantTTC;
var montantTVA;



montantHT = window.prompt('Quel est le montant HT ?');
montantHT = parseFloat(montantHT);


montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;


document.write
(
    '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
);
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');



