//const Retrieve = document.getElementById('Retrieve');

//search fucntion

// const btn = document.getElementById('btn');
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById("data");

// btn3.addEventListener("click", function () {
//   const searchurl = "table.html";
//   window.location.href = searchurl;
// });

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
  
  window.location.href = "table.html";

});

const Name = localStorage.getItem("Name");
const Asset_Class = localStorage.getItem("Asset_Class");
const FIGI = localStorage.getItem("FIGI");
const ISIN = localStorage.getItem("ISIN");
const Ticker = localStorage.getItem("Ticker");
const Security_Type = localStorage.getItem("Security_Type");
const Credit_Rating = localStorage.getItem("Credit_Rating");
const Security_Type_2 = localStorage.getItem("Security_Type_2");
const Exchange_Code = localStorage.getItem("Exchange_Code");
const Securtiy_type_2 = localStorage.getItem("Security_type_2");
const Market_Sector = localStorage.getItem("Market_Sector");
//const Ticker = localStorage.getItem("Ticker");
const Country_of_Exposure = localStorage.getItem("Country_of_Exposure");
const Security_ID = localStorage.getItem("Security_ID");
const LISTING_DATE = localStorage.getItem("LISTING_DATE");
const Payment_Frequency = localStorage.getItem("Payment_Frequency");
const Bond_Type = localStorage.getItem("Bond_Type");
const Maturity_Date = localStorage.getItem("Maturity_Date");
const OPEN_INTEREST = localStorage.getItem("OPEN_INTEREST");
const Face_Value = localStorage.getItem("Face_Value");
const SERIES = localStorage.getItem("SERIES");
//const Market_Sector = localStorage.getItem("Market_Sector");

let url = "https://securitymasterdataspie.onrender.com/Master_Data";
// url+='EXC_CODE='+exc;
// console.log(url);

if (Name == "") {
  url = url;
} else {
  url += "Name=" + Name;
}

if (Asset_Class == "") {
  url = url;
} else {
  url += "&Asset_Class=" + Asset_Class;
}

if (FIGI == "") {
  url = url;
} else {
  url += "&FIGI=" + FIGI;
}

if (ISIN == "") {
  url = url;
} else {
  url += "&ISIN=" + ISIN;
}

if (Ticker == "") {
  url = url;
} else {
  url += "&Ticker=" + Ticker;
}

if (Security_Type == "") {
  url = url;
} else {
  url += "&Security_Type=" + Security_Type;
}

if (Credit_Rating == "") {
  url = url;
} else {
  url += "&Credit_Rating=" + Credit_Rating;
}

if (Security_Type_2 == "") {
  url = url;
} else {
  url += "&Security_Type_2=" + Security_Type_2;
}

//  if(Securtiy_type_2 == ""){
//     url = url;
//  }else {
//     url+='&SECURITY_TYPE2='+Securtiy_type_2;
//  }

if (Exchange_Code == "") {
  url = url;
} else {
  url += "&Exchange_Code=" + Exchange_Code;
}

if (Market_Sector == "") {
  url = url;
} else {
  url += "&Market_Sector=" + Market_Sector;
}

if (Country_of_Exposure == "") {
  url = url;
} else {
  url += "&Country_of_Exposure=" + Country_of_Exposure;
}

if (Security_ID == "") {
  url = url;
} else {
  url += "&Security_ID=" + Security_ID;
}

if (LISTING_DATE == "") {
  url = url;
} else {
  url += "&LISTING_DATE=" + LISTING_DATE;
}

if (Payment_Frequency == "") {
  url = url;
} else {
  url += "&Payment_Frequency=" + Payment_Frequency;
}

if (Bond_Type == "") {
  url = url;
} else {
  url += "&Bond_Type=" + Bond_Type;
}

if (Maturity_Date == "") {
  url = url;
} else {
  url += "&Maturity_Date=" + Maturity_Date;
}

if (OPEN_INTEREST == "") {
  url = url;
} else {
  url += "&OPEN_INTEREST=" + OPEN_INTEREST;
}

if (Face_Value == "") {
  url = url;
} else {
  url += "&Face_Value=" + Face_Value;
}

if (SERIES == "") {
  url = url;
} else {
  url += "&SERIES=" + SERIES;
}

// if (FUT_TICK_Value == "") {
//   url = url;
// } else {
//   url += "&FUT_TICK_VALUE=" + FUT_TICK_Value;
// }

localStorage.setItem("hey", url);



console.log(URL1);

fetch(URL1)
  .then((res) => res.json())
  .then((data) => console.log(data));
