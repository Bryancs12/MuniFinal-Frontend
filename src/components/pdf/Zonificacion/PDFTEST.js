import React from "react";
import { Document, Page, Text, View, Image, PDFViewer } from "@react-pdf/renderer"; //View"../../../../assets/ciudad vida.png ../../../../assets/muni.png"
import LogoMuni from '../../../assets/escudo.png'
import LogoCiudad from '../../../assets/ciudad vida.png'
import LogoFooter from '../../../assets/footer.png'
import { generateDocID, getDate } from "../UsoSuelo/PDFDetails";
import { useSelector } from "react-redux";

// const tramite = ["TRAMITE","Nombre Solicitante", "Cédula", "Finca", "Derechos", "Plano Catastro", "Área de Plano", "Distrito", "Dirección", "Nombre Propietario", "Cédula"];
// const condEsp = ["Tipo de Ruta", "Zona 6", "Afectado Humedal", "ZMT"];
// const zonificaciones=[{numero:'dato del plano',area:500}];
// const zonas=[{numero:'tipo de zona',area:'250 m2',porcentaje:'50%'},{},{}];
// const terrenos=[{zona :'Zona Residencial Baja',sigla:'ZRB'},{zona :'Zona Residencial Media ',sigla:'ZRM'},{zona :'Zona Residencial Alta',sigla:'ZRA'},{zona :'Zona Comercio Residencial',sigla:'ZCR'},{zona :'Zona Comercio Central',sigla:'ZCC'},{zona :'Zona Comercio Loca',sigla:'ZCL'},{zona :'Zona Publica Institucional ',sigla:'ZPI'},{zona :'Zona Hotelera',sigla:'ZH'},{zona :'Zona Servicios Turísticos',sigla:'ZST'},{zona :'Zona Industrial',sigla:'ZI'},{zona :'Zona Portuaria',sigla:'ZP'},{zona :'Zona de Apoyo Portuario',sigla:'ZAP'},{zona :'Zona Especial (Decreto)',sigla:'ZE'},{zona :'Zona Recreativa',sigla:'ZR'},{zona :'Zona Protección Forestal',sigla:'ZPF'},{zona :'Fuera del Plan Regulador',sigla:'FPR'}];

function MyDocument({data}) {


  const { nombre, apellidos, gradoUsuario} = useSelector(state => state.auth)

  //SUMAR AREAS
  var arrayAreas = data?.area?.split(",");
  console.log(arrayAreas);
  arrayAreas?.pop();

  let arrayTemp = []

  arrayAreas?.forEach((item)=>{
    arrayTemp?.push(parseInt(item));
  })

  let areaTotal = 0;

  arrayTemp?.forEach((item)=>{
    areaTotal += item;
  })

console.log(areaTotal);

//ZONAS SEPARADAS
var arrayZonas = data?.zona?.split(",");
arrayZonas?.pop();

  return (
    <PDFViewer style={{ width: "100%", height: "90vh" }}>
    <Document>
      <Page size="A4" style={{paddingRight:40}}>
        <View style={{ display: "flex", flexDirection: "row", height: 55 }}>
          <Image
            src={LogoCiudad}
            style={{ width: 125, height: 105, top: -10 }}
          />
          <View
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              fontFamily: "Times-Bold",
              alignItems: "center",
            }}
          >
            <Text style={{ flex: 1, fontSize: 13
              , top: 27 }}>
              MUNICIPALIDAD DEL CANTON CENTRAL DE LIMON
            </Text>
            <Text style={{ flex: 1, fontSize: 14, top: 15 }}>
              Zonificaciones Plan Regulador
            </Text>
          </View>
          <Image
            src={LogoMuni}
            style={{ width: 80, height: 60, top: 5 }}
          />
        </View>

        <View style={{ marginLeft: "50px", marginRight: "10px" }}>
          {/* encabezado fecha */}
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Helvetica-Bold",
              top: 20,
              fontSize: 11,
            }}
          >
            <Text style={{ left: "69%" }}>Limón, {getDate()}</Text>
            <Text style={{ left: "79%" }}>{generateDocID(data?.id)}</Text>
          </View>

          {/* Encabezado ingeniero */}
          <View
            style={{
              top: "3%",
              marginLeft: "10px",
              fontSize: 11,
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>Ingeniero</Text>
            <Text>Nicolas Dimitri Simpson Edwards</Text>
            <Text>Unidad Técnica y Estudio</Text>
            <Text>Municipalidad del Cantón Central de Limón </Text>
          </View>

          {/* texto que a nadie le importa */}
          <View
            style={{
              top: "5%",
              fontSize: 11,
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              Estimado Señor:
            </Text>
            <Text>
              Reciba un cordial saludo. Mediante la presente adjunto
              <Text style={{ fontFamily: "Helvetica-Bold" }}>
                {" "}
                expediente y zonificación{" "}
              </Text>
              solicitada a nombre de:
            </Text>
          </View>

          {/* Contenedor de los cuadros para gays*/}
          <View
            style={{ display:'flex', flexDirection:'row',marginTop: "-15px", marginLeft: "10px" }}
            className="container"
          >
            <View style={{ top: "7%",flex:1 }} className="firstContainer">
              <View className="topTable">
                  <View //descripción va en 42 Nombre solicitante
                    style={{ top:"7.2%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#A9D08E",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 10,fontFamily: "Helvetica-Bold",}}>
                      TRAMITE
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#A9D08E" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 10,fontFamily: "Helvetica"}}
                        >
                        Uso de suelo
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"6.8%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Nombre Solicitante
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                          {data?.nombreSolicitante}
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"6.4%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Cédula
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                            {data?.cedula}  
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"6%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Finca 
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                              {data?.propiedadMatricula}    
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"5.6%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Derechos
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                        000
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"5.2%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Plano Catastro 
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                            {data?.planoCatastro}   
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"4.8%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Área de Plano
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                           {areaTotal}    
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"4.4%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Distrito
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                           {data?.distrito}   
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"3.8%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 42,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Dirección
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 42, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                         {data?.direccion}   
                      </Text>
                    </View>
                  </View>

                  <View //descripción va en 42
                    style={{ top:"2.7%", display: "flex", flexDirection: "row" }}
                    className="firstHeader"
                    >
                    <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,height: 16,
                        width: 105, backgroundColor:  "#9AC2E6",
                      }}>
                      <Text style={{left: "3%", top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",}}
                     >
                        Nombre Propietario
                      </Text>
                    </View>
                    <View style={{left:-1,borderStyle: "solid", borderColor: "black", borderWidth: 1,height: 16, width: 170,
                    backgroundColor: "#9AC2E6" }}
                      >
                      <Text style={{ left: "5%", top: "8%", fontSize: 9,fontFamily: "Helvetica"}}
                        >
                           {data?.nombrePropietario}   
                      </Text>
                    </View>
                  </View>
                {/* ))} */}
              </View>
              
              
              {/* Tabla CONDICIONES ESPECIALES */}
              <View className="midTable" style={{top:-12}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  height: 16, width: 241.7, backgroundColor: "#A9D08E", top: "36%"}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  CONDICIONES ESPECIALES
                </Text>
              </View>
          
                    <View style={{display:'flex',flexDirection:'row', top: "27px"}}>
                         <View style={{borderStyle:'solid',borderColor:'black',
                           borderWidth:1,height:16, width:105,
                             backgroundColor:'#9AC2E6'}}>
                          <Text style={{left:'3%', top:'5%',fontSize: 9,fontFamily: "Helvetica-Bold"}}>
                           Tipo de Ruta
                          </Text>
                       </View>
                       <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,
                        height: 16,width: 170, backgroundColor:"#9AC2E6",left:-1}} >
                      <Text style={{ left: "3%", top: "5%", fontSize: 9 }}> 
                        {data?.tipoRuta}
                      </Text>
                    </View>
                  </View> 

                  <View style={{display:'flex',flexDirection:'row', top: "10.6%"}}>
                         <View style={{borderStyle:'solid',borderColor:'black',
                           borderWidth:1,height:16, width:105,
                             backgroundColor:'#9AC2E6'}}>
                          <Text style={{left:'3%', top:'5%',fontSize: 9,fontFamily: "Helvetica-Bold"}}>
                          Zona 6
                          </Text>
                       </View>
                       <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,
                        height: 16,width: 170, backgroundColor:"#9AC2E6",left:-1}} >
                      <Text style={{ left: "3%", top: "5%", fontSize: 9 }}> 
                      {data?.zona6}
                      </Text>
                    </View>
                  </View> 

                  <View style={{display:'flex',flexDirection:'row', top: "10.2%"}}>
                         <View style={{borderStyle:'solid',borderColor:'black',
                           borderWidth:1,height:16, width:105,
                             backgroundColor:'#9AC2E6'}}>
                          <Text style={{left:'3%', top:'5%',fontSize: 9,fontFamily: "Helvetica-Bold"}}>
                          Afectado Humedal
                          </Text>
                       </View>
                       <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,
                        height: 16,width: 170, backgroundColor:"#9AC2E6",left:-1}} >
                      <Text style={{ left: "3%", top: "5%", fontSize: 9 }}>
                        {data?.afectadoHumedal}
                      </Text>
                    </View>
                  </View> 

                  <View style={{display:'flex',flexDirection:'row', top: "9.6%"}}>
                         <View style={{borderStyle:'solid',borderColor:'black',
                           borderWidth:1,height:16, width:105,
                             backgroundColor:'#9AC2E6'}}>
                          <Text style={{left:'3%', top:'5%',fontSize: 9,fontFamily: "Helvetica-Bold"}}>
                           ZMT
                          </Text>
                       </View>
                       <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,
                        height: 16,width: 170, backgroundColor:"#9AC2E6",left:-1}}>
                      <Text style={{ left: "3%", top: "5%", fontSize: 9 }}> 
                      {data?.zmt}
                      </Text>
                    </View>
                  </View> 

              </View>
              <View style={{display:'flex',flexDirection:'row', top: "22px"}}>
                         <View style={{borderStyle:'solid',borderColor:'black',
                           borderWidth:1,height:40, width:105,
                             backgroundColor:'#9AC2E6',}}>
                          <Text style={{left:'3%', top:'5%',fontSize: 9,fontFamily: "Helvetica-Bold"}}>
                           Nota:
                          </Text>
                       </View>
                       <View style={{ borderStyle: "solid", borderColor: "black",borderWidth: 1,
                        height: 40,width: 170, backgroundColor:"#9AC2E6",left:-1}}>
                      <Text style={{ left: "3%", top: "5%", fontSize: 9 }}> 
                      Uso de suelo
                      </Text>
                    </View>
                  </View>
            </View>
                  {/* tabla zonificacion */}
            <View style={{ top: "7.1%",flex:1,  left:2}}>
              <View style={{}}> {/* primera sub tabla*/ }
            <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  height: 16, width: 226, backgroundColor: "#A9D08E",top:17,left: 10 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZONIFICACION
                </Text>
              </View>
              <View className="areaYplano" style={{right:2,display:'flex', flexDirection:'row',width: 228, top:-3.9}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  Plano
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  Área
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                   flex:1, backgroundColor: "#9AC2E6",top:20,left: 10, height:16,}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  %
                </Text>
              </View>
              </View>
              
                <View className="areaYplano" style={{right:2,display:'flex', flexDirection:'row',width: 228, top:-5}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {data?.usosuelo?.planoCatastro}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {areaTotal}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                   flex:1, backgroundColor: "#9AC2E6",top:20,left: 10, height:16,}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  100%
                </Text>
              </View>
              </View>

              <View className="ZonaYplano" style={{right:2,display:'flex', flexDirection:'row',width: 228, top:-6}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  Zona
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  Área
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                   flex:1, backgroundColor: "#9AC2E6",top:20,left: 10, height:16,}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  %
                </Text>
              </View>
              </View>
              
                <View className="areaYplano" style={{right:2,display:'flex', flexDirection:'row',width: 228, top:-6.9}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayZonas ? arrayZonas[0] : ''}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayAreas ? arrayAreas[0] : ''}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                   flex:1, backgroundColor: "#9AC2E6",top:20,left: 10, height:16,}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayAreas ? arrayAreas[0] != null ? ((arrayAreas[0] / areaTotal )*100).toFixed(2) : '' : ''}%
                </Text>
              </View>
              </View>

              <View className="areaYplano" style={{right:2,display:'flex', flexDirection:'row',width: 228, top:-8}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayZonas ? arrayZonas[1] : ''}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                 {arrayAreas ? arrayAreas[1] : ''}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                   flex:1, backgroundColor: "#9AC2E6",top:20,left: 10, height:16,}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayAreas ? arrayAreas[1] != null ? ((arrayAreas[1] / areaTotal )*100).toFixed(2) : '' : ''}%
                </Text>
              </View>
              </View>

              <View className="areaYplano" style={{right:2,display:'flex', flexDirection:'row',width: 228, top:-9}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                      {arrayZonas ? arrayZonas[2] : ''}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayAreas ? arrayAreas[2] : ''}
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                   flex:1, backgroundColor: "#9AC2E6",top:20,left: 10, height:16,}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,
                    textAlign:'center' }}>
                  {arrayAreas ? arrayAreas[2] != null ? ((arrayAreas[2] / areaTotal )*100).toFixed(2) : '' : ''}%
                </Text>
              </View>
              </View>
            </View>{/*Aquí termina la primera sub tabla*/}

            {/*Aquí empieza la segunda sub tabla*/}
              <View style={{ top: "-2.3%",flex:1}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  height: 22.2, width: 226, backgroundColor: "#A9D08E",top:17,left: 10 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZONAS DEL PLAN REGULADOR
                </Text>
              </View>
        

                <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:-4}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Residencial Baja
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZRB
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:-2}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Residencial Media
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZRM
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:-1.5}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Residencial Alta
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZRA
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:0}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Comercio Residencia
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZCR
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:1}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>Zona Comercio Central
                  
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZCC
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:2}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Comercio Local 
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZCL
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:3}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Publica Institucional 
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZPI
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:4}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Hotelera
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZH
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:5}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Servicios Turísticos
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZST
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:6}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                 Zona Industrial
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZI
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:6.6}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Portuaria
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZP
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:8.5}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona de Apoyo Portuario
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZAP
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:9}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Especial (Decreto)
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                 ZE
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:10}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                 Zona Recreativa 
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZR
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:11}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:16}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Zona Protección Forestal 
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:16, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  ZPF
                </Text>
              </View>
              </View>

              <View className="terrenos" style={{right:2,display:'flex', flexDirection:'row',width: 227, top:12}}>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                 flex:1, backgroundColor: "#9AC2E6",top:20,left: 12 ,height:15}}>
                <Text style={{left: "3%",top: "5%",fontSize: 9
                    }}>
                  Fuera del Plan Regulador
                </Text>
              </View>
              <View style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1,
                  flex:1,height:15, backgroundColor: "#9AC2E6",top:20,left: 11 }}>
                <Text style={{left: "3%",top: "5%",fontSize: 9,fontFamily: "Helvetica-Bold",
                    textAlign:'center' }}>
                  FPR
                </Text>
              </View>
              </View>

              </View>
            </View>
          </View>

              <Text style={{top: "23%",fontSize: 11,fontFamily: "Helvetica",left:10
                     }}>Quedo atento a cualquier duda, consulta o sugerencia. Sin otro particular, se despide;</Text>
              <Text style={{top: "23%",left:10,fontSize: 11,fontFamily: "Helvetica",
                    }}>Atentamente,</Text>
          <View
            style={{
              top: "35%",
              marginLeft: "10px",
              fontSize: 11,
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>
              {
              gradoUsuario === 'Ingeniero' ? 'Ing.' : gradoUsuario === 'Técnico' ? 'Téc.' : gradoUsuario === 'Master' ? 'MSc.' : null
              } {nombre} {apellidos}
            </Text>
            <Text>Dirección de Ingeniería</Text>
            <Text>Municipalidad del Cantón Central de Limón</Text>
            <Text>Cc/ Archivo </Text>
          </View>
            <Text style={{top: "40%",left:10,fontSize: 10,fontFamily: "Helvetica-Bold",textAlign:'center'
                    }}>“Gracias por contribuir al cambio de imagen de cómo nos ven y como queremos que nos vean” Limón Ciudad de la Vida</Text>
            <Image
            src={LogoFooter}
            style={{ width: '119.6%', height: 25, top: 230,left:-50 }}
          />
        </View>
      </Page>
    </Document>
    </PDFViewer>
  );
}

export default MyDocument;
