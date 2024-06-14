import React, { useState } from 'react'
import Header from './components/Header'
import Misiones from './components/Misiones'
import MisionesGrid from './components/MisionesGrid'

export const SpaceXApp = () => {
  const [selMision,setSelMision]=useState(null);
  const handleSelMision=(mision)=>{
    setSelMision(mision)
  }  
  const handleBackHome=()=>{setSelMision(null)}
  return (
    <>
        <div>
            <Header />
        </div>
        <div>
            {
              selMision ?
              (
                <Misiones mision={selMision} onBack={handleBackHome} />
                  
              ) : (
                <MisionesGrid onSelMision={handleSelMision} />
              )
            }
        </div>
    </>
  )
}

