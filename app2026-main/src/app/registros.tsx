import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";

export default function Registros() {
  const [registros, setRegistros] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarRegistros();
  }, []);

  const cargarRegistros = async () => {
    setCargando(true);
    const { data, error } = await supabase
      .from("solicitudes_ecuestres")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      alert(error.message);
      setCargando(false);
      return;
    }
    setRegistros(data || []);
    setCargando(false);
  };

  if (cargando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#5A3825" />
        <Text style={{ marginTop: 10, color: "#5A3825" }}>
          Consultando Supabase...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Amantes Ecuestres</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>🐎 {item.nombre}</Text>
            <Text style={styles.info}>{item.correo} · {item.telefono}</Text>
            <Text style={styles.info}>Ciudad: {item.ciudad}</Text>
            <Text style={styles.info}>Ejemplar: {item.ejemplar_favorito}</Text>
            <Text style={styles.destacado}>Servicio: {item.servicio_interes}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF9F5", padding: 18 },
  centro: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF9F5" },
  titulo: { fontSize: 26, fontWeight: "bold", color: "#3E2723", textAlign: "center", marginBottom: 18 },
  card: { backgroundColor: "#FFFFFF", padding: 16, borderRadius: 16, marginBottom: 12, elevation: 2, borderWidth: 1, borderColor: "#E0D7D5" },
  nombre: { fontSize: 17, fontWeight: "bold", color: "#3E2723", marginBottom: 4 },
  info: { color: "#6D4C41", fontSize: 13, marginBottom: 2 },
  destacado: { color: "#5A3825", fontSize: 13, fontWeight: "bold", marginTop: 4 },
});