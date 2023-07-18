import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, Image, Link, Font, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import arial from "../../../assets/Fonts/arial.ttf";
import ArialCEBold from "../../../assets/Fonts/ArialCEBold.ttf";
import escudo from "../../../assets/escudo.png";
import raya from "../../../assets/raya.png";
import ArialItalic from "../../../assets/Fonts/ArialItalic.ttf";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { generateDocID, getCompleteHour } from './PDFDetails';
import axios from 'axios';
import { ZoneInfo } from './pdfs/GeneralInfo';

Font.register({
  family: 'Arial',
  src: arial,
  fontStyle: 'normal', fontWeight: 700,
});

Font.register({
  family: 'Arial CE BOLD',
  src: ArialCEBold,
  fontWeight: 'normal',
  fontStyle: 'normal',
});
Font.register({
  family: 'Arial Italic',
  src: ArialItalic,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

const styles = StyleSheet.create({
  page: { padding: 60 },
  title: { marginTop: "90%" },
  emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
  breakable: { width: '100%', height: 250, marginTop: "20px",},
  unbreakable: { width: '100%', height: 400, marginTop:"20px"},

});


export const GeneralPDF = () => {

  const URI = 'http://localhost:3001/api/usoSuelo/'
  const { id } = useParams();
  const { nombre } = useSelector(state => state.auth)


  const [usoSuelo, setUsoSuelo] = useState({});
  const [zonaRecibida, setZonaRecibida] = useState(null);
  const [zonas, setZonas] = useState({});

  const getTramiteById = async () => {
    const res = await axios.get(URI + id)
    setUsoSuelo(res.data[0])
  }

  useEffect(() => {
    if (zonaRecibida !== null) {
      const zones = zonaRecibida?.split(",")
      setZonas(zones)
    }
  }, [id, zonaRecibida])

  //console.log(zonas)

  useEffect(() => {
    getTramiteById()
  }, [id])

  useEffect(() => {
    let zonasSinComa = (usoSuelo?.zona)?.replace(/,$/, "")
    //console.log(zonasSinComa)
    setZonaRecibida(zonasSinComa)
  }, [usoSuelo])


  // console.log(usoSuelo.zona)
  // console.log(zonaRecibida)
  // console.log(ZoneInfo['ZPF'])

  if (!zonaRecibida) {
    return (
      <div>
        Cargando...
      </div>
    )
  }

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <Document >
        <Page wrap size="A4" style={{ paddingRight: 40, display: "flex", flexDirection: 'column', backgroundColor: "#ffff", }}> 
        {/* <Page style={styles.page} size="A4" wrap> #fefffc */}
            {/*contenedor del título e imagen*/}
            <View style={{ display: "flex", flexDirection: 'row' }}>
              <Image src={escudo} style={{ width: 55, height: 80, top: 20, left: 65, borderStyle: "solid", borderColor: "black", borderWidth: 1, }}></Image>
              {/*contenedor de los escritos en el título*/}
              <View style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <Text style={{
                  flex: 1, fontSize: 15
                  , textDecoration: 'underline',
                  fontFamily: "Arial CE BOLD"
                }}>
                  MUNICIPALIDAD DEL CANTON CENTRAL DE LIMON
                </Text>
                <Text style={{
                  flex: 1, fontSize: "11px"
                  , top: 15
                }}>
                  Unidad Técnica y Estudio
                </Text>
                <Text style={{
                  flex: 1, fontSize: "11px"
                  , top: 8,
                }}>
                  Teléfono 2758-44-44 Ext. 202-210–216
                </Text>
                <Text style={{
                  flex: 1, fontSize: "11px"
                  , top: 2,
                }}>
                  E-mail: <Link src="nam.municipalidadlimon@gmail.com">nam.municipalidadlimon@gmail.com</Link>
                </Text>
              </View>{/*contenedor de los escritos en el título*/}

            </View>
            <Text style={{
              fontSize: 12, top: -3, left: 380, textDecoration: 'underline',
              fontFamily: "Helvetica-Bold"
            }}>{generateDocID(usoSuelo?.id)}</Text>
            <Image src={raya}
              style={{ width: 460, height: 5, top: 15, left: 65, }}></Image>

            {/*cuerpo*/}
            <Text style={{
              textDecoration: 'underline', fontFamily: "Arial CE BOLD", fontSize: 15,
              top: 30, left: 172
            }} >CERTIFICACIÓN DE USO DE SUELO</Text>
            <View style={{ left: 75, top: 50, width: 440 }}>
              <Text bold='true' style={{ fontSize: 12, fontFamily: 'Arial' }}>
                <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}>UNIDAD TÉCNICA Y ESTUDIO.</Text> Limón, a las {getCompleteHour()}.
              </Text>
            </View>
            <View style={{ left: 75, top: 60, width: 440 }}>
              <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>Se conoce solicitud de la <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Sr/a {usoSuelo?.nombreSolicitante},</Text> cedula de identidad número <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>{usoSuelo?.cedula},</Text> en donde solicita<Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}> {usoSuelo?.tipoUsoSuelo}</Text>, de la propiedad matrícula <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}> {usoSuelo?.propiedadMatricula}</Text>, plano catastro No.<Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}> L-{usoSuelo?.planoCatastro}</Text>. <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>“El Uso de Suelo se otorga
                únicamente para tramites de Permiso de Construcción, por lo que al momento
                de tramitar permiso de construcción deberán solicitar nuevamente el uso de
                suelo e indicar el proyecto y los metros cuadrados a desarrollar”</Text>
              </Text>


              {
                zonas?.map(e => {
                  return ZoneInfo[e]
                })

              }


              {/* { width:440,textAlign: 'justify'} */}

      <View style={styles.unbreakable} wrap={false}>

                <View style={{ width: 440, textAlign: 'justify' }}>
                  <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Resolución: </Text>
                    Informar a la <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Sr/a {usoSuelo?.nombreSolicitante}</Text>, cédula de identidad número <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>{usoSuelo?.cedula}</Text> , en donde solicita<Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}> {usoSuelo?.tipoUsoSuelo}</Text>, de la propiedad matrícula <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>{usoSuelo?.propiedadMatricula}</Text>, plano catastro No. <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>{usoSuelo?.planoCatastro}</Text>, situado en <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Limón</Text>.
                  </Text>
                </View>

                <View style={{ width: 440, textAlign: 'justify' }}>

                  <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, textDecoration: 'underline' }}>**El Uso de Suelo se otorga únicamente para tramites de Permiso de Construcción,
                    por lo que al momento de tramitar permiso de construcción deberán solicitar
                    nuevamente el uso de suelo e indicar el proyecto y los metros cuadrados a
                    desarrollar**</Text>.

                </View>

                <View style={{ width: 440, textAlign: 'justify', marginTop: '20px' }}>
                  <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, textDecoration: 'underline' }}>El uso de suelo no otorga el permiso de construcción</Text>.
                  </Text>
                </View>

                <View style={{ left: 130, width: 440, textAlign: 'justify', top: "60px" }}>
                  <Image src={raya}
                    style={{ width: 181, height: 10, left: -5, }}></Image>
                  <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 13, left: -5 }}>Ing. {nombre}</Text>.
                  <Text style={{ fontFamily: 'Helvetica-Oblique', fontSize: 12, left: 3 }}>Jefe/a Unidad Técnica y Estudio</Text>.
                </View>

                <View style={{ width: 440, textAlign: 'justify', top: '80px' }}>
                  <Text style={{ fontFamily: 'Arial Italic', fontSize: 12, left: -5 }}>C/c</Text>.
                  <Text style={{ fontFamily: 'Arial Italic', fontSize: 12, left: -4 }}>archivo</Text>.

                </View>

                {/* <View style={{ width: 440, marginTop: "50px" }} >
                  <Image src={raya} style={{ width: 440, height: 5, left: 0, }}></Image>
                  <Text style={{
                    fontFamily: 'Arial CE BOLD', fontSize: 7, left: 25, color:
                      '#170580'
                  }}>GRACIAS POR CONTRIBUIR AL CAMBIO DE IMAGEN DEL COMO NOS VEN, Y COMO QUEREMOS QUE NOS VEAN</Text>.
                </View> */}


              </View>
            </View>

          </Page>

        </Document>
      </PDFViewer>
    </>
  )
}
