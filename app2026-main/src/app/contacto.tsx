import { StyleSheet, Text, View } from "react-native";

export default function Contacto() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contacto</Text>
      <Text style={styles.subtitulo}>
        Información general de la aplicación.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Universidad</Text>
        <Text style={styles.valor}>Universidad CESMAG</Text>

        <Text style={styles.label}>Programa</Text>
        <Text style={styles.valor}>Ingeniería de Sistemas</Text>

        <Text style={styles.label}>Asignatura</Text>
        <Text style={styles.valor}>Desarrollo Móvil</Text>

        <Text style={styles.label}>Correo</Text>
        <Text style={styles.valor}>contacto@ranchoellegado.com</Text>

        <Text style={styles.label}>Ciudad</Text>
        <Text style={styles.valor}>Pasto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F0",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3E2723",
  },
  subtitulo: {
    textAlign: "center",
    color: "#6D4C41",
    marginBottom: 22,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0D7D5",
    elevation: 3,
  },
  label: {
    color: "#8D6E63",
    fontSize: 13,
    marginTop: 8,
  },
  valor: {
    color: "#3E2723",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },
});
