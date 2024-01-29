const apikey="973ebc29c9851ec5054de2e87fcc2b13";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");


async function checkwether(city){
    const response=await fetch(apiurl+ city+`&appid=${apikey}`);
    if(response.status==404){

    }else{
        let data= await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humadity").innerHTML=data.main.humidity+"%";
        document.querySelector(".Wind").innerHTML=data.wind.speed+" km/h";

    }
searchbtn.addEventListener("click",function(){
    checkwether(searchbox.value)
})
}
