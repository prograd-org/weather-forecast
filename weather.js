$(document).ready(function()
        {
            $("#btn").click(weather);
            function weather()
            {
                var text=$("#txt1").val();
                $.ajax({
                    url:"http://api.openweathermap.org/data/2.5/weather?q="+text+"&units=metric"+"&APPID=4a46e146e9f309dffad77471e3dd00ee",
                    type:"GET",
                    datatype:"jsonp",
                    success:function(data)
                    {
                        console.log(data);
                        document.getElementById("show").innerHTML=data.main.temp+" &#8451;"
                       
                        
                        document.getElementById("show2").innerHTML = text+","+data.sys.country;

                        document.getElementById("show3").innerHTML=data.weather[0].description;
                        var icon="http://openweathermap.org/img/w/" +data.weather[0].icon + ".png";
                        document.getElementById("icon").src = icon;
                        time();
                        
                    }
                });
            }
        });


        function time() {                //time function
            var today = new Date();     //time object
            var weekday = new Array(7);                     // to get day
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var n = weekday[today.getDay()];
            var h = today.getHours();        //hour
            var m = today.getMinutes();      //minutes
            var s = today.getSeconds();      //sec
            var z = today.getDay();
            var x = today.getMonth();
            var y = today.getFullYear();
            m = checkTime(m);        //to add zero when value is below 10
            s = checkTime(s);        //          ""
            document.getElementById("show1").innerHTML = n + " , " + h + ":" + m + ":" + s;   //time and day
            var t = setTimeout(time, 500);
          }  // 
          function checkTime(i) {      //to add zero when value is below 10 
            if (i < 10) { i = "0" + i };
            return i;
          }
          