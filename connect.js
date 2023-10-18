const name = document.getElementById('name');
const cusip = document.getElementById('cusip');
const isin = document.getElementById('isin');
const sedol = document.getElementById('sedol');
const bb_globalid = document.getElementById('bb_globalid');
const security_type = document.getElementById('Security Type');
const output = document.getElementById('output');
const Currency = document.getElementById("Currency");
const EXV_CODE = document.getElementById("EXV CODE");
const Securtiy_type_2 = document.getElementById("Security type 2");
const Country_issue = document.getElementById("Country issue");
const Ticker = document.getElementById("Ticker");
const Security_discription = document.getElementById("Security discription");
const ICRA_rating = document.getElementById("ICRA rating");
const MOODY_rating = document.getElementById("MOODY rating");
const Active_Switch = document.getElementById("Active Switch");
const FUT_Category = document.getElementById("FUT_Category");
const FUT_EXG_NAME = document.getElementById("FUT-EXG_NAME");
const FUT_Trading_Unit = document.getElementById("FUT-Trading Unit");
const FUT_TICK_SIZE = document.getElementById("FUT-TICK_SIZE");
const FUT_TICK_Value = document.getElementById("FUT-TICK Value");
const Market_Sector = document.getElementById('Marekt Sector')

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

console.log(name.value);


//let str = name.value;
function fun(){
    output.innerHTML = bb_globalid.value;
    message.innerHTML = "testing";
    
}

function fun2(){
    alert("testing");
    console.log('adtefasdf');
    output.innerHTML = name.value;
    message.innerHTML = "testing"
}

btn2.addEventListener("click",fun2);
btn.addEventListener("click",fun);