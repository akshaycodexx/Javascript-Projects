const apikey="973ebc29c9851ec5054de2e87fcc2b13";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const wetherIcon=0;


async function checkwether(city){
   const response=await fetch(apiurl +city+ `&appid=${apikey}`);
   if(response.status==404){
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather").style.display="none"
   }else{

    let data=await response.json();

    console.log(data)
 
 
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humadity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML=data.wind.speed+" km/h";
 
    if(data.weather[0].main == "Clouds"){
     wetherIcon.src="img/clouds.png"
    }
    else if(data.weather[0].main == "rain"){
 wetherIcon.src="img/rain.png"
    }
 document.querySelector(".weather").style.display="block"
 document.querySelector(".error").style.display="none"
   }

}
searchbtn.addEventListener("click",function(){
 checkwether(searchbox.value);
})




