import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop:'20px' },
    unbreakable: { width: '100%', height: 400 }
  });

export const ZCC = () => {
    return (
        <>
       
            <View style={styles.breakable}>
                <Text style={{  width: 440, fontSize: 12 }}>Artículo 13.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Comercio Central (ZCC):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.1 </Text>
                    Propósitos. La zona comercio central es el área de mayor intensidad de uso en la Ciudad donde el alto cosió de los valores inmobiliarios que resultan de su situación central privilegiada hacen necesario aceptar un aprovechamiento intensivo de la propiedad.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.2 </Text>
                    Usos permitidos. Todos los usos urbanos a excepción de los numerales del I al 23 inclusive del anexo N° I "Lisia de usos".
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.3 </Text>
                    Usos condicionales. Rigen los mismos usos que la zona comercio local.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.4 </Text>
                    Requisitos:
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.4.1 </Text>
                    Superficie frente mínimo y cobertura máxima de edificación
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Zona                  Área                              Frente                    Máxima</Text>
                </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>Con Serv.         120m2                              7,3m                       100% </Text>

                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>de cloaca </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>Sin Serv.          150m2                              7,3m                       100%</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>elísea  </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.4.2 </Text>
                    Retiros miminos:
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Frontal:         Sobre línea de alineamiento vehicular.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Lateral:         No se exige.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Posterior:      No se exige. </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.4.3 </Text>
                    Área de piso máxima. Cuatro veces la cobertura máxima
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>13.4.4 </Text>
                    Altura máxima de la estructura. 4 pisos
                </Text>
            </View>
        </>
    )
}
