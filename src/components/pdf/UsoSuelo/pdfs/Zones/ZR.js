import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZR = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{  width: 440, fontSize: 12 }}>Artículo 22.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zonas Recreativas (ZR):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>22.1 </Text>
                    Propósito. Las áreas verdes o recreativas tienen por objeto proveer zonas convenientes localizadas para la instalación de facilidades recreativas y culturales públicas de acuerdo a las necesidades de la población.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>22.2 </Text>
                    Permitidos. Los terrenos y edificios principales o complementarios se usarán únicamente para los fines expuestos a continuación:
                </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27 }}>-	Centros comunales y recreativos.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27 }}>-	Facilidades recreativas públicas.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27 }}>-	Museos botánicos.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27 }}>-	Comercio menor y otros servicios que sean necesarios para el buen </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 35 }}>funcionamiento de estas áreas</Text>
            </View>


            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>22.3 </Text>
                    Requisitos. Los requisitos que deben cumplir las edificaciones y usos en las áreas verdes los fijará la Municipalidad en consulta a la Dirección de Urbanismo.
                </Text>
            </View>
        </>
    )
}
