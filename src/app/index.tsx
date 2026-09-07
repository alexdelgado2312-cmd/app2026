import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Alert, Image } from 'react-native';

export default function HomeScreen() {
  const [nombre, setNombre] = useState('');
  const [ejemplar, setEjemplar] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [servicio, setServicio] = useState('');

  const [resumen, setResumen] = useState<any>(null);

  const handleRealizarPedido = () => {
    if (!nombre || !ejemplar) {
      Alert.alert('Atención', 'Por favor ingresa tu nombre y el ejemplar de interés.');
      return;
    }

    setResumen({
      nombre,
      ejemplar,
      cantidad: cantidad || '1',
      servicio: servicio || 'Visita guiada / Cotización',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* IMAGEN DE ENCABEZADO */}
        <Image
          source={{ uri: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/ce/f4/e1.jpg' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        {/* Encabezado */}
        <Text style={styles.tituloHeader}>Rancho El Legado</Text>
        <Text style={styles.subtituloHeader}>Realiza tu pedido o cotización ecuestre</Text>

        {/* FORMULARIO */}
        <View style={styles.formularioContainer}>
          <Text style={styles.label}>Nombre del Cliente:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Robert Delgado"
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.label}>Ejemplar / Raza:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Paso Fino, Cuarto de Milla"
            value={ejemplar}
            onChangeText={setEjemplar}
          />

          <Text style={styles.label}>Cantidad de Ejemplares / Días:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. 1"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />

          <Text style={styles.label}>Tipo de Servicio / Nota adicional:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Para llevar al criadero, Pesebrera"
            value={servicio}
            onChangeText={setServicio}
          />

          {/* Botón de Confirmación */}
          <Pressable style={styles.boton} onPress={handleRealizarPedido}>
            <Text style={styles.textoBoton}>Realizar Pedido / Reserva</Text>
          </Pressable>
        </View>

        {/* RESUMEN DEL PEDIDO */}
        {resumen && (
          <View style={styles.resumenCard}>
            <Text style={styles.resumenTitulo}>Resumen del pedido</Text>
            <Text style={styles.resumenTexto}><Text style={styles.bold}>Cliente:</Text> {resumen.nombre}</Text>
            <Text style={styles.resumenTexto}><Text style={styles.bold}>Ejemplar:</Text> {resumen.ejemplar}</Text>
            <Text style={styles.resumenTexto}><Text style={styles.bold}>Cantidad:</Text> {resumen.cantidad}</Text>
            <Text style={styles.resumenTexto}><Text style={styles.bold}>Servicio:</Text> {resumen.servicio}</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    padding: 20,
    paddingTop: 30,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  tituloHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  formularioContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444444',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
  },
  boton: {
    backgroundColor: '#5A3825',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resumenCard: {
    marginTop: 25,
    backgroundColor: '#EFEBE9',
    padding: 18,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#5A3825',
  },
  resumenTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 10,
  },
  resumenTexto: {
    fontSize: 15,
    color: '#4E342E',
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});