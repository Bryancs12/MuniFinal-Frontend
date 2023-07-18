import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});


export const ZCL = () => {
  return (
    <>
    <View style={styles.breakable}>
        <Text style={{  width: 440, fontSize: 12 }}>Artículo 12.
            <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Comercio Local (ZCL):</Text>
        </Text>
    </View>


    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.1 </Text>
            Propósito. El comercio local son áreas que se localizan en todos los sectores de asentamiento residencia con el objeto de proveer servicio a dicha unidad habitacionales.
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.2 </Text>
            Usos perinilidos Todos los usos urbanos a excepción de los numerales del I al 23 inclusive.
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.3 </Text>
            Usos condicionados. Los numerales 12 al 21 y el 23 siempre y cuando no utilice más de cinco empleados, que su operación, almacenamiento de materiales y equipo se realice internamente y las molestias confinables en la propiedad. Cualquier otro servicio o negocio de caracteristícas y efectos similares de los descritos con aceptación previa del Ministerio de Salud y de la Dirección de Urbanismo.
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.4 </Text>
            Requisitos. (Rigen los mismos de la zona comercio-residencial)
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.4.1 </Text>
            Retiros mínimos:
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27}}>Frontal:         2 metros.</Text>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27}}>Lateral:         No se exige.</Text>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27}}>Posterior:      3 metros. </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.4.2 </Text>
            Área de piso máximo. Cuatro veces la cobertura máxima
        </Text>
    </View>
    
    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.4.3 </Text>
            Altura máxima de la estructura
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>12.5 </Text>
            Metros o 4 pisos
        </Text>
    </View>
</>
  )
}
