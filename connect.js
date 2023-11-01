//const Retrieve = document.getElementById('Retrieve');

//search fucntion

// const btn = document.getElementById('btn');
// const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById("data");

btn3.addEventListener("click", function () {
  const searchurl = "table.html";
  window.location.href = searchurl;
});

// btn2.addEventListener("click",function searchone(){
//     const searchurl = "searchfilter.html"
//     window.location.href = searchurl
// })

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form_data = new FormData(form);

  for (item of form_data) {
    let str = item[0] + item[1];
    localStorage.setItem(item[0], item[1]);
  }
  window.location.href = "searchfilter.html";
});

const name = localStorage.getItem("name");
const cusip = localStorage.getItem("cusip");
const isin = localStorage.getItem("ISIN");
const sedol = localStorage.getItem("Sedol");
const bb_globalid = localStorage.getItem("BB_GLOBALID");
const security_type = localStorage.getItem("Security_Type");
const output = localStorage.getItem("output");
const Currency = localStorage.getItem("Currency");
const EXC_CODE = localStorage.getItem("EXC_CODE");
const Securtiy_type_2 = localStorage.getItem("Security_type_2");
const Country_issue = localStorage.getItem("Country_issue");
const Ticker = localStorage.getItem("Ticker");
const Security_discription = localStorage.getItem("Security_discription");
const ICRA_rating = localStorage.getItem("ICRA_rating");
const MOODY_rating = localStorage.getItem("MOODY_rating");
const Active_Switch = localStorage.getItem("Active_Switch");
const FUT_Category = localStorage.getItem("FUT-Category");
const FUT_EXG_NAME = localStorage.getItem("FUT-EXG_NAME");
const FUT_Trading_Unit = localStorage.getItem("FUT-Trading_Unit");
const FUT_TICK_SIZE = localStorage.getItem("FUT-TICK_SIZE");
const FUT_TICK_Value = localStorage.getItem("FUT-TICK_Value");
const Market_Sector = localStorage.getItem("Market_Sector");

let url = "https://securitymasterdataspie.onrender.com/securitydata?";
// url+='EXC_CODE='+exc;
// console.log(url);

if (EXC_CODE == "") {
  url = url;
} else {
  url += "EXC_CODE=" + EXC_CODE;
}

if (name == "") {
  url = url;
} else {
  url += "&NAME=" + name;
}

if (Currency == "") {
  url = url;
} else {
  url += "&CRNCY=" + Currency;
}

if (cusip == "") {
  url = url;
} else {
  url += "&CUSIP=" + cusip;
}

if (isin == "") {
  url = url;
} else {
  url += "&ISIN=" + isin;
}

if (sedol == "") {
  url = url;
} else {
  url += "&SEDOL=" + sedol;
}

if (bb_globalid == "") {
  url = url;
} else {
  url += "&ID_BB_GLOBAL=" + bb_globalid;
}

if (security_type == "") {
  url = url;
} else {
  url += "&SECURITY_TYPE=" + security_type;
}

//  if(Securtiy_type_2 == ""){
//     url = url;
//  }else {
//     url+='&SECURITY_TYPE2='+Securtiy_type_2;
//  }

if (Country_issue == "") {
  url = url;
} else {
  url += "&CNTRY_ISSUE=" + Country_issue;
}

if (Ticker == "") {
  url = url;
} else {
  url += "&TICKER=" + Ticker;
}

if (Security_discription == "") {
  url = url;
} else {
  url += "&SEC_DESCRIPTION=" + Security_discription;
}

if (ICRA_rating == "") {
  url = url;
} else {
  url += "&ICRA_RATING=" + ICRA_rating;
}

if (MOODY_rating == "") {
  url = url;
} else {
  url += "&MOODY_RATING=" + MOODY_rating;
}

if (Active_Switch == "") {
  url = url;
} else {
  url += "&ACTIVE_SWITCH=" + Active_Switch;
}

if (FUT_Category == "") {
  url = url;
} else {
  url += "&FUTURES_CATEGORY=" + FUT_Category;
}

if (FUT_EXG_NAME == "") {
  url = url;
} else {
  url += "&FUR_EXCH_NAME_LONG=" + FUT_EXG_NAME;
}

if (FUT_Trading_Unit == "") {
  url = url;
} else {
  url += "&FUT_TRADING_UNITS=" + FUT_Trading_Unit;
}

if (FUT_TICK_SIZE == "") {
  url = url;
} else {
  url += "&FUT_TICK_SIZE=" + FUT_TICK_SIZE;
}

if (Market_Sector == "") {
  url = url;
} else {
  url += "&MARKET_SECTOR=" + Market_Sector;
}

if (FUT_TICK_Value == "") {
  url = url;
} else {
  url += "&FUT_TICK_VALUE=" + FUT_TICK_Value;
}

localStorage.setItem("url", url);

console.log(url);

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
