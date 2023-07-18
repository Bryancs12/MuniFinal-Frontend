import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});



export const ZE = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{ width: 440, fontSize: 12 }}>Artículo 23.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Especial (Decreto) (ZE):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>23.1 </Text>
                    Propósito. Dar cumplimiento a lo estipulado en el Reglamento de Zonificación de la Playa de Moín publicado por el 1CT. en La Gacela del 13 de mayo de 1980 en virtud de la Ley 2906 del 21 de noviembre de 1961.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>23.2 </Text>
                    Localización: Comprende los terrenos del 1CT ubicadas entre la desembocadura del Rio Moín y el sitio conocido con el nombre de "12 millas o Sivap Moth".
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>23.3 </Text>
                    Regulaciones. Ver el respectivo reglamento para esta zona elaborado por el ICT.
                </Text>
            </View>

        </>
    )
}
