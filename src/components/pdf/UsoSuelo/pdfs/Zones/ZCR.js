import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZCR = () => {
    return (
        <>
            
                <View style={styles.breakable}>
                    <Text style={{ top: 5, width: 440, fontSize: 12 }}>Artículo 11.
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Comercio Residencial (ZCR):</Text>
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.1 </Text>
                        Propósitos. La zona de comercio residencial tiene como propósito principal aumentar el radio de acción de la zona de comercio central.
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.2 </Text>
                        Lisos permitidos. Todos los usos urbanos a excepción de los merales del 1 al 23 (inclusive).
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.3 </Text>
                        Usos condicionales. Los elementos en el anexo N° I del 12 al 15 18 y 33.
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.4 </Text>
                        Requisitos:
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.4.1 </Text>
                        Superficie frente mínimo y cobertura máxima de edificación
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Zona                  Área                              Frente                    Máxima</Text>
                    </Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>Con Serv.         120m2                              7,5m                        80% </Text>

                    <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>de cloaca </Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>Sin Serv.          150m2                              7,5m                        80%</Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>de cloaca  </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.4.2 </Text>
                        Retiros miminos:
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Frontal:         De acuerdo al alineamiento prevaleciente o por disposición </Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 97, top: 7 }}>municipal expresa, pero no será menor de 2 metros.  vehicular.</Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Lateral:         No se exige.</Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Posterior:      3 metros. </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.4.3 </Text>
                        Área de piso máxima. Cuatro veces la cobertura máxima
                    </Text>
                </View>

                <View style={styles.breakable}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                        <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>11.4.4 </Text>
                        Altura máxima de la estructura. 12.5 metros ó 4 pisos
                    </Text>
                </View>

           
        </>
    )
}
