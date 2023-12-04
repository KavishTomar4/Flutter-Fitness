import React, { useEffect, useState } from "react";
import '../Components/yogacontainer.css';
import {Link} from 'react-router-dom';

function Yogacontainer(){

    let [yogas, setYogas] = useState([])
    useEffect(()=>{
        let fetchData = async()=>{
            let response = await fetch('/api/');
            let json = await response.json();

            setYogas(json.yogaData);
        }

        fetchData();
    }, [])

    return(
        <div id = "yoga-container">
            <div style = {{width: '100%', background: '#2f5bad', color: 'white', height: '5em', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <h3 style = {{fontSize: '2.1em', textAlign: 'center', marginTop: '0.4em'}}>Yogas</h3>
            </div>
            <div id = "yoga-types">
                {
                    yogas.map((yoga)=>{
                      return yoga.name !== "Adho mukha svanasana"? <Link to = {`/readypage/${yoga.name.toLowerCase().replace(" ", "-")}`}><div id = "yoga">
                            <img src = {yoga.img} width = "100" height = "100" id = "yoga-image"/>
                            <h2 id = "yoga-name">{yoga.name}</h2>
                        </div></Link>:
                        <Link to ={`/readypage/${yoga.name.toLowerCase().replace(" ", "-")}`}><div id = "yoga">
                        <img src = {yoga.img} style = {{marginRight: '4em'}} width = "100" height = "100" id = "yoga-image"/>
                        <h2 id = "yoga-name">{yoga.name}</h2>
                    </div></Link>
                    })
                }
            </div>
        </div>
    );

}


export default Yogacontainer;