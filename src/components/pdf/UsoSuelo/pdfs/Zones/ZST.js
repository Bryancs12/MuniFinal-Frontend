import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZST = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{ top: 5, width: 440, fontSize: 12 }}>Artículo 18.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Servicios Turísticos (ZST):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.1 </Text>
                    Propósitos. Dar servicios básicos al Turismo y a la población local.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.2 </Text>
                    Loe alizar ion- Porción de playa de Barrio Cristóbal Colón (Zona destacada en plano)
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.3 </Text>
                    Lisos permitidos. Cafetería, sodas, venias de frutas, ranchos para almuerzo campestre, duchas, vestideros, servicios sanitarios, estacionamiento y primeros auxilios.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.4 </Text>
                    Usos no conforme. Toda aquella actividad que no sea de carácter recreativo turístico.
                </Text>
            </View>
        </>
    )
}
