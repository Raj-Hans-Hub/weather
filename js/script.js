console.log("raj");
const apikey = "eb3975fc0f294974b08101527261406";

const btn = document.getElementById("btn");
const row = document.getElementsByClassName("row")[0];
const row_2 = document.getElementsByClassName("row_2")[0];
const row_3 = document.getElementsByClassName("row_3")[0];
// const box = document.getElementById("box");
// const fora = document.getElementById("for");




btn.addEventListener("click", async () => {



    const city = document.getElementById("city_input").value;
    if (!city) {
        city.innerHTML = "Enter City Name";
        return;

    }

    try {


        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city},india&days=3`);

        const Data = await response.json();
        const date = new Date(Data.location.localtime);

        const dayname = date.toLocaleDateString("en-us", {
            weekday: "long",
        });

        const daynum = date.getDate();

        const month = date.toLocaleDateString("en-us", {
            month: "long",
        });

        const year = date.getFullYear();

        const time = date.toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        const time_date = `${dayname}, ${daynum} ${month} ${year} | ${time}  `

        console.log(Data);
        console.log("rrr" + row);

        row.innerHTML = `
         
         

            <div class="row_col_left">
                <div class="city_name_cont_left">
                    <div class="city_name_item">

                        <h1 style="margin-bottom:10px;">${Data.location.name}, ${Data.location.region}</h1>

                        <p>${time_date}</p>

                    </div>
                    <div class="icon_temp_cont">

                        <div class="icon_item">
                            <img src="https:${Data.current.condition.icon}" width="100px" alt="">
                        </div>
                        <div class="temp_item">
                            <h1>${Data.current.temp_c}</h1><span>&deg;C</span>
                            
                            
                            
                        </div>
                        
                    </div>
                    <p style="text-align: center; margin-left: 100px; font-size: x-large; font-family: sans-serif;">${Data.current.condition.text}</p>
                    
                    
                    
                </div>
                <div class="current_weather_list_cont_right">
                 
                    <div class="list_items">
                        <div class="list_items_icon"><i class="fa fa-tint"  ></i><p>Humedity </p></div>
                        <div><p>${Data.current.humidity}%</p></div>
                    </div>
                    
                    <div class="list_items">
                        <div class="list_items_icon"><i class="fa fa-wind" ></i><p>Wind Speed</p></div>
                        <div><p>${Data.current.wind_kph} km/h</p></div>
                    </div>
                    
                    <div class="list_items">
                        <div class="list_items_icon"><i class="fa fa-wind" ></i><p>Wind direction</p></div>
                        <div><p>${Data.current.wind_dir}</p></div>
                    </div>
                    
                    <div class="list_items">
                        <div class="list_items_icon"><i class="fa fa-eye"  ></i><p>Visiblity</p></div>
                        <div><p>${Data.current.vis_km}km</p></div>
                    </div>
                    
                    <div class="list_items">
                        <div class="list_items_icon"><i class="fa fa-sun" id="sun"  ></i><p>UV </p></div>
                        <div><p>${Data.current.uv}(High)</p></div>
                    </div>
                    
                    <div class="list_items">
                        <div class="list_items_icon"><i class="fa fa-umbrella-beach" id="sun"  ></i><p>Rain Quntity</p></div>
                        <div><p>${Data.current.precip_mm} mm</p></div>
                    </div>
                    
                    
 
                    
                        
                    


                </div>


            </div>

            <div class="row_col_right">
                <div><h2> Current Conditions </h2></div>
                <hr>
                <div class="Conditions_row">
                    <div class="Conditions_col_left">
                        <div class="Conditions_icon_item">
                            <i class="fa fa-temperature-high" size="40px" id="tt"  ></i>
                        </div>
                        <div class="Conditions_name_value_item">

                            <div class="Conditions_name_item">Temperature</div>
                            <div class="Conditions_value_item"><h1>${Data.current.temp_c}&deg;C</h1></div>
                        </div>
                    </div>
                    <div class="Conditions_col_left">
                        <div class="Conditions_icon_item">
                            <i class="fa fa-temperature-high" size="40px" id="tf"  ></i>
                        </div>
                        <div class="Conditions_name_value_item">

                            <div class="Conditions_name_item">Feels Like</div>
                            <div class="Conditions_value_item"><h1>${Data.current.feelslike_c}&deg;C</h1></div>
                        </div>
                    </div>


                </div>
                <div class="Conditions_row">
                    <div class="Conditions_col_left">
                        <div class="Conditions_icon_item">
                            <i class="fa fa-cloud" size="40px" id="cc"  ></i>
                        </div>
                        <div class="Conditions_name_value_item">

                            <div class="Conditions_name_item">Cloud Cover</div>
                            <div class="Conditions_value_item"><h1>${Data.current.cloud}%</h1></div>
                        </div>
                    </div>
                    <div class="Conditions_col_left">
                        <div class="Conditions_icon_item">
                            <i class="fa fa-cloud-rain" size="40px" id="cc"  ></i>
                        </div>
                        <div class="Conditions_name_value_item">

                            <div class="Conditions_name_item"></i>Rain Chance</div>
                            <div class="Conditions_value_item"><h1>${Data.current.chance_of_rain}%</h1></div>
                        </div>
                    </div>


                </div>



                
            </div>
         







         `;









        // box.innerHTML += `
        // <h2>${Data.location.country}</h2>
        // <h3>${Data.location.region}</h3>
        // <h4>${Data.location.name}</h4>
        // <p>Updated:${Data.current.last_updated}</p>
        // <img src="${Data.current.condition.icon}" alt="icon" width="20px" height="20px">
        // <p>Temperature:${Data.current.temp_c}^C</p>
        // <p>Condition:${Data.current.condition.text}</p>
        // <p>Humidity:${Data.current.humidity}%</p>
        // <p>Rain:${Data.current.chance_of_rain}%</p>
        // <p>Cloud:${Data.current.cloud}</p>
        // <p>Rain:${Data.current.precip_mm} mm</p>
        // <p>Wind Speed:${Data.current.wind_kph}km/h</p>
        // <p>Wind direction:${Data.current.wind_dir}km/h</p>


        // `;
        // const ff = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city},india&days=3`);
        // console.log("rrrrr");
        // const Dataff = await ff.json();

        Data.forecast.forecastday[0].hour.forEach(hour => {



            row_2.innerHTML += `
        
           <div class="hour_item">
                <h3>${hour.time.split(" ")[1]}</h3>
                <img src="https:${hour.condition.icon}" width="100px" alt="">
                <p>${hour.condition.text}</p>
                <div class="temp_wond_item_hour">
                    <div class=""><i class="fa fa-temperature-high" size="40px" style="color: red;" ></i>${hour.temp_c}&deg;C</div>
                    <div class=""><i class="fa fa-wind" size="40px"  style="color: rgba(15, 224, 43, 0.548);" ></i>${hour.wind_kph}km/h</div>


                </div>
                <p><i class="fa fa-umbrella" id="sun"  ></i> Rain Ch ${hour.chance_of_rain}%</p>
                     <p><i class="fa fa-water" id="sun"  style="color: rgba(4, 0, 255, 0.548);"  ></i> Rain Qty ${hour.precip_mm}mm</p>
            </div>
           `;
        });



        Data.forecast.forecastday.slice(1).forEach(day => {
        const date = new Date(day.date);

        const weekday = date.toLocaleDateString("en-us", {
            weekday: "long",
        });

        const daynum = date.getDate();

        const month = date.toLocaleDateString("en-us", {
            month: "long",
        });
            const namr_day = `${weekday}, ${daynum} ${month}`;
            row_3.innerHTML += `

                    <div class="card">
                <h3>${namr_day}</h3>
                <img src="https:${day.day.condition.icon}" width="100px" alt="">
                <p>${day.day.condition.text}</p>
                <div class="temp_wond_item_hour">
                    <div class=""><i class="fa fa-temperature-high" size="40px" style="color: red;" ></i>${day.day.maxtemp_c}&deg;C</div>
                    <div class=""><i class="fa fa-wind" size="40px"  style="color: rgba(15, 224, 43, 0.548);" ></i>${day.day.maxwind_kph}km/h</div>


                    <p><i class="fa fa-umbrella" id="sun"  ></i>${day.day.daily_chance_of_rain}%</p>
                    <p><i class="fa fa-water" id="sun"  style="color: rgba(4, 0, 255, 0.548);"  ></i> ${day.day.totalprecip_mm}mm</p>
                </div>
            </div>

                `;

        });
        //    <p>Date:${day.date}</p>
        //    <img src="${day.day.condition.icon}" alt="icon" width="20px" height="20px">
        //    <p>Temperature max:${day.day.maxtemp_c}^C</p>
        //    <p>Temperature mini:${day.day.mintemp_c}^C</p>
        //     <p>Condition:${day.day.condition.text}</p>
        //     <p>Humidity:${day.day.humidity}%</p>
        //     <p>Rain:${day.day.daily_chance_of_rain}%</p>
        //     <p>Rain:${day.day.totalprecip_mm}mm</p>
        //     <p>Cloud:${day.day.cloud}mm</p>
        //     <p>Wind Speed:${day.day.wind_kph}km/h</p>
        //     <p>Wind direction:${day.day.wind_dir}km/h</p>


        console.log("sssss");

    } catch (error) {
        console.log(error);

        alert("not found");
    }

});    
