import React from 'react'
import { ZonificacionForm } from '../components/Forms/ZonificacionForm';
import { ZonificacionFormVB } from '../components/Forms/ZonificacionFormVB';
import { UsoSueloForm } from '../components/Forms/UsoSueloForm';
import { VistoBuenoForm } from '../components/Forms/VistoBuenoForm';
import { HomePage } from '../components/HomePage/HomePage';
import { UsoSuelo } from '../components/Tramites/UsoSuelo';
import { VistoBueno } from '../components/Tramites/VistoBueno';
import { NewZonificacion } from '../components/Tramites/NewZonificacion';
import { NewZonificacionVB } from '../components/Tramites/NewZonificacionVB';
import { Zonificacion } from '../components/Tramites/Zonificacion';
import { ZonificacionVB } from '../components/Tramites/ZonificacionVB';
import { EditUsoSuelo } from '../components/Tramites/EditUsoSuelo';
import { EditVistoBueno } from '../components/Tramites/EditVistoBueno';
import { EditZonificacion } from '../components/Tramites/EditZonificacion';
import { EditZonificacionVB } from '../components/Tramites/EditZonificacionVB';
import { CreatePdf } from '../components/pdf/Zonificacion/CreatePdf';
import { Route, Routes } from 'react-router-dom';
import { RegisterScreen } from '../components/Register/RegisterScreen';
import { NavbarTest } from '../components/navbar/NavbarTest';
import { UsersTable } from '../components/usersTable/UsersTable';
import { PasswordChange } from '../components/navbar/PasswordChange';
import { GeneralPDF } from '../components/pdf/UsoSuelo/GeneralPDF';
import { InterfazTramiteForm } from '../components/Forms/InterfazTramiteForm';
import { TramiteGeneral } from '../components/Tramites/TramiteGeneral/TramiteGeneral';
import { EditTramiteGeneral } from '../components/Tramites/TramiteGeneral/EditTramiteGeneral';
import { CreatePdfVB } from '../components/pdf/Zonificacion/CreatePdfVB';
import { CreateVBPdf } from '../components/pdf/VistoBueno/CreatePdf';
import { DescargarPDF } from '../components/PDFAdjuntos/descargarPDF';
import { Adjuntos } from '../components/PDFAdjuntos/Adjuntos';
import { Inspecciones } from '../components/Tramites/Inspecciones';
import { InspeccionesForm } from '../components/Forms/inspeccionesForm';
import { EditInspecciones } from '../components/Tramites/EditInspecciones';
import { EliminarTramites } from '../components/eliminarTramites/Eliminar';
import { EditCumScreen } from '../components/Register/EditUser';


export const DashboardRoutes = () => {
   
  return (
    <>
      <NavbarTest /> 

      <div>
        <Routes>
        
            {/* Home */}
            <Route path="/" element={<HomePage />} /> 

            {/* Tramites */}
            <Route path="/zonificacion" element={<Zonificacion />} />
            <Route path="/zonificacionvb" element={<ZonificacionVB />} />
            <Route path="/usoSuelo" element={<UsoSuelo />} />
            <Route path="/vistoBueno" element={<VistoBueno />} />
            <Route path="/inspecciones" element={<Inspecciones />} />
            {/* Tramites Generales*/}
            <Route path="/:TipoUnidad/:TipoTramite" element={<TramiteGeneral />} />

            {/* Creaciones */}
            <Route path="/usoSueloForm" element={<UsoSueloForm />} />
            <Route path="/vistoBuenoForm" element={<VistoBuenoForm />} />
            <Route path="/inspeccionesForm" element={<InspeccionesForm />} />
            {/* Creaciones de interfaz generica */}
            <Route path="/:TipoUnidad/:TipoTramite/new" element={<InterfazTramiteForm />} />


            {/* CreacionDe las zonificaciones */}
            <Route path="/zonificacionForm/:id" element={<ZonificacionForm />} />
            <Route path="/zonificacionFormVB/:id" element={<ZonificacionFormVB />} />
            <Route path="/newZonificacion" element={<NewZonificacion />} />
            <Route path="/newZonificacionVB" element={<NewZonificacionVB />} />

            {/* Edit forms */}
            <Route path="/editUsoSuelo/:id" element={<EditUsoSuelo />} />
            <Route path="/editVistoBueno/:id" element={<EditVistoBueno />} />
            <Route path="/editZonificacion/:id" element={<EditZonificacion />} />
            <Route path="/editZonificacionVB/:id" element={<EditZonificacionVB />} />
            <Route path="/editInspecciones/:id" element={<EditInspecciones />} /> 

            {/* Edit tramites generales */}
            <Route path="/editTramiteGeneral/:TipoUnidad/:TipoTramite/:id" element={<EditTramiteGeneral />} />

            {/* Eliminar tramites*/}
            <Route path="/eliminar/:tramite/:id" element={<EliminarTramites />} />

            {/* Auth forms */}
            <Route path='/users' element={<UsersTable />} />
            <Route path='/passwordChange' element={<PasswordChange />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path="/editUser/:id" element={<EditCumScreen />} />
          
            {/* Pdf's */}
            <Route path="/zonificacionPdf/:id" element={<CreatePdf />} />
            <Route path="/zonificacionPdfVB/:id" element={<CreatePdfVB />} />
            <Route path='/usoSueloPdf/:id' element={<GeneralPDF />} />
            <Route path='/vistobuenoPdf/:id' element={<CreateVBPdf />} />

            {/* Adjuntos */}
            <Route path="/:ubicacion/:tipoTramite/:id" element={<Adjuntos />} />
            <Route path="/abrirArchivo/:nombre/:id" element={<DescargarPDF />} />
                           
        </Routes>
      </div>
    </>
  )
}
