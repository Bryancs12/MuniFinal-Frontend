import { faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Button, Dropdown, FileInput, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Adjuntos = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/pdfAdjunto/findBy`;
    const URINEW = `${process.env.REACT_APP_API_URL}api/pdfAdjunto/new`;
    const URIDELETE = `${process.env.REACT_APP_API_URL}api/pdfAdjunto/`;

    const navigate = useNavigate();
    const { ubicacion } = useParams();
    const { tipoTramite } = useParams();
    const { id } = useParams();
    const [adjuntos, setAdjuntos] = useState([]);
    const [setModalIsOpen] = useState(false);
    //agregar archivo
    const [file, setFile] = useState(null);
    //eliminar archivo
    const [selectedId, setSelectedId] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };

    const getByTramite = async () => {
        const res = await axios.get(`${URI}/${tipoTramite}/${id}`)
        setAdjuntos(res.data)
    }

    //metodo para adjuntar pdf
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    //Metodo para eliminar pdf
    const handleRecordChange = (event) => {
        setSelectedId(event.target.value);
    };

    useEffect(() => {
        fetchRecords()
        getByTramite()
    }, []);


    const handleUpload = () => {
        if (file != null) {

            const pdf = new FormData();

            if (ubicacion === 'usoSuelo' || ubicacion === 'vistoBueno' || ubicacion === 'zonificacion' || ubicacion === 'zonificacionvb' || ubicacion === 'inspecciones') {
                console.log("a");
                pdf.append(tipoTramite, id)
            } else {
                console.log("b");
                pdf.append('idGenerales', id)
            }
            pdf.append('pdf', file)
            axios.post(URINEW, pdf)
                .then((response) => {
                    Swal.fire({ title: 'Adjuntado con exito!', icon: 'success', timer: 2000 })
                    fetchRecords();
                })
                .catch((error) => {
                    Swal.fire({ title: 'Error al adjuntar el archivo', icon: 'alert', timer: 2000 })
                });
        }
    };

    //ACTUALIZA LOS DATOS
    const fetchRecords = () => {
        axios.get(`${URI}/${tipoTramite}/${id}`)
            .then((response) => {
                setAdjuntos(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener los registros:', error);
            });
    };

    const handleDelete = () => {
        axios.delete(URIDELETE + selectedId).then((response) => {
            Swal.fire({ title: 'Eliminado con exito!', icon: 'success', timer: 2000 })
            fetchRecords();
        })
            .catch((error) => {
                Swal.fire({ title: 'Error al eliminar el registro', error, icon: 'alert', timer: 2000 })
            });
    }

    const goBack = () => {
        window.history.back();
    };

    const arrayAdjuntos = Object.values(adjuntos)

    return (
        <>
            <Modal show={openModal} size="xl" >
                <Modal.Body>

                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Documentos adjuntos</h3>


                        <div className="flex items-center gap-4 mb-6">
                            <Dropdown label="Adjuntos disponibles" size="sm" placement="right" style={{ backgroundColor: '#226AF3' }}>
                                <Dropdown.Header style={{ backgroundColor: '#f8f8f8' }}>
                                    <span className="block truncate text-sm font-medium">
                                        {arrayAdjuntos[0]?.id == null ? 'No tiene archivos adjuntados a este tramite' : 'Selecciona archivo para descargar'}
                                    </span>
                                </Dropdown.Header>
                                {arrayAdjuntos.map((item, index = 0) => (
                                    <Dropdown.Item onClick={() => navigate(`/abrirArchivo/${arrayAdjuntos[index]?.name}/${arrayAdjuntos[index]?.id}`)}> {arrayAdjuntos[index]?.name} </Dropdown.Item>
                                ))}
                            </Dropdown>
                        </div>

                        <div className='flex wr-6'>
                            <FileInput id="file" onChange={handleFileChange} className='w-full mr-6' />
                            <Button onClick={handleUpload} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
                                <FontAwesomeIcon icon={faFloppyDisk} className="fa-xl" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <select value={selectedId} onChange={handleRecordChange} class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >Seleccionar archivo a eliminar</option>
                                {adjuntos.map((e) => (
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                ))}
                            </select>
                            <Button onClick={handleDelete} gradientMonochrome="failure"><FontAwesomeIcon icon={faTrash} className="fa-xl" /></Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            &nbsp;
                            <a onClick={goBack} className="block truncate text-lg font-medium text-black-1000 hover:underline">
                                Salir
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    )
}