import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function OpcionMenu({
  icono,
  titulo,
  descripcion,
  onPress,
}: {
  icono: string;
  titulo: string;
  descripcion: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconoCaja}>
        <Text style={styles.icono}>{icono}</Text>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{titulo}</Text>
        <Text style={styles.cardDescripcion}>{descripcion}</Text>
      </View>
      <Text style={styles.flecha}>›</Text>
    </Pressable>
  );
}

export default function Inicio() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* PORTADA PRINCIPAL */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a",
          }}
          style={styles.imagenHero}
        />
        <View style={styles.overlay}>
          <Text style={styles.etiqueta}>RANCHO EL LEGADO</Text>
          <Text style={styles.titulo}>Mundo Ecuestre</Text>
          <Text style={styles.subtitulo}>
            Descubre la pasión, tradición y excelencia alrededor de nuestros caballos.
          </Text>
        </View>
      </View>

      {/* BIENVENIDA */}
      <View style={styles.saludoBox}>
        <View>
          <Text style={styles.saludoTitulo}>Hola, amante ecuestre</Text>
          <Text style={styles.saludoTexto}>
            ¿Qué deseas explorar hoy?
          </Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>🐎</Text>
        </View>
      </View>

      {/* RESUMEN */}
      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>3</Text>
          <Text style={styles.resumenTexto}>Secciones</Text>
        </View>
        <View style={styles.separador} />
        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>100%</Text>
          <Text style={styles.resumenTexto}>Legado</Text>
        </View>
        <View style={styles.separador} />
        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>Expo</Text>
          <Text style={styles.resumenTexto}>Router</Text>
        </View>
      </View>

      <Text style={styles.seccionTitulo}>Explorar Rancho El Legado</Text>

      {/* TRES BOTONES COMPACTOS UNIDOS ARRIBA */}
      <View style={styles.barraBotones}>
        <Pressable
          style={styles.botonPeque}
          onPress={() => router.push("/imagenes")}
        >
          <View style={styles.botonPequeIcono}>
            <Text style={styles.botonEmoji}>🐎</Text>
          </View>
          <Text style={styles.botonPequeTexto}>Galería</Text>
        </Pressable>

        <Pressable
          style={styles.botonPeque}
          onPress={() => router.push("/contacto")}
        >
          <View style={styles.botonPequeIcono}>
            <Text style={styles.botonEmoji}>📍</Text>
          </View>
          <Text style={styles.botonPequeTexto}>Contacto</Text>
        </Pressable>

        <Pressable
          style={styles.botonPeque}
          onPress={() => router.push("/imagenes")}
        >
          <View style={styles.botonPequeIcono}>
            <Text style={styles.botonEmoji}>🌾</Text>
          </View>
          <Text style={styles.botonPequeTexto}>Ejemplar</Text>
        </Pressable>
      </View>

      {/* ÚNICA TARJETA ABAJO: FORMULARIO */}
     <OpcionMenu
  icono="📝"
  titulo="Formulario"
  descripcion="Registra tus datos y tu preferencia de servicio ecuestre."
  onPress={() => router.push("/formulario")}
/>

<OpcionMenu
  icono="🐎"
  titulo="Amantes Ecuestres"
  descripcion="Consulta las personas registradas y sus solicitudes."
  onPress={() => router.push("/registros")}
/>

      <Text style={styles.footer}>
        Rancho El Legado · Desarrollo Móvil
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF9F5",
    padding: 18,
  },
  hero: {
    height: 280,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 6,
  },
  imagenHero: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
    backgroundColor: "rgba(62, 39, 35, 0.78)",
  },
  etiqueta: {
    color: "#EFEBE9",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.8,
    marginBottom: 6,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitulo: {
    color: "#FFF1EA",
    fontSize: 14,
    lineHeight: 21,
  },
  saludoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    elevation: 2,
  },
  saludoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3E2723",
  },
  saludoTexto: {
    marginTop: 3,
    color: "#6D4C41",
    fontSize: 14,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EFEBE9",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarTexto: {
    fontSize: 24,
  },
  resumen: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    elevation: 2,
  },
  resumenItem: {
    flex: 1,
    alignItems: "center",
  },
  resumenNumero: {
    color: "#5A3825",
    fontSize: 18,
    fontWeight: "bold",
  },
  resumenTexto: {
    color: "#6D4C41",
    fontSize: 12,
    marginTop: 3,
  },
  separador: {
    width: 1,
    height: 35,
    backgroundColor: "#D7CCC8",
  },
  seccionTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#3E2723",
    marginBottom: 14,
  },
  barraBotones: {
    flexDirection: "row",
    backgroundColor: "#5A3825",
    borderRadius: 14,
    padding: 4,
    marginBottom: 18,
    elevation: 3,
  },
  botonPeque: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#795548",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  botonPequeIcono: {
    marginRight: 6,
  },
  botonEmoji: {
    fontSize: 16,
  },
  botonPequeTexto: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0D7D5",
    elevation: 2,
  },
  iconoCaja: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#EFEBE9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  icono: {
    fontSize: 25,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3E2723",
    marginBottom: 4,
  },
  cardDescripcion: {
    color: "#6D4C41",
    fontSize: 13,
    lineHeight: 18,
  },
  flecha: {
    fontSize: 30,
    color: "#5A3825",
    marginLeft: 8,
  },
  footer: {
    textAlign: "center",
    color: "#8D6E63",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },
});