import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop:'20px' },
    unbreakable: { width: '100%', height: 400 }
  });

export const ZAP = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{  width: 440, fontSize: 12 }}>Artículo 24.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona de Apoyo Portuario (ZAP):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.1 </Text>
                    Propósito, Destinar un área apropiada para que se ubiquen en ella todos los usos urbanos conexos con la actividad portuaria.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.2 </Text>
                    Localización. Al sur de las instalaciones de RECOPE y ubicadas en plano.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.3 </Text>
                    Usos permitidos. Bodega. Talleres, patios y contenedores, equipo de transporte pesado, oficinas aduanales y gasolineras.
                </Text>
            </View>
            
            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.4 </Text>
                    Almacenes Fiscales, predios de almacenaje y embalaje.
                </Text>
            </View>
        </>
    )
}
