import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {VistoBuenoPDF} from './pdf';
import { useSelector } from 'react-redux';


 export const CreateVBPdf = () => {
  const { nombre } = useSelector(state => state.auth)
    const URI = `${process.env.REACT_APP_API_URL}api/vistoBueno/`
    //const navigate = useNavigate();
    const {id} = useParams();

    const [vistoBueno, setVistoBueno] = useState({});

    const getTramiteById = async() =>{
        const res = await axios.get(URI+id)
        setVistoBueno(res.data[0])
    }
    useEffect(() =>{
        getTramiteById()
    },[id])
    vistoBueno['inge']=nombre;
    console.log({vistoBueno})
    


  return (
    <>
    <VistoBuenoPDF data={vistoBueno} /> 
   
    </>
  )
}
