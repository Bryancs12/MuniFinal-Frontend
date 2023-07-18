import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MaterialReactTable from 'material-react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faPencil, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import { ColumnsTable } from '../Table/ColumnsTable';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { resetPassword } from '../actions/auth';


export const UsersTable = () => {

  const URI = `${process.env.REACT_APP_API_URL}api/auth/`
  const [users, setUsers] = useState([]);
  const [columnsUsoSuelo, columnsVistoBueno, columnsZoni, columnsUsers] = ColumnsTable();
  const dispatch = useDispatch();
  
  const getData = async () => {
    const res = await axios.get(URI)
    setUsers(res?.data)
  }
 

  const handlePasswordReset = (nombreUsuario) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se reiniciara la contrasena por defecto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, reiniciar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetPassword(nombreUsuario))
        Swal.fire(
          'Reiniciada!',
          'La contrasena ha sido reiniciada por defecto.',
          'success'
        )
      }
    })
  }

  const handleDeleteUser = async(nombreUsuario) =>{

    Swal.fire({
      title: 'Estas seguro?',
      text: "Se eliminara el usuario permanentemente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(URI + 'delete/' + nombreUsuario)
       
        const del = users?.filter(u => u.id !== res?.data?.id)
        setUsers(del)
        Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        )
      }
    })

  }

  useEffect(() => {
    //console.log("el objeto ha cambiado")
    getData()
  }, [])




  return (
    <>
      <div className='text-4xl text-center pt-8 pb-8 underline'>
        Lista de usuarios
      </div>

      <MaterialReactTable
        columns={columnsUsers}
        data={users}
        //enableRowSelection //enable some features
        enableColumnOrdering
        enableGlobalFilter={false} //turn off a feature

        initialState={{
          //columnVisibility: { idUnidad: false, plano: false },
          density: 'compact',
          pagination: {
            pageIndex: 0,
            pageSize: 5
          }
        }}

        enableDensityToggle={false}
        enableFullScreenToggle={false}

        displayColumnDefOptions={{
          'mrt-row-actions': {
            header: 'Acciones', //change header text
          },
        }}

        enableRowActions // opcion que activa las acciones de la tabla
        renderRowActions={({ row }) => (
          <div>
             {/* {console.log(row.original)}   */}
            <Tooltip arrow placement='top' title={<h1 className='text-base'>Editar</h1>}>
              <Button>
                <Link to={`/editUser/${row.original.id}`}>
                  <FontAwesomeIcon icon={faPencil} />
                </Link>
              </Button>
            </Tooltip>

            {
              // console.log(row.original.id)
        
              row.original.id !== 25 ?

              <Tooltip arrow placement='top' title={<h1 className='text-base'>Eliminar</h1>}>
              <Button onClick={() => handleDeleteUser(row.original.nombreUsuario) }>
                <Link>
                  <FontAwesomeIcon icon={faTrashCan} />
                </Link>
              </Button>
            </Tooltip>

            :

            <Tooltip arrow placement='top' title={<h1 className='text-base'>Eliminar</h1>}>
              <span>
              <Button disabled>
                <Link>
                  <FontAwesomeIcon icon={faTrashCan} />
                </Link>
              </Button>
              </span>
            </Tooltip>
            }
            

            <Tooltip arrow placement='top' title={<h1 className='text-base'>Reinicio de Contrasena</h1>}>
              <Button onClick={() => handlePasswordReset(row.original.nombreUsuario)}>
                <Link>
                  <FontAwesomeIcon icon={faArrowRotateLeft} />
                </Link>
              </Button>
            </Tooltip>
          </div>
        )}

      />

      <div className='flex justify-center pt-8'>
        <Link to={'/register'}>
          <button className='text-2xl bg-blue-500 w-32 rounded-lg p-2 text-white hover:bg-blue-800'>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>
      </div>
    </>
  )
}
