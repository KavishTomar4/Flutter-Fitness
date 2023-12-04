import React, { useEffect } from "react";
import '../Components/readypage.css';
import {useParams} from 'react-router-dom';
import { useState } from "react";
import Countdown from "react-countdown";
import { Stopwatch } from 'stopwatch.js';

function Readypage(){

    let {yoganame} = useParams();
    let [yogaName, setYogaName] = useState([])
    let [adho2, setadho2] = useState([])
    let [start, setStart] = useState(false);
    let [pause, setPause] = useState(false);
    let [reset, setReset] = useState(false);
    let [img, setImg] = useState('')
    let [yogaSpecificName, setSpecificName] = useState('');
    let stopwatch = new Stopwatch();
    useEffect(()=>{
        setYogaName(yoganame.split('-'));
        
      

          
        
        let fetchYogaDetails = async()=>{
            let response = await fetch('/api/getyoga', {
                method: 'POST',
                body: JSON.stringify({yoganame: yoganame}),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            let json = await response.json();
            setImg(json.yogaType.img);
            setSpecificName(json.yogaType.name);
        }

        fetchYogaDetails();
        

    }, [])
  let [countDown, setCountdown] = useState(3)

 let changeDiv = ()=>{
    document.getElementById('ready-container').style.display = 'none';
    document.getElementById('yoga-train-container').style.display = 'block';

    stopwatch.start((time)=>{
        document.getElementById('time-container').innerHTML = '<h1 id = "timer">'+time+'</h1>'
    })
   
 }
let startTime = ()=>{
   
    stopwatch.start((time)=>{
        document.getElementById('time-container').innerHTML = '<h1 id = "timer">'+time+'</h1>'
    })
}
let stopTime = ()=>{
    
    stopwatch.stop();
}


    
    return(
        <>
        <div id = "ready-container">
            <h1 style = {{fontSize: '2em', marginTop: '1em'}}>READY?</h1>
           <h1 style = {{fontSize: '3em', marginTop: '0.5em'}}><Countdown date={Date.now() + 3000}>
                    
                    <button id = "start-btn" onClick={changeDiv}>Start</button>
           </Countdown>
           </h1>
        </div>

        <div id = "yoga-train-container" style = {{display:'none'}}>
            <div id ="img-container">
                <img src = {img} width="848" height="300"/>
            </div>
            <h3 id = "yoga-name">{yogaSpecificName}</h3>
            <div id = "time-container">
            </div>
            <div id = "time-controller">
                <button onClick={startTime} id = "play-btn" className="control-btn">&#9658;</button>
                <button onClick = {stopTime} id = "reset-btn" className="control-btn">&#9209;</button>
            </div>
        </div>
        </>
    );

    

}

export default Readypage;