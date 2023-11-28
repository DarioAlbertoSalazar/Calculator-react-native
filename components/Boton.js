import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Boton = ({ title, onPress, style }) => {
    const ancho = title === "0" ? { flex: 2, width:180 } : {};
    const color = title === "AC" || title === "+/-" || title === "%" ? { color: "#000000" } : {};
    return (
    <TouchableOpacity style={[styles.boton, style, ancho]} onPress={() => onPress(title)}>
      <Text style={[styles.textoBoton, color]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  boton: {
    width: 80, // Ajusta según tu preferencia
    height: 80, // Ajusta según tu preferencia
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333", // Establece tu color deseado
    borderRadius: 40,
    margin: 5,
  },
  textoBoton: {
    fontSize: 20,
    color: "#FFFFFF", // Color del texto
  },
};

export default Boton;

