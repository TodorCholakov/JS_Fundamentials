function solve (param1, param2, param3, param4, param5 ){
let lostFightsCount = param1;
let helmetPrice = param2;
let swordPrice = param3;
let shieldPrice = param4;
let aromorPrice = param5;

    let aHelmetPrice = Math.floor(lostFightsCount/2)*helmetPrice;
    let aSwordPrice = Math.floor(lostFightsCount/3)*swordPrice;
    let aShieldPrice = Math.floor(lostFightsCount/6)*shieldPrice;
    let aAromorPrice = Math.floor(lostFightsCount/12)*aromorPrice;
    res = aHelmetPrice+aSwordPrice+aShieldPrice+aAromorPrice
    console.log (`Gladiator expenses: ${res.toFixed(2)} aureus`)
}
solve (7,
    2,
    3,
    4,
    5)