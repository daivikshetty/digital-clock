import React, {useState} from "react"


function App(){
      setInterval(refresh,1000);

            var [hour,setHour] = useState(new Date().getHours());
            var [minute,setMinute] = useState(new Date().getMinutes());
            var [second,setSecond] = useState(new Date().getSeconds());

            function refresh(){
                  setHour(new Date().getHours());
                  setMinute(new Date().getMinutes());
                  setSecond(new Date().getSeconds());
            }

            return (
                  <div className="container">
                        <h1>{hour}:{minute}:{second}</h1>
                  </div>
            );
     
}

export default App;