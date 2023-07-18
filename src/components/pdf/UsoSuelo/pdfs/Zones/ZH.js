import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZH = () => {
    return (
        <>
            <View style={styles.breakable}>
                <Text style={{ width: 440, fontSize: 12 }}>Artículo 14.
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Hotelera (ZH):</Text>
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.1 </Text>
                    Propósitos. El propósito de esta zona es prever cualquier tipo de construcción, originada por la ventaja que ofrece la carretera costera (a Pórtete) y la belleza escénica de la zona. Por lo tanto, se propone un uso que tenga a ofrecer este servicio promoviendo el turismo y el embellecimiento de la ciudad.
                </Text>
            </View>
            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.2 </Text>
                    lisos permitidos. Todos los usos directamente relacionados con la actividad turística, así como el establecimiento de actividad cultural, comerciales similares debidamente autorizados por las entidades que otorgan el permiso de construcción, en lo referente que otorgan el permiso de construcción, en lo referente a requisitos de edificación (Municipalidad de Limón).
                </Text>
            </View>

            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.3 </Text>
                    Usos condicionales. Gasolineras, siempre que la ubicación de la misma, así como los requisitos de segundad que deben tener. Estén de acuerdo a los requisitos mínimos que exige el Ministerio de Recursos Naturales Energía y Minas.
                </Text>
            </View>
            <View style={styles.breakable}>
                <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
                    <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>24.4 </Text>
                    Requisitos. El tamaño de lotes será como mínimo de 500m2 con un frente de 10 metros. Los retiros, coberturas, áreas de piso, alturas de edificaciones, estacionamiento, etc, como también otros requisitos urbanísticos específicos. serán fijadas por la Municipalidad y la Dirección de Urbanismo, así como por otras instituciones relacionadas con este uso.
                </Text>
            </View>
        </>
    )
}
