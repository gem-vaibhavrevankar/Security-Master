const name = document.getElementById('name');
const cusip = document.getElementById('cusip');
const isin = document.getElementById('isin');
const sedol = document.getElementById('sedol');
const bb_globalid = document.getElementById('bb_globalid');
const security_type = document.getElementById('Security_Type');
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



fetch('http://127.0.0.1:5500/db.json',{
    method : "POST",
    body : {
        datass : "name"
    }
}).
then(res =>  res.json()).then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/todos?completed=true'
// ).then(res => {return res.json()}).then(data => console.log(data))





