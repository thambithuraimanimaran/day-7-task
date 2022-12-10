// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var data = request.response
//     var result = JSON.parse(data);
//     var res = result.reduce((acc,cv)=>acc+cv.population,0);
//     console.log(res);
// }
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var data = request.response;
//     var result = JSON.parse(data);
//     var res=result.forEach((ele)=>{console.log(`${ele.name.common}: ${ele.capital}: ${ele.flag}`)});

// }
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload=function(){
//     var data = request.response;
//     var result =JSON.parse(data);
//     var res=result.filter((ele)=>{
//         for(var key in ele.currencies){
//             if(ele.currencies[key].code==="USD"){
//                 console.log(ele.name)
//             }
//         }
//     })
// }
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var data=request.response;
//     var result =JSON.parse(data);
//     var res = result.filter((ele)=>ele.population<200000)
//     var res1=res.map((ele)=>`${ele.population}:${ele.name.common}`)
//     console.log(res1)
// }
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var data = request.response;
//     var result=JSON.parse(data);
//     var res=result.filter((ele)=>ele.continents=="Asia")
//     var res1=res.map((ele)=>`${ele.region}`)
//     console.log(res1)
// }