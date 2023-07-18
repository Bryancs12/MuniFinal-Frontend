import { useMemo } from "react";

export const ColumnsTable = () =>{

    const columnsUsoSuelo = useMemo(() =>
    [
      {
        header: 'idUnidad',
        accessorKey: 'idUnidad', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre Solicitante',
        accessorKey: 'Nombre_Solicitante', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre Propietario',
        accessorKey: 'Nombre_Propetario', //simple accessorKey pointing to flat data
      },
      {
        header: 'Zona',
        accessorKey: 'zona', //simple accessorKey pointing to flat data
      },
      {
        header: 'Estado',
        accessorKey: 'Estado', //simple accessorKey pointing to flat data
      },
      {
        header: 'Cedula',
        accessorKey: 'Cedula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Distrito',
        accessorKey: 'Distrito', //simple accessorKey pointing to flat data
      },
      {
        header: 'Plano Catastro',
        accessorKey: 'Plano_Catastro', //simple accessorKey pointing to flat data
      },
      {
        header: 'Tipo Uso de Suelo',
        accessorKey: 'Tipo_Uso_Suelo', //simple accessorKey pointing to flat data
      },
      {
        header: 'Propiedad Matricula',
        accessorKey: 'Propiedad_Matricula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Fecha de creacion',
        accessorKey: 'Fecha', //simple accessorKey pointing to flat data
      },
      {
        header: 'Creado Por',
        accessorKey: 'creador', //simple accessorKey pointing to flat data
      },
    ],
    [],);

    const columnsVistoBueno = useMemo(() =>
        [
          {
            header: 'Nombre Solicitante',
            accessorKey: 'Nombre_SolicitanteVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Nombre Propietario',
            accessorKey: 'Nombre_PropietarioVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Zona',
            accessorKey: 'zona', //simple accessorKey pointing to flat data
          },
          {
            header: 'Estado',
            accessorKey: 'EstadoVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Propiedad Matricula',
            accessorKey: 'Propiedad_MatriculaVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Cedula',
            accessorKey: 'CedulaVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Cedula propietario',
            accessorKey: 'Cedula_PropietarioVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Nombre del proyecto',
            accessorKey: 'Nombre_ProyectoVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Descripcion del Proyecto',
            accessorKey: 'Descripcion_ProyectoVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Plano Catastro',
            accessorKey: 'Plano_CatastroVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Direccion inmueble',
            accessorKey: 'Direccion_InmuebleVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Telefono',
            accessorKey: 'TelefonoVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Correo electronico',
            accessorKey: 'Correo_ElectronicoVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Fax',
            accessorKey: 'FaxVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Fecha de creacion',
            accessorKey: 'FechaVB', //simple accessorKey pointing to flat data
          },
          {
            header: 'Creado Por',
            accessorKey: 'creadorVB', //simple accessorKey pointing to flat data
          },
        ],
        [],);


    
    const columnsZoni = useMemo(() =>
    [
      {
        header: 'idUnidad',
        accessorKey: 'idUnidad', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre Solicitante',
        accessorKey: 'Nombre_Solicitante', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre Propietario',
        accessorKey: 'Nombre_Propetario', //simple accessorKey pointing to flat data
      },
      {
        header: 'Zona',
        accessorKey: 'zona', //simple accessorKey pointing to flat data
      },
      {
        header: 'Cedula',
        accessorKey: 'Cedula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Distrito',
        accessorKey: 'Distrito', //simple accessorKey pointing to flat data
      },
      {
        header: 'Plano Catastro',
        accessorKey: 'Plano_Catastro', //simple accessorKey pointing to flat data
      },
      {
        header: 'Tipo Uso de Suelo',
        accessorKey: 'Tipo_Uso_Suelo', //simple accessorKey pointing to flat data
      },
      {
        header: 'Propiedad Matricula',
        accessorKey: 'Propiedad_Matricula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Fecha de creacion',
        accessorKey: 'Fecha', //simple accessorKey pointing to flat data
      },
      {
        header: 'Plano',
        accessorKey: 'plano', //simple accessorKey pointing to flat data
      },
      {
        header: 'Area',
        accessorKey: 'area', //simple accessorKey pointing to flat data
      },
      {
        header: 'Tipo Ruta',
        accessorKey: 'tipoRuta', //simple accessorKey pointing to flat data
      },
      {
        header: 'Zona 6',
        accessorKey: 'zona6', //simple accessorKey pointing to flat data
      },
      {
        header: 'Afectado Humedal',
        accessorKey: 'afectadoHumedal', //simple accessorKey pointing to flat data
      },
      {
        header: 'ZMT',
        accessorKey: 'zmt', //simple accessorKey pointing to flat data
      },
      {
        header: 'Creador por',
        accessorKey: 'creador', //simple accessorKey pointing to flat data
      },
    ],
    [],);

    const columnsZoniVB = useMemo(() =>
    [
      {
        header: 'Nombre Solicitante',
        accessorKey: 'Nombre_SolicitanteVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre Propietario',
        accessorKey: 'Nombre_PropietarioVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Zona',
        accessorKey: 'zona', //simple accessorKey pointing to flat data
      },
      {
        header: 'Propiedad Matricula',
        accessorKey: 'Propiedad_Matricula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Cedula',
        accessorKey: 'CedulaVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Cedula propietario',
        accessorKey: 'Cedula_PropietarioVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre del proyecto',
        accessorKey: 'Nombre_ProyectoVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Descripcion del Proyecto',
        accessorKey: 'Descripcion_ProyectoVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Plano Catastro',
        accessorKey: 'Plano_CatastroVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Direccion inmueble',
        accessorKey: 'Direccion_InmuebleVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Telefono',
        accessorKey: 'TelefonoVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Correo electronico',
        accessorKey: 'Correo_ElectronicoVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Fax',
        accessorKey: 'FaxVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Fecha de creacion',
        accessorKey: 'FechaVB', //simple accessorKey pointing to flat data
      },
      {
        header: 'Area',
        accessorKey: 'area', //simple accessorKey pointing to flat data
      },
      {
        header: 'Tipo Ruta',
        accessorKey: 'tipoRuta', //simple accessorKey pointing to flat data
      },
      {
        header: 'Zona 6',
        accessorKey: 'zona6', //simple accessorKey pointing to flat data
      },
      {
        header: 'Afectado Humedal',
        accessorKey: 'afectadoHumedal', //simple accessorKey pointing to flat data
      },
      {
        header: 'ZMT',
        accessorKey: 'zmt', //simple accessorKey pointing to flat data
      },
    ],
    [],);

    
    const columnsUsers = useMemo(() =>
    [
      {
        header: 'Nombre',
        accessorKey: 'nombre', //simple accessorKey pointing to flat data
      },
      {
        header: 'Apellidos',
        accessorKey: 'apellidos', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre de usuario',
        accessorKey: 'nombreUsuario', //simple accessorKey pointing to flat data
      },
      {
        header: 'Grado usuario',
        accessorKey: 'gradoUsuario', //simple accessorKey pointing to flat data
      },
      {
        header: 'Tipo de Unidad',
        accessorKey: 'tipoUnidad', //simple accessorKey pointing to flat data
      },
    ],
    [],);

    const columnsInterfazTramites = useMemo(() =>
    [
      {
        header: 'Asunto',
        accessorKey: 'asunto', //simple accessorKey pointing to flat data
      },
      {
        header: 'Descripción',
        accessorKey: 'descripcion', //simple accessorKey pointing to flat data
      },
      {
        header: 'Nombre Completo',
        accessorKey: 'nombreCompleto', //simple accessorKey pointing to flat data
      },
      {
        header: 'Cédula',
        accessorKey: 'cedula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Dirección',
        accessorKey: 'direccion', //simple accessorKey pointing to flat data
      },
      {
        header: 'Tipo de Trámite',
        accessorKey: 'tipoTramite', //simple accessorKey pointing to flat data
      },
      {
        header: 'Fecha de creación',
        accessorKey: 'fechaCreacion', //simple accessorKey pointing to flat data
      },
      {
        header: 'Creado Por',
        accessorKey: 'creador', //simple accessorKey pointing to flat data
      },
     
    ],
    [],);

    const columnsInterfazInspecciones = useMemo(() =>
    [
      {
        header: 'Nombre',
        accessorKey: 'nombre', //simple accessorKey pointing to flat data
      },
      {
        header: 'Asunto',
        accessorKey: 'asunto', //simple accessorKey pointing to flat data
      },
      {
        header: 'Observación',
        accessorKey: 'observacion', //simple accessorKey pointing to flat data
      },
      {
        header: 'Cedula',
        accessorKey: 'cedula', //simple accessorKey pointing to flat data
      },
      {
        header: 'Dirección',
        accessorKey: 'direccion', //simple accessorKey pointing to flat data
      },
      {
        header: 'Coordenadas',
        accessorKey: 'coordenadas', //simple accessorKey pointing to flat data
      },
      {
        header: 'Correo',
        accessorKey: 'correo', //simple accessorKey pointing to flat data
      },
      {
        header: 'Teléfono',
        accessorKey: 'telefono', //simple accessorKey pointing to flat data
      },
     
    ],
    [],);

    return[columnsUsoSuelo,columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones]
}
