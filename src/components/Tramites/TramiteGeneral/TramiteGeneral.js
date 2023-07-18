import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ColumnsTable } from '../../Table/ColumnsTable';
import { MaterialTableIT } from '../../Table/MaterialTableIT';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



export const TramiteGeneral = () => {

  const {uid,roles} = useSelector(state => state.auth)

  let urlParam = useParams();
  let params = urlParam['*'].split("/");

  const URITG = roles.nombreRol === "Administrador" ? `${process.env.REACT_APP_API_URL}api/interfazTramite/getByTramite/${params[0]}/${params[1]}` : `${process.env.REACT_APP_API_URL}api/interfazTramite/getByCreator/${uid}/${params[1]}`;
  
  const [tramiteGenral, setTramiteGeneral] = useState([]);


  const datos = []
  const [columnsUsoSuelo,columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones] = ColumnsTable();

  tramiteGenral.map(e => {
    const object = {
      id: e.id,
      asunto: e.asunto,
      descripcion: e.descripcion,
      nombreCompleto: e.nombreCompleto,
      cedula: e.cedula,
      direccion: e.direccion,
      tipoTramite: e.tipoTramite,
      fechaCreacion: e.fechaCreacion,
      creador: e.creador,
    }
    datos?.push(object)
  })

 

  useEffect(() => {
    fetchRecords()
    getTramite()
  }, [params[0]]);

  const getTramite = async () => {
    const resTG = await axios.get(URITG)
    setTramiteGeneral(resTG.data)
  }

  const fetchRecords = () => {
    axios.get(URITG)
        .then((response) => {
            setTramiteGeneral(response.data);
        })
        .catch((error) => {
            console.error('Error al obtener los registros:', error);
        });
};


  return (
    <>
      <MaterialTableIT
      title={params[1]}
      columnas={columnsInterfazTramites}
      data={datos}
      tipoTramite={params[1]}
      tipoUnidad={params[0]}
      editButton={'editTramiteGeneral'}
      sizeC={140}
      ubicacion={'idGenerales'}
      tramite={'interfazTramite'}
      />   
    </>
    )
}