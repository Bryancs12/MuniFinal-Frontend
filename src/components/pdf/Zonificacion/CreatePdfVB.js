import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MyDocumentVB from './PDFTESTVB';

 export const CreatePdfVB = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/zonificacionvb/`
    //const navigate = useNavigate();
    const {id} = useParams();

    const [zonificacion, setZonificacion] = useState({});

    const getTramiteById = async() =>{
        const res = await axios.get(URI+id)
        setZonificacion(res.data[0])
    }
    useEffect(() =>{
        getTramiteById()
    },[id])

    console.log({zonificacion})



  return (
    <>
    <MyDocumentVB data={zonificacion} />
   
    </>
  )
}
