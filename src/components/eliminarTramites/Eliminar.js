import  { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const EliminarTramites = () => {


    let urlParam = useParams();
    let params = urlParam['*'].split("/");

    console.log(params);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}api/${params[1]}/${params[2]}`).then((response) => {
            Swal.fire({ title: 'Eliminado con exito!', icon: 'success', timer: 2000 })
        })
            .catch((error) => {
                Swal.fire({ title: 'Error al eliminar el registro', icon: 'alert', timer: 2000 })
            });
    }

    useEffect(() => {
        handleDelete()
        window.history.back();
    }, [params[2]]);
}