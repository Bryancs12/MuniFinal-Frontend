import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ZCR } from './pdfs/ZCR';
import { ZST } from './pdfs/ZST';
import { ZE } from './pdfs/ZE';
import { ZAP } from './pdfs/ZAP';
import { ZCC } from './pdfs/ZCC';
import { ZCL } from './pdfs/ZCL';
import { ZH } from './pdfs/ZH';
import { ZI } from './pdfs/ZI';
import { ZP } from './pdfs/ZP';
import { ZPF } from './pdfs/ZPF';
import { ZPI } from './pdfs/ZPI';
import { ZR} from './pdfs/ZR';
import { ZRA } from './pdfs/ZRA';
import { ZRB } from './pdfs/ZRB';
import { ZRM } from './pdfs/ZRM';


export const GetDataPDF = () => {
    const URI = `${process.env.REACT_APP_API_URL}api/usoSuelo/`
    const {id} = useParams();


    const [usoSuelo, setUsoSuelo] = useState({});
    const [zonaRecibida, setZonaRecibida] = useState(null);

    const getTramiteById = async() =>{
        const res = await axios.get(URI+id)
        setUsoSuelo(res.data[0])
    }

    useEffect(() =>{
        getTramiteById()
    },[id])

    useEffect(() =>{
      let zonasSinComa = (usoSuelo?.zona)?.replace(/,$/ , "")
      //console.log(zonasSinComa)
      setZonaRecibida(zonasSinComa)
  },[usoSuelo])


    console.log(usoSuelo.zona)
    console.log(zonaRecibida)

    if(!zonaRecibida){
      return (
        <div>
          Cargando...
        </div>
      )
    }
   
    //let zona=''
    // en los cases tenian que tener la "," por eso no renderizan
    switch(zonaRecibida){
      case 'ZST':{
        return (
          <>
              <ZST data={usoSuelo}/>
          </>
        )
      }
      case 'ZE':{
        return (
          <>
              <ZE data={usoSuelo}/>
          </>
        )
      }break;
      case 'ZAP':{
        return (
          <>
              <ZAP data={usoSuelo}/>
          </>
        )
      }
      case 'ZCC':{
        return (
          <>
              <ZCC data={usoSuelo}/>
          </>
        )
      }
      case 'ZCL':{
        return (
          <>
              <ZCL data={usoSuelo}/>
          </>
        )
      }
      case 'ZCR':{
        return (
          <>
              <ZCR data={usoSuelo}/>
          </>
        )
      }
      case 'ZH':{
        return (
          <>
              <ZH data={usoSuelo}/>
          </>
        )
      }
      case 'ZI':{
        return (
          <>
              <ZI data={usoSuelo}/>
          </>
        )
      }
      case 'ZP':{
        return (
          <>
              <ZP data={usoSuelo}/>
          </>
        )
      }break;
      case 'ZPF':{
        return (
          <>
              <ZPF data={usoSuelo}/>
          </>
        )
      }
      case 'ZPI':{
        return (
          <>
              <ZPI data={usoSuelo}/>
          </>
        )
      }
      case 'ZR':{
        return (
          <>
              <ZR data={usoSuelo}/>
          </>
        )
      }
      case 'ZRA':{
        return (
          <>
              <ZRA data={usoSuelo}/>
          </>
        )
      }
      case 'ZRB':{
        return (
          <>
              <ZRB data={usoSuelo}/>
          </>
        )
      }
      case 'ZRM':{
        return (
          <>
              <ZRM data={usoSuelo}/>
          </>
        )
      }
    }


 
}



