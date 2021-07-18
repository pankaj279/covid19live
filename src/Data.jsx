import React, { useState, useEffect } from 'react';
import Store from './Store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const Data = () => {

  const [dataLive, setDataLive] = useState([]);
  const[one,setOne]=useState([]);

  const getData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const newData = await res.json();
      
      console.log(newData.statewise[0]);
      setDataLive(newData.statewise[0]);
      setOne(newData.statewise);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();

  }, [])




  return (
    <>


      <div className="heading">
        <h1>COVID19 LIVE DATA</h1>
        <h2>INDIA</h2>
      </div>

      <Store

        title="Total Active Cases"
        data={dataLive.active}
      />
      <Store
        title=" Recovered Cases"
        data={dataLive.recovered}
      />

      <Store

        title=" Total Death Cases"
        data={dataLive.deaths}
      />

      <Store
        title="Total Confirmed Cases"
        data={dataLive.confirmed}
      />
      
      <div className="fixTableHead">
      <table className="table-bordered center hoverTable">
      <thead>
        <tr>
        <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>DeltaConfirmed</th>
                <th>DeltaDeaths</th>
                <th>DeltaRecovered</th>
                <th>Updated</th>
        </tr>
      </thead>
  
      <tbody>


      {
                one.map((curElem,index)=>{
                    return(

                        <>

                       
                        
                        
                        <tr key={index}>
                            
                            
            <th >{curElem.state}</th>
                <td>{curElem.confirmed}</td>
                <td>{curElem.recovered}</td>
                <td>{curElem.deaths}</td>
                <td>{curElem.active}</td>
                <td>{curElem.deltaconfirmed}</td>
                <td>{curElem.deltadeaths}</td>
                <td>{curElem.deltarecovered}</td>
                <td>{curElem.lastupdatedtime}</td>

            </tr>
            
            
                
            
            </>
            
                    )
                })

            }
        
        </tbody>
        </table>
        </div>

     






    </>
  )

}
export default Data;