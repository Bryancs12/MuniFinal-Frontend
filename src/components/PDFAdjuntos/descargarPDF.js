import { Document, Image, PDFViewer, Page, View } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DescargarPDF = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/pdfAdjunto/`;
    const { nombre } = useParams();
    const { id } = useParams();
    const [pdfUrl, setPdfUrl] = useState('');
    const array = nombre.split('.');
    const type = array[array.length - 1];

    useEffect(() => {
        const fetchPDF = async () => {
            try {
                const response = await fetch(URI + id);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
            } catch (error) {
                console.error('Error al obtener el archivo:', error);
            }
        };

        fetchPDF();
    }, [id]);

    return (
        <div>
            {type === "pdf" ? (
                <iframe src={pdfUrl} type="application/pdf" width="100%" height="1000px" />
            ) : (
                <PDFViewer style={{ width: "100%", height: "90vh" }}>
                    <Document >
                        <Page>
                            <Image src={pdfUrl} type={`image/${type}`} />
                        </Page>
                    </Document>
                </PDFViewer>

            )}
        </div>
    );

}