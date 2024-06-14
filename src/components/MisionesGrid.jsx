import React,{useState,useEffect} from "react";

const MisionesGrid=({onSelMision})=>{
    const [misiones,setMisiones]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v5/launches')
        .then(response=>response.json())
        .then(data=>{
            console.log(data) 
            setMisiones(data)
        }) 
        .catch(error=>console.error('Error al traer los datos: ', error))
    },[])

    return(
        <div className="misionContainer">
            {misiones.map(mision=>(
                <article className="gridIndividual" key={mision.id} onClick={()=>onSelMision(mision)}>
                    <img src={mision.links.patch.small} />
                    <h2>{mision.name}</h2> 
                </article>
            ))}
        </div>
    )
}

export default MisionesGrid;