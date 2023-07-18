import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZI = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{ top: 5, width: 440, fontSize: 12 }}>Artículo 10.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Industrial (ZI):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.1 </Text>
                    Propósito: El propósito primordial de esta zona es permitir el desarrollo de industrias y protegerlas de usos incompatibles que puedan poner en peligro la segundad de la inversión.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.2 </Text>
                    Usos permitidos: Industriales en general, almacenes de depósito. de comercio al por mayor, palios de almacenamiento de "container", equipo de transporte pesado: previo dictamen favorable del Ministerio de Salud y la Dirección de Urbanismo.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.2.1 </Text>
                    Servicios comunales y comerciales de apoyo a la población trabajadora, incluyendo áreas verdes y guarderías infantiles.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.2.2 </Text>
                    La Municipalidad y e! Ministerio de Salud otorgarán la aprobación final de los proyectos de instalaciones industriales sólo cuando de los antecedentes se desprenda con toda claridad que la industria no generara efectos adversos sobre la población de la ciudad, ni sobre la fauna o flora, producción agrícola y forestal, ya sea por las características mismas del proceso, o porque se contemplan debidamente en el proyecto las medidas de control de contaminación ambiental.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.3 </Text>
                    Usos condicionales:
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.3.1 </Text>
                    Comercio menor y otros servicios que sean necesarios para el buen funcionamiento del conjunto de las industrias y para servir a la población que allí labora.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.3.2 </Text>
                    Cualquier tipo de actividad que tenga características y efectos similares a los usos permitidos y que no produzcan ruidos, vibraciones, gasee, olores, desechos eliminables por agua peligran, de fuego explosión en mayor grado del que normalmente generarían los usos permitidos.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.4 </Text>
                    Prohibiciones: Quedan absolutamente prohibidas en las zonas industriales las urbanizaciones residenciales, los conjuntos residenciales de cualquier tipo y mataderos
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5 </Text>
                    Requisitos:
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5.1 </Text>
                    Superficie mínima de lote 500m2
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5.2 </Text>
                    Frente Mínimo de lote 15m
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5.3 </Text>
                    Retiros Frontal: 5 m. Los retiros mínimos laterales y posteriores tendrán un mínimo de 3 metros cuando la fachada lateral o posterior tenga una altura hasta los 5 metros por cada metro adicional de altura se agregará unos metros al retiro.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5.4 </Text>
                    Cobertura: No podrá exceder el 60% de la superficie del lote.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5.5 </Text>
                    Carga y descarga: se deberán prever dentro del lote las áreas necesarias para carga y descarga de productos.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.5.6 </Text>
                    Para pequeña industria, servicios comunales y comerciales de apoyo a la industria y los usos condicionales podrán solicitar por vía de excepción la reducción de normas..
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.6 </Text>
                    Zonas Francas. Se aplicarán las normas generales de urbanización industrial. Para el caso de condominios industriales en esta zona se estudiarán en forma individual.
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>19.6.1 </Text>
                    Usos condicionales. Agricultura y patios de furgones.
                </Text>
            </View>

        </>
    )
}
