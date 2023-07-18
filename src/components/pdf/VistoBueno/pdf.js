import React from "react";
import { Document, Page, Text, View, Image, PDFViewer ,Font,Link} from "@react-pdf/renderer"; 
import LogoMuni from '../../../assets/escudo.png'
import raya from '../../../assets/raya.png'
import arial from "../../../assets/Fonts/arial.ttf";
import ArialCEBold from "../../../assets/Fonts/ArialCEBold.ttf";
import ArialItalic from "../../../assets/Fonts/ArialItalic.ttf"; 
import { getDate } from "../UsoSuelo/PDFDetails";

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
  export function generateDocID(id) {
    return `DIM-VBU-${id?.toString().padStart(4, '0')}-${new Date().getFullYear()}`
  }
  function getDia(dia){
    const dias={
        0:'Domingo',
        1:'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4:'Jueves',
        5:'Viernes',
        6:'Sábado',
    }
    return dias[dia];
  }

  const zonas={
    'ZCR':'Zona Comercial Residencial','ZCL':'Zona Comercio Local','Z.C.C.':'Zona Comercial Central','ZH':'Zona Hotelera',
    'Zl': 'Zona Industrial','ZPF': 'Zona Protección Forestal','ZPI': 'Zona Pública Institucional','ZP': 'Zona Portuaria',
    'ZRE': 'Zona Recreativa','ZE': 'Zona Especial','ZAP': 'Zona de Apoyo Portuario', 'ZFD': 'Zona Futuro Desarrollo',
    'ZST': 'Zona Servicio Turístico','ZRA': 'Zona Residencial Alta','ZRM': 'Zona Residencial Media','ZRB': 'Zona Residencial Baja'
  }

  function formatZone(zona){
    return zona?.split('').map((item)=>{return `${item}.`}).join('');
  }

  
  function printZones(zona){
    const temp=zona.substring(0,zona.length-1).split(',')
    return temp?.map((item,index)=>{
      return index!==temp?.length-1?`${formatZone(item)} (${zonas[item]}), `
      :`y ${formatZone(item)} (${zonas[item]})`
    })
   }

   
  
export function VistoBuenoPDF({data}) {
  
    return (
<PDFViewer style={{ width: "100%", height: "90vh" }}>
        <Document>
            <Page size="A4" style={{paddingRight:40,display:"flex",flexDirection:'column',backgroundColor:"#fffefe"}}>{/*#fefffc */}
                {/*contenedor del título e imagen*/ }   
                <View style={{display:"flex",flexDirection:'row'}}>
                  <Image  src={LogoMuni}            style={{ width: 55, height: 80, top: 12,left:65,}}></Image>
 {/*contenedor de los escritos en el título*/ }           
 <View style={{flex:2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Text style={{ flex: 1, fontSize: 15
              , top: 15, textDecoration: 'underline',
              fontFamily: "Arial CE BOLD"}}>
              MUNICIPALIDAD DEL CANTON CENTRAL DE LIMON
            </Text>
            <Text style={{ flex: 1, fontSize: "11px"
              , top: 15}}>
              Unidad Técnica y Estudio
            </Text>
            <Text style={{ flex: 1, fontSize: "11px"
              , top: 8,}}>
              Teléfono 2758-44-44 Ext. 202-210–216
            </Text>
            <Text style={{ flex: 1, fontSize: "11px"
              , top: 2,}}>
              E-mail: <Link src="nam.municipalidadlimon@gmail.com">nam.municipalidadlimon@gmail.com</Link>
            </Text> 
            </View>{/*contenedor de los escritos en el título*/ }
            
</View>
<Text style={{ fontSize: 12 , top: -3,left:380, textDecoration: 'underline',
              fontFamily: "Helvetica-Bold"}}></Text>
<Image  src={raya}
            style={{ width: 460, height: 3, top: 15,left:65, }}></Image>

<View>
    <Text style={{ fontSize: 12 , top: 22,left:310,
              fontFamily: "Helvetica"}}>Limón, {getDia(new Date().getDay())} {getDate()}</Text></View>

<View>
    <Text style={{ fontSize: 15 , top: 40,left:210,textDecoration: 'underline',
              fontFamily: "Arial CE BOLD"}}>{generateDocID(data?.id)}</Text></View>       

<View>
    <Text style={{ fontSize: 12 , top: 60,left:70,
              fontFamily: "Arial CE BOLD"}}>Información Registro Público</Text></View> 
<View>
    <Text style={{ fontSize: 12 , top: 62,left:70,
              fontFamily: "Arial CE BOLD"}}>Nombre Propietario:   
    <Text style={{ fontSize: 12 , top: 62,left:70,
              fontFamily: "Arial"}}>        {data?.nombrePropietario}</Text> </Text>
</View> 

<View>
    <Text style={{ fontSize: 12 , top: 64,left:70,
              fontFamily: "Arial CE BOLD"}}>Cédula de identidad:   
    <Text style={{ fontSize: 12 , top: 64,left:70,
              fontFamily: "Arial CE BOLD"}}>        {data?.cedulaPropietario}</Text> </Text>
</View> 

<View>
    <Text style={{ fontSize: 12 , top: 66,left:70,
              fontFamily: "Arial CE BOLD"}}>Proyecto o Actividad:      
      <Text style={{ fontSize: 12 , top: 66,left:70,
              fontFamily: "Arial CE BOLD",}}>      <Text style={{ fontSize: 12 , top: 66,left:70,
                fontFamily: "Arial CE BOLD",textDecoration: 'underline'}}>{data?.nombreProyecto}</Text></Text></Text>
</View> 



<View>
    <Text style={{ fontSize: 12 , top: 68,left:70,
              fontFamily: "Arial CE BOLD"}}>Plano Catastrado #:               
      <Text style={{ fontSize: 12 , top: 66,left:70,
              fontFamily: "Arial"}}>         {data?.planoCatastro}</Text> </Text>
</View>

<View>
    <Text style={{ fontSize: 12 , top: 70,left:70,
              fontFamily: "Arial CE BOLD"}}>Finca:               
      <Text style={{ fontSize: 12 , top: 66,left:70,
              fontFamily: "Arial"}}>                                {data?.planoCatastro}</Text> </Text>
</View>


<View>
    <Text style={{ fontSize: 12 , top: 72,left:70,
              fontFamily: "Arial CE BOLD"}}>Nombre Solicitante:                       
      <Text style={{ fontSize: 12 , top: 66,left:70,
              fontFamily: "Arial"}}>         {data?.nombreSolicitante}</Text> </Text>
</View>


<View>
    <Text style={{ fontSize: 12 , top: 74,left:70,
              fontFamily: "Arial CE BOLD"}}>Cédula de identidad:                              
      <Text style={{ fontSize: 12 , top: 66,left:70,
              fontFamily: "Arial CE BOLD"}}>       {data?.cedula}</Text> </Text>
</View>


<View style={{width:500}}>
    <Text style={{ fontSize: 12 , top: 76,left:70,
              fontFamily: "Arial CE BOLD"}}>Dirección:                       
      <Text style={{ fontSize: 12 , top: 66,left:70,width:50,borderStyle: "solid", borderColor: "black",borderWidth: 1,
              fontFamily: "Arial"}}>                         {data?.direccionInmueble}
</Text> </Text>
</View >
<View style={{width:'100%',top:110,left:15, fontSize:12,fontFamily:'Arial',display:'flex',alignItems:'center'
}} >
<Text style={{fontFamily:'Arial CE BOLD'}}>RESOLUCIÓN PERMISO DE UBICACIÓN</Text>
<Text>(Según Plan Regulador y Reglamento N°39472-S)</Text>
</View>


<View style={{width:'87%',top:135,left:60, fontSize:12,fontFamily:'Arial',display:'flex',alignItems:'center'
}} >
<Text style={{fontFamily:'Arial CE BOLD',textAlign: 'justify'}}>En cumplimiento con el Plan Regulador y Reglamento N°39472-S - 39728 -S, la Unidad Técnica y Estudio resuelve <Text style={{fontFamily:'Arial CE BOLD',textDecoration: 'underline',}}>OTORGAR</Text> el Visto Bueno de Ubicación a la actividad o establecimiento de <Text style={{fontFamily:'Arial CE BOLD',textDecoration: 'underline',}}>{data?.nombreProyecto}</Text>, cuya ubicación según el Plan Regulador de Limón vigente se encuentra en {data?.zona?.split(',').length>1?printZones(data?.zona).join(''):(formatZone(data?.zona))}. </Text>
</View>

<View style={{width:'87%',top:160,left:55, fontSize:12,fontFamily:'Arial',display:'flex',alignItems:'center',textAlign: 'justify'}} >
<Text style={{fontFamily:'Arial CE BOLD'}}>Así Mismo queda circunscrita a las Regulaciones, Ponderaciones de la Unidad de Rentas de la Municipalidad del Cantón Central de Limón y otros entes Públicos cumplimiento que por ley correspondan.</Text>
</View>

<View style={{width:'87%',top:180,left:60, fontSize:12,fontFamily:'Arial',}} >
<Text>Sin más. Se despide,</Text>
</View>

<View style={{top: 220,left:200, width:440,textAlign: 'justify'}}>
<Image  src={raya}
            style={{ width: 181, height: -10, left:-5 }}></Image>
<Text  style={{fontFamily: 'Arial CE BOLD',fontSize:13,left:-5}}>Ing. {data?.inge}</Text>.
<Text  style={{fontFamily: 'Helvetica-Oblique',fontSize:12,left:3}}>Jefe/a Unidad Técnica y Estudio</Text>.
</View>

<View style={{top: 250, width:440,textAlign: 'justify',left:66}}>
<Text  style={{fontFamily: 'Arial Italic',fontSize:9,left:-5}}>C/c</Text>.
<Text  style={{fontFamily: 'Arial Italic',fontSize:9,left:-4}}>archivo</Text>.
      
</View>

<View style={{left:75,top:295, width:440, }}>
<Image  src={raya} style={{ width: 440, height: 5, top: 0,left:0, }}></Image>
<Text  style={{fontFamily: 'Arial CE BOLD',fontSize:7,top:5,left:25,color:
'#949494'}}>GRACIAS POR CONTRIBUIR AL CAMBIO DE IMAGEN DEL COMO NOS VEN, Y COMO QUEREMOS QUE NOS VEAN</Text>.
</View>                         
{/* <Text style={{ fontSize: 12 , top: -3,left:380, textDecoration: 'underline',
              fontFamily: "Helvetica-Bold"}}></Text>
             
<Image  src={raya}
            style={{ width: 460, height: 5, top: 15,left:65, }}></Image> */}

{/*cuerpo*/ }  {/* {getCompleteHour()} */}
{/* <Text style={{ textDecoration: 'underline',fontFamily: "Arial CE BOLD", fontSize:15,
top:30,left:172}} >CERTIFICACIÓN DE USO DE SUELO</Text>
<View style={{left:75,top:50, width:440}}>
<Text bold='true' style={{fontSize:12,fontFamily: 'Arial'}}>
<Text style={{fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold',fontSize:12,}}>UNIDAD TÉCNICA Y ESTUDIO.</Text> Limón, a las .

</Text>
</View>
<View style={{left:75,top:60, width:440}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>Se conoce solicitud de la <Text style={{fontFamily: 'Arial CE BOLD', fontSize:12,}}>Sr/a {data?.nombreSolicitante},</Text> cedula de identidad número <Text style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>{idFormat(data?.cedula)},</Text> en donde solicita<Text style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}> {data?.tipoUsoSuelo}</Text>, de la propiedad matrícula <Text style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}> {data?.propiedadMatricula}</Text>, plano catastro No.<Text style={{fontFamily: 'Arial CE BOLD', fontSize:12,}}> L-{data?.planoCatastro}</Text>. <Text style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>“El Uso de Suelo se otorga 
únicamente para tramites de Permiso de Construcción, por lo que al momento 
de tramitar permiso de construcción deberán solicitar nuevamente el uso de 
suelo e indicar el proyecto y los metros cuadrados a desarrollar”</Text>
</Text>
<View style={{top:10, width:440}}>
<Text style={{top:5, width:440,fontSize:12}}>Artículo 24.
<Text style={{fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold',fontSize:12,}}> Zona de Apoyo Portuario (ZAP):</Text>
</Text>
</View>
<View style={{top:25, width:440,textAlign: 'justify'}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>
    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>24.1 </Text> 
    Propósito, Destinar un área apropiada para que se ubiquen en ella todos los usos urbanos conexos con la actividad portuaria.
</Text>
</View>
<View style={{top:45, width:440,textAlign: 'justify'}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>
    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>24.2 </Text> 
    Localización. Al sur de las instalaciones de RECOPE y ubicadas en plano.
</Text>
</View>

<View style={{top:65, width:440,textAlign: 'justify'}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>
    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>24.3 </Text> 
    Usos permitidos. Bodega. Talleres, patios y contenedores, equipo de transporte pesado, oficinas aduanales y gasolineras.
</Text>
</View>
<View style={{top:85, width:440,textAlign: 'justify'}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>
    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>24.4 </Text> 
    Almacenes Fiscales, predios de almacenaje y embalaje.
</Text>
</View>
<View style={{top:100, width:440,textAlign: 'justify'}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>
    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>Resolución: </Text> 
    Informar a la <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>Sr/a {data?.nombreSolicitante}</Text>, cédula de identidad número <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>{data?.cedula}</Text> , en donde solicita<Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}> {data?.tipoUsoSuelo}</Text>, de la propiedad matrícula <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>{data?.propiedadMatricula}</Text>, plano catastro No. <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>{data?.planoCatastro}</Text>, situado en <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,}}>Limón</Text>.
</Text>
</View>

<View style={{top:100, width:440,textAlign: 'justify'}}>

    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,textDecoration: 'underline',}}>**El Uso de Suelo se otorga únicamente para tramites de Permiso de Construcción, 
por lo que al momento de tramitar permiso de construcción deberán solicitar 
nuevamente el uso de suelo e indicar el proyecto y los metros cuadrados a 
desarrollar**</Text>.

</View>
<View style={{top:120, width:440,textAlign: 'justify'}}>
<Text style={{fontFamily: 'Arial',fontSize:12,textAlign: 'justify'}}>
    <Text  style={{fontFamily: 'Arial CE BOLD',fontSize:12,textDecoration: 'underline'}}>El uso de suelo no otorga el permiso de construcción</Text>.
</Text>
</View>

<View style={{top: 180,left:130, width:440,textAlign: 'justify'}}>
<Image  src={raya}
            style={{ width: 181, height: 10, left:-5 }}></Image>
<Text  style={{fontFamily: 'Arial CE BOLD',fontSize:13,left:-5}}>Ing. {nombre}</Text>.
<Text  style={{fontFamily: 'Helvetica-Oblique',fontSize:12,left:3}}>Jefe/a Unidad Técnica y Estudio</Text>.
</View>

<View style={{top: 220, width:440,textAlign: 'justify'}}>
<Text  style={{fontFamily: 'Arial Italic',fontSize:12,left:-5}}>C/c</Text>.
<Text  style={{fontFamily: 'Arial Italic',fontSize:12,left:-4}}>archivo</Text>.
      
</View>
</View>
<View style={{left:75,top:295, width:440, }}>
<Image  src={raya} style={{ width: 440, height: 5, top: 0,left:0, }}></Image>
<Text  style={{fontFamily: 'Arial CE BOLD',fontSize:7,top:5,left:25,color:
'#170580'}}>GRACIAS POR CONTRIBUIR AL CAMBIO DE IMAGEN DEL COMO NOS VEN, Y COMO QUEREMOS QUE NOS VEAN</Text>.
</View> */}
            </Page>
        </Document>
        </PDFViewer>

    )

 
}