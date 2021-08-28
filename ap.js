//get the data from the input 

const button=document.getElementById('btn');
const form=document.querySelector('#input');
const data1=document.querySelector('.data');
const data2=document.querySelectorAll('span');

var temp=0;
var Humidity=0;
var wind=0;
var pressure=0;
   
button.addEventListener('click',function(e){
                e.preventDefault();
                console.log(form.value.toLowerCase());
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.value.toLowerCase()}&unit=metrics&appid=4931295ba84e60670a989df1754a8f00`)
               .then(res=>res.json())
               .then(function(data){
                temp=data.main.temp;
                Humidity=data.main.humidity;
                 wind=data.wind.speed;
                 pressure=data.main.pressure;
    //


                data1.firstElementChild.textContent="Weather data in "+data.name;
    
            data2[0].textContent="Temp : "+temp ;
            data2[1].textContent="Wind  : "+wind ;
            data2[2].textContent="Humidity  : "+Humidity ; 
            data2[3].textContent="Pressure  : "+pressure ;
            data2[4].textContent="clouds  : "+data.clouds.all ;
               
            })
})


window.addEventListener('DOMContentLoaded',function(){
   
})