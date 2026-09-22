import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Resultado() {
  const router = useRouter();
  const {
    id,
    nombre,
    correo,
    telefono,
    ciudad,
    ejemplarFavorito,
    servicioInteres,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Registro Confirmado!</Text>

      <View style={styles.card}>
        <Text style={styles.registroId}>Solicitud #{id}</Text>
        <Text style={styles.texto}>
          <Text style={styles.bold}>Nombre:</Text> {nombre}
        </Text>
        <Text style={styles.texto}>
          <Text style={styles.bold}>Correo:</Text> {correo}
        </Text>
        <Text style={styles.texto}>
          <Text style={styles.bold}>Teléfono:</Text> {telefono}
        </Text>
        <Text style={styles.texto}>
          <Text style={styles.bold}>Ciudad:</Text> {ciudad}
        </Text>
        <Text style={styles.texto}>
          <Text style={styles.bold}>Ejemplar favorito:</Text> {ejemplarFavorito}
        </Text>
        <Text style={styles.texto}>
          <Text style={styles.bold}>Servicio:</Text> {servicioInteres}
        </Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.push("/registros")}
      >
        <Text style={styles.botonTexto}>Ver Amantes Ecuestres</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF9F5", padding: 20, justifyContent: "center" },
  titulo: { fontSize: 26, fontWeight: "bold", color: "#3E2723", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#FFFFFF", padding: 20, borderRadius: 18, elevation: 3, marginBottom: 20 },
  registroId: { fontSize: 18, fontWeight: "bold", color: "#5A3825", marginBottom: 10 },
  texto: { fontSize: 15, color: "#4E342E", marginBottom: 6 },
  bold: { fontWeight: "bold" },
  boton: { backgroundColor: "#5A3825", padding: 16, borderRadius: 14, alignItems: "center" },
  botonTexto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
