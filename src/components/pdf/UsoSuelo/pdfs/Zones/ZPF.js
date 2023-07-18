import React from 'react'
import {Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 60 },
    title: { marginTop: "90%" },
    emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
    breakable: { width: '100%', marginTop: '20px' },
    unbreakable: { width: '100%', height: 400 }
});

export const ZPF = () => {
  return (
    <>
    <View style={styles.breakable}>
        <Text style={{  width: 440, fontSize: 12 }}>Artículo 16.
            <Text style={{ fontFamily: 'Arial CE BOLD', fontWeight: 'ultrabold', fontSize: 12, }}> Zona Protección Foresta (ZPF):</Text>
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>16.1 </Text>
            Propósitos. Uso forestal y recreación pasiva.
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>16.2 </Text>
            Usos condicionales. Miradores y senderos peatonales
        </Text>
    </View>

    <View style={styles.breakable}>
        <Text style={{ fontFamily: 'Arial', fontSize: 12, textAlign: 'justify' }}>
            <Text style={{ fontFamily: 'Arial CE BOLD', fontSize: 12, }}>16.3 </Text>
            lisos no conformes. Actividades que requieran de instalaciones permanentes.
            ZST
        </Text>
    </View>
</>
  )
}
