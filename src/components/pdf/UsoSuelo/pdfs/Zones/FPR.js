import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop:'20px' },
    unbreakable: { width: '100%', height: 400 }
  });

export const FPR = () => {
    return (
        <>
       
            <View style={styles.breakable}>
                <Text style={{ width: 440, fontSize: 12 }}>Artículo 10.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Residencial Alta (ZRA):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.1 </Text>
                    Propósito: El propósito de esta zona es por un lado prever la ordenada
                    expansión futura de la ciudad y por el otro permitir el uso y consolidación de las
                    áreas servidas con la infraestructura necesaria en un carácter residencial, comercial
                    (minoritario) y de servicios públicos para atender a toda el área de influencia de la
                    ciudad.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    Asimismo, se permite adaptar las densidades y el dimensionamiento de los lotes a
                    las características físicas del terreno y a las condiciones socioeconómicas de la
                    zona.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.2 </Text>
                    Usos permitidos: Comercio menor (pulperías, abastecedor, salón de belleza,
                    barberías bazar, reparadora de calzado y soda).
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.3 </Text>
                    Usos condicionales: Templo, estación de policía, guarderías, talleres de
                    reparación de línea blanca y electrodomésticos, entretenimientos mecánicos y
                    electrónicos, centros deportivos.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.4 </Text>
                    Requisitos: El área frente y forma de los lotes tanto para fraccionamientos
                    como para urbanizaciones se ajustará a lo siguiente:

                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.4.1 </Text>
                    Superficie, frente mínimo y cobertura máxima de edificación:
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>Zona              Área mínima             frente mínimo              densidad</Text>
                </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>Con Serv.         120 M2                           7,50 M                  200Hab/Ha. </Text>

                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>de cloaca </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>Sin Serv.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>de cloaca  </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>  </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, }}>ZRA                  150 M2                           7,50 M                  160Hab/Ha.   </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, top: 10 }}>ZRM                 250 M2                           7,50 M                  100Hab/Ha.   </Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, top: 20 }}>ZRB                  450 M2                          10,00 M                 60Hab/Ha.   </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.4.1 </Text>
                    El área arriba indicada es la mínima, pero esta deberá estar apoyada en pruebas
                    de filtración de suelo.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.4.2 </Text>
                    Retiros mínimos:
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Frontal:         2,50 metros.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Lateral:         no se exige.</Text>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, left: 27, top: 7 }}>Posterior:      3 metros.</Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.4.3 </Text>
                    Área de piso máximo: Tres veces la cobertura máxima.
                    No se excederá a cuatro pisos o 12.50 metros de altura.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.5 </Text>
                    Edificios multifamiliares: Tendrán los mismos requisitos antes mencionados de
                    la zona residencial, además deberá contar con un área de juegos infantiles a razón
                    de 10,00 metros por unidad de vivienda, exceptuando el tamaño de lote que será
                    analizando por la Dirección de Urbanismo del INVU.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>10.6 </Text>
                    Programas de interés social: En toda la zona destinada a asentamiento
                    residencial se podrá ejecutar programas de vivienda de interés social, conforme con
                    lo establecido por el Reglamento para control Nacional de Fraccionamiento y
                    Urbanizaciones en ese tipo de programas.
                </Text>
            </View>


        </>
    )
}
