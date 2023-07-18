import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MaterialTable } from '../Table/MaterialTable';
import { ColumnsTable } from '../Table/ColumnsTable';
import { useSelector } from 'react-redux';



export const ZonificacionVB = () => {

  const {uid,roles} = useSelector(state => state.auth)

  const URIZoniVB = roles.nombreRol === "Administrador" ? `${process.env.REACT_APP_API_URL}api/zonificacionvb` : `${process.env.REACT_APP_API_URL}api/zonificacionvb/getZonificacionByIdCreator/${uid}` 

  
  const [zonificacionVB, setZonificacionVB] = useState([]);
  const [columnsUsoSuelo,columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones] = ColumnsTable();
  const datosVB = [];

  console.log(zonificacionVB);

  zonificacionVB.map(e => {
    if(e.idVistoBueno == null){
      
    }else{
      const object = {
        id: e.id,
        Nombre_SolicitanteVB: e.nombreSolicitante,
        Nombre_PropietarioVB: e.nombrePropietario,
        CedulaVB: e.cedula,
        Cedula_PropietarioVB: e.cedulaPropietario,
        Nombre_ProyectoVB: e.nombreProyecto,
        Descripcion_ProyectoVB: e.descripcionProyecto,
        Plano_CatastroVB: e.planoCatastro,
        Direccion_InmuebleVB: e.direccionInmueble,
        TelefonoVB: e.telefono,
        Correo_ElectronicoVB: e.correoElectronico,
        FaxVB: e.fax,
        zona: e.zona,
        area: e.area,
        tipoRuta: e.tipoRuta,
        zona6: e.zona6,
        afectadoHumedal: e.afectadoHumedal,
        zmt: e.zmt,
        Propiedad_Matricula: e.propiedadMatricula,
        FechaVB: e.createdAt
      }
      datosVB.push(object)
    }
  })
    
  const getData = async () => {  
    const resZVB = await axios.get(URIZoniVB)
    setZonificacionVB(resZVB.data)  
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
            <MaterialTable 
            title={"Zonificaciones de Visto Bueno"}
            columnas={columnsZoniVB}
            data={datosVB}
            sizeC={175}
            editButton={'editZonificacionVB'}
            pdf={'zonificacionPdfVB'}
            path={"newZonificacionVB"}
            tipoTramite={"idZonificacionVB"}
            ubicacion={'/zonificacionvb'}
            tramite={'zonificacionvb'}
            />         
    </>
  )
}