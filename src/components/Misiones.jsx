import React from "react";

const Misiones =  ({mision,onBack}) => {

    return (
        <div>
            <button className="button" onClick={onBack}> Back </button>
            <h1>{mision.name}</h1>
            {mision.links.patch.small && (
                <img src={mision.links.patch.small}/>
            )}
            <p>Fecha: {mision.date_utc}</p>
            <p>{mision.details ? mision.details : 'Sin datos de falla'}</p>
        </div>
    )
};
export default Misiones;