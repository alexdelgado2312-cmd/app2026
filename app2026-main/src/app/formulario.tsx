import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";

export default function Formulario() {
  const router = useRouter();

  // Estados para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [ejemplarFavorito, setEjemplarFavorito] = useState("");
  const [servicioInteres, setServicioInteres] = useState("");
  const [guardando, setGuardando] = useState(false);

  // Función para guardar en Supabase
  const guardar = async () => {
    if (
      !nombre ||
      !correo ||
      !telefono ||
      !ciudad ||
      !ejemplarFavorito ||
      !servicioInteres
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      setGuardando(true);

      const { data, error } = await supabase
        .from("solicitudes_ecuestres")
        .insert([
          {
            nombre,
            correo,
            telefono,
            ciudad,
            ejemplar_favorito: ejemplarFavorito,
            servicio_interes: servicioInteres,
          },
        ])
        .select();

      if (error) {
        console.log("Error Supabase:", error);
        alert(error.message);
        return;
      }

      const registro = data?.[0];

      // Redirigir a resultado.tsx pasando los datos
      router.push({
        pathname: "/resultado",
        params: {
          id: String(registro.id),
          nombre: registro.nombre,
          correo: registro.correo,
          telefono: registro.telefono,
          ciudad: registro.ciudad,
          ejemplarFavorito: registro.ejemplar_favorito,
          servicioInteres: registro.servicio_interes,
        },
      });
    } catch (error) {
      console.log(error);
      alert("No fue posible guardar la información");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro Ecuestre</Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Alexander Delgado"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: alex@gmail.com"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 3001234567"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />

      <Text style={styles.label}>Ciudad</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Pasto"
        value={ciudad}
        onChangeText={setCiudad}
      />

      <Text style={styles.label}>Ejemplar o andar favorito</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Paso Fino Colombiano"
        value={ejemplarFavorito}
        onChangeText={setEjemplarFavorito}
      />

      <Text style={styles.label}>Servicio de interés</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Pesebreras, Chalanería, Compra"
        value={servicioInteres}
        onChangeText={setServicioInteres}
      />

      <Pressable style={styles.boton} onPress={guardar} disabled={guardando}>
        {guardando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.botonTexto}>Guardar en Supabase</Text>
        )}
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#FFF9F5" },
  titulo: { fontSize: 24, fontWeight: "bold", color: "#3E2723", marginBottom: 20, textAlign: "center" },
  label: { fontSize: 14, fontWeight: "bold", color: "#5A3825", marginTop: 10 },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D7CCC8",
    borderRadius: 12,
    padding: 12,
    marginTop: 5,
  },
  boton: {
    backgroundColor: "#5A3825",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 25,
  },
  botonTexto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
