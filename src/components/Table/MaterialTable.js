
import React from 'react'
import MaterialReactTable from 'material-react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileUpload, faPencil, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const MaterialTable = ({ columnas, data, title, path, editButton, tipoTramite, pdf, ubicacion, tramite }) => {
  const { nombre, userRole } = useSelector(state => state.auth)

  return (
    <>
      <div className='text-4xl text-center pt-8 pb-8'>
        {title}
      </div>

      <MaterialReactTable
        columns={columnas}
        data={data}
        enableRowSelection //enable some features
        enableColumnOrdering
        enableGlobalFilter={false} //turn off a feature

        initialState={{
          columnVisibility: { idUnidad: false, plano: false },
          density: 'compact',
          pagination: {
            pageIndex: 0,
            pageSize: 5
          }
        }}

        enableDensityToggle={false}
        enableFullScreenToggle={false}

        displayColumnDefOptions={{ 'mrt-row-actions': { size: 230 } }} //change width of actions column to 300px
        enableRowActions
        renderRowActions={({ row }) => (
          <div className='grid grid-cols-4'>
            <Tooltip arrow placement='top' title={<h1 className='text-xl'>Editar</h1>}>
              {/* Se encerraron los botones en un span por que daba un warning cuando estan disabled */}
              <span>
                <Button>
                  <Link to={`/${editButton}/${row.original.id}`}>
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </Button>
              </span>
            </Tooltip>

            {userRole !== 1
              ?
              <Tooltip arrow placement='top' title={<h1 className='text-xl'>Eliminar</h1>}>
                <span>
                  <Button disabled>
                    <Link onClick={() => Swal.fire({ title: 'Se encuentra en desarrollo', icon: 'warning', timer: 3000, timerProgressBar: true })}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Link>
                  </Button>
                </span>
              </Tooltip>
              :
              <Tooltip arrow placement='top' title={<h1 className='text-xl'>Eliminar</h1>}>
                <span>
                  <Button>
                    <Link to={`/eliminar/${tramite}/${row.original.id}`}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Link>
                  </Button>
                </span>
              </Tooltip>
            }

            {
              !row.original.zona || (userRole === 3 || userRole === 4)
                ? <Tooltip arrow placement='top' title={<h1 className='text-xl'>Pdf</h1>}>
                  <span>
                    <Button disabled>
                      <Link to={`/${pdf}/${row.original.id}`}>
                        <FontAwesomeIcon icon={faFilePdf} className="fa-xl" />
                      </Link>
                    </Button>
                  </span>
                </Tooltip>
                :
                <Tooltip arrow placement='top' title={<h1 className='text-xl'>Pdf</h1>}>
                  <span>
                    <Button>
                      <Link to={`/${pdf}/${row.original.id}`}>
                        <FontAwesomeIcon icon={faFilePdf} className="fa-xl" />
                      </Link>
                    </Button>
                  </span>
                </Tooltip>
            }

            {userRole !== 1
              ?
              <Tooltip arrow placement='top' title={<h1 className='text-xl'>Adjuntar PDF</h1>}>
                <span>
                  <Button disabled>
                    <Link to={`${ubicacion}/${tipoTramite}/${row.original.id}`}>
                      <FontAwesomeIcon icon={faFileUpload} className="fa-xl" />
                    </Link>
                  </Button>
                </span>
              </Tooltip>
              :
              <Tooltip arrow placement='top' title={<h1 className='text-xl'>Adjuntar PDF</h1>}>
                <span>
                  <Button>
                    <Link to={`${ubicacion}/${tipoTramite}/${row.original.id}`}>
                      <FontAwesomeIcon icon={faFileUpload} className="fa-xl" />
                    </Link>
                  </Button>
                </span>
              </Tooltip>
            }



          </div>
        )}

      />

      <div className='flex justify-center pt-8'>
        <Link to={`/${path}`}>
          <Button className='text-2xl bg-blue-500 w-32 rounded-lg p-2 text-white hover:bg-blue-800'>
            <FontAwesomeIcon icon={faPlus} className="fa-lg" />
          </Button>
        </Link>
      </div>
    </>
  )
}

