import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZPI = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{ top: 5, width: 440, fontSize: 12 }}>Artículo 21.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Publica Institucional  (ZPI):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>21.1 </Text>
                    Propósito. Las zonas de uso público tienen por objeto el establecimiento de facilidades culturales, educativas, recreativas y administrativas convenientes para un apropiado desarrollo de la ciudad.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>21.2 </Text>
                    Usos permitidos en estas zonas, es usarán los edificios y terrenos únicamente para los fines indicados a continuación:
                </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Oficinas de Administración Pública.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Instituciones de educación pública..</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Museos, bibliotecas y centros comunales.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Servicio público de tipo asistencial y hospitalario</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Instituciones públicas de beneficencia.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Estaciones de bomberos y delegaciones de policía.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>-	Otros usos públicos no molestos.</Text>
            </View>


            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>21.3 </Text>
                    lisos no conformes. Actividades que requieran de instalaciones permanentes.
                    ZST

                </Text>
            </View>
        </>
    )
}
