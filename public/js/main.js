const cityName=document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    
     

    if(cityVal===""){
        city_name.innerText=`please write name before search`;

    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d3928be952f17ea205213f759a364c23`;
             const response =  await fetch(url) ;
             const data =   await response.json();
             console.log(data);
             const arrData=[data]
             city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
             temp.innerHTML=arrData[0].main.temp;
             const tempmood =arrData[0].weather[0].main;
             if(tempmood=="Clear"){
                 temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
             }
             else if(tempmood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#f1f2f6;'></i>";
             }
         else if(tempmood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>";
         }
         else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";

         }
    
        

        }catch{
            city_name.innerText=`please write name before search`;
        }
    }
}

submitBtn.addEventListener('click',getInfo)






