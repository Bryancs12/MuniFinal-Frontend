import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import Logo from '../../assets/escudo.png'
import User from '../../assets/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { startLogout } from '../actions/auth'

export const NavbarTest = () => {

  const { nombre,  apellidos, roles, tipoUnidad } = useSelector(state => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <Navbar
      fluid
      rounded
      className='!bg-blue-500'
    >
      <Navbar.Brand href="/home">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-12 sm:h-20"
          src={Logo}
        />
        {/* <span className="self-center whitespace-nowrap text-xl text-white font-semibold dark:text-white">
          Municipalidad
        </span>  */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={User} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Usuario: {nombre} {apellidos}
            </span>

          </Dropdown.Header>

          {
            roles.nombreRol === "Administrador" &&
            <Dropdown.Item className='text-lg' onClick={() => navigate('/users')}>
              Lista de usuarios
            </Dropdown.Item>
          }


          <Dropdown.Item className='text-lg' onClick={() => navigate('/passwordChange')}>
            Cambiar contraseña
          </Dropdown.Item>


          <Dropdown.Item className='text-lg' onClick={handleLogout}>
            Cerrar sesión
          </Dropdown.Item>


        </Dropdown>
        <Navbar.Toggle />

      </div>
      <Navbar.Collapse>

        <Navbar.Link
          //active
          href="/"
          className='text-base text-white'
        >
          <p>
            Página de inicio
          </p>
        </Navbar.Link>

        {/* Unidad Tecnica */}

        <Navbar.Link className='hover:bg-blue-700'>
          {
            roles.nombreRol === "Administrador" || tipoUnidad === "Unidad Técnica"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Unidad Técnica"
                  placeholder='bottom'
                >
                  {/* temp para ver las denuncias admin */}

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Jefatura" || roles.nombreRol === "Uso de suelo" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/usoSuelo')}>
                        Uso de suelo
                      </Dropdown.Item>
                      : null
                  }
                  

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Jefatura" || roles.nombreRol === "Visto bueno" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/vistoBueno')}>
                        Visto Bueno
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Unidad tecnica" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/UnidadTecnica/Denuncias')}>
                        Denuncias
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Unidad tecnica" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/UnidadTecnica/Permiso de construcción OM')}>
                        Permiso de construcción OM
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Unidad tecnica" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/UnidadTecnica/Consultas plan regulador')}>
                        Consultas plan regulador
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Unidad Tecnica" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/UnidadTecnica/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }


                </Dropdown>
              </div>
              :
              null
          }

        </Navbar.Link>
    

        {/* Ingeneria */}
        <Navbar.Link className='hover:bg-blue-700'>
          {
            roles.nombreRol === "Administrador" || tipoUnidad === "Ingeniería"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Ingeniería"
                  placeholder='bottom'
                  size='lg'
                >
                  {/* temp para ver las denuncias admin */}

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Jefatura" || roles.nombreRol === "Zonificacion Uso de suelo" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/zonificacion')}>
                        Zonificación Uso de Suelo
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Jefatura" || roles.nombreRol === "Zonificacion Visto bueno" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/zonificacionvb')}>
                        Zonificación Visto Bueno
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Ingeneria" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Ingenieria/Denuncias')}>
                        Denuncias
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "GestiónInterna" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Ingenieria/Gestión Interna')}>
                        Gestión Interna
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Jefatura" || roles.nombreRol === "Inspecciones" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/inspecciones')}>
                        Inspecciones
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Ingenieria" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Ingenieria/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }
                </Dropdown>
              </div>
              : null
          }
        </Navbar.Link>

        {/* Catastro */}
        <Navbar.Link className='hover:bg-blue-700'>
          {

            roles.nombreRol === "Administrador" || tipoUnidad === "Catastro"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Catastro"
                  placeholder='bottom'
                >
                  {/* temp para ver las denuncias admin */}

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Visados" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Catastro/Visados')}>
                        Visados
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Alineamiento" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Catastro/Alineamiento')}>
                        Alineamiento
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Catastro" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Catastro/Denuncias')}>
                        Denuncias
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Correcion de Cobro de Basuras" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Catastro/Correción de cobro de basuras')}>
                        Correción de cobro de basuras
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Catastro" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/Catastro/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }

                </Dropdown>
              </div>
              :
              null
          }
        </Navbar.Link>

        {/* Bienes inmuebles */}
        <Navbar.Link className='hover:bg-blue-700'>
          {

            roles.nombreRol === "Administrador" || tipoUnidad === "Bienes Inmuebles"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Bienes Inmuebles"
                  placeholder='bottom'
                >
                  {/* temp para ver las denuncias admin */}

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Exoneraciones" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Exoneraciones')}>
                        Exoneraciones
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Declaraciones de Bienes Inmuebles" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Declaraciones')}>
                        Declaraciones
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Certificaciones de Valor" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Certificaciones de valor')}>
                        Certificaciones de Valor
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Consulta de Valores de Terrenos" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Consulta de valores de terrenos')}>
                        Consulta de Valores de Terrenos
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Avaluos" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Avalúos')}>
                        Avalúos
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Correcion de Impuestos" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Correción de impuestos')}>
                        Correcion de impuestos
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Bienes Inmuebles" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/BienesInmuebles/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }

                </Dropdown>
              </div>
              :
              null
          }
        </Navbar.Link>

        {/* Gestion ambiental */}
        <Navbar.Link className='hover:bg-blue-700'>
          {

            roles.nombreRol === "Administrador" || tipoUnidad === "Gestion Ambiental"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Gestión Ambiental"
                  placeholder='bottom'
                >
                  {/* temp para ver las denuncias admin */}

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Gestion Ambiental" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionAmbiental/Denuncias')}>
                        Denuncias
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Gestiones Plan GIRS" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionAmbiental/Gestiones Plan GIRS')}>
                        Gestiones Plan GIRS
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Gestion Ambiental" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionAmbiental/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }

                </Dropdown>
              </div>
              :
              null
          }
        </Navbar.Link>

        {/* "Zona Marítimo Terrestre" */}
        <Navbar.Link className='hover:bg-blue-700'>
          {

            roles.nombreRol === "Administrador" || tipoUnidad === "Zona Maritimo Terrestre"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Zona Marítimo Terrestre"
                  placeholder='bottom'
                >
                  {/* temp para ver las denuncias admin */}

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Solicitud de Consecion" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/ZonaMaritimoTerrestre/Solicitud de concesión')}>
                        Solicitud de Conseción
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Consulta Plan Regulador Costero" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/ZonaMaritimoTerrestre/Consulta plan regulador costero')}>
                        Consulta Plan Regulador Costero
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Zona Maritimo Terrestre" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/ZonaMaritimoTerrestre/Denuncias')}>
                        Denuncias
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Zona Maritimo Terrestre" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/ZonaMaritimoTerrestre/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }

                </Dropdown>
              </div>
              :
              null
          }
        </Navbar.Link>

        {/* "Gestion de Ingenieria" */}
        <Navbar.Link className='hover:bg-blue-700'>
          {

            roles.nombreRol === "Administrador" || tipoUnidad === "Gestión de Ingeniería"
              ?
              <div className="text-base text-white">
                <Dropdown
                  arrowIcon={true}
                  inline={true}
                  label="Gestión de Ingenería"
                  placeholder='bottom'
                >

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Denuncias Gestion de Ingenieria" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionIngenieria/Denuncias')}>
                        Denuncias
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Criterio Legal Unidades" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionIngenieria/Criterio legal de unidades')}>
                        Criterio Legal Unidades
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Seguimiento de Consultas" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionIngenieria/Seguimiento de consultas')}>
                        Seguimiento de Consultas
                      </Dropdown.Item>
                      : null
                  }

                  {
                    roles.nombreRol === "Administrador" || roles.nombreRol === "Otros Gestion de Ingenieria" ?
                      <Dropdown.Item className='text-lg' onClick={() => navigate('/GestionIngenieria/Otros')}>
                        Otros
                      </Dropdown.Item>
                      : null
                  }

                </Dropdown>
              </div>
              :
              null
          }
        </Navbar.Link>



      </Navbar.Collapse>
    </Navbar>
  )
}


