import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Boton from "./components/Boton";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [memoria, setMemoria] = useState("");
  const [operacion, setOperacion] = useState("");

  const handlePress = (valor) => {
    let resultado = memoria;
    if (!isNaN(valor)) {
      setInput(prevInput => prevInput === '0' ? String(valor) : prevInput + String(valor));
    } else if (valor === "AC") {
      setInput("");
      setMemoria("");
      setOperacion("")
    } else if (valor === "%") {
      const porcentaje = Number(input) / 100;
      setMemoria(porcentaje);
      setInput(String(porcentaje));
      setOperacion("");
    } else if (valor === "+/-") {
      setInput((prevInput) => (prevInput.startsWith("-") ? prevInput.slice(1) : "-" + prevInput));
    } else if (["+", "-", "x", "/", "%"].includes(valor)) {
      setOperacion(valor);
      setMemoria(Number(input));
      setInput("");
    } else if (valor === "=") {
      switch (operacion) {
        case "+":
          resultado += Number(input);
          break;

        case "-":
          resultado -= Number(input);
          break;

        case "x":
          resultado *= Number(input);
          break;

        case "/":
          resultado /= Number(input);
          break;

        default:
          resultado = Number(input);
          break;
      }
      setMemoria(resultado);
      setInput(resultado);
      setOperacion("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <View>
          <TextInput style={styles.textInput} value={input} editable={false} />
        </View>
        <View style={styles.fila}>
          <Boton style={[styles.columna, styles.botonArriba]} title={"AC"} onPress={handlePress}/>
          <Boton style={[styles.columna, styles.botonArriba]} title={"+/-"} onPress={handlePress}/>
          <Boton style={[styles.columna, styles.botonArriba]} title={"%"} onPress={handlePress}/>
          <Boton style={styles.botonOperacion} title={"/"} onPress={handlePress}/>
        </View>
        <View style={styles.fila}>
          <Boton style={[styles.columna, styles.botonNumero]} title={"7"} onPress={handlePress}/>
          <Boton style={[styles.columna, styles.botonNumero]} title={"8"} onPress={handlePress}/>
          <Boton style={[styles.columna, styles.botonNumero]} title={"9"} onPress={handlePress}/>
          <Boton style={styles.botonOperacion} title={"x"} onPress={handlePress}/>
        </View>
        <View style={styles.fila}>
          <Boton style={styles.columna} title={"4"} onPress={handlePress}/>
          <Boton style={styles.columna} title={"5"} onPress={handlePress}/>
          <Boton style={styles.columna} title={"6"} onPress={handlePress}/>
          <Boton style={styles.botonOperacion} title={"-"} onPress={handlePress}/>
        </View>
        <View style={styles.fila}>
          <Boton style={styles.columna} title={"1"} onPress={handlePress}/>
          <Boton style={styles.columna} title={"2"} onPress={handlePress}/>
          <Boton style={styles.columna} title={"3"} onPress={handlePress}/>
          <Boton style={styles.botonOperacion}title={"+"} onPress={handlePress}/>
        </View>
        <View style={styles.fila}>
          <Boton style={[styles.columna, styles.botonNumero]} title={"0"} onPress={handlePress}/>
          <Boton style={styles.columna} title={"."} onPress={handlePress}/>
          <Boton style={styles.botonOperacion} title={"="} onPress={handlePress}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: 10,
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  fila: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  columna: {
    display: "grid",
  },
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  textInput: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 1,
  },
  botonNumero: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
    fontSize: 20,
  },
  botonOperacion: {
    backgroundColor: "#F09A36",
    color: "#000000",
  },
  botonArriba: {
    backgroundColor: "#A6A6A6",
    color: "#000000",
  },
  botonCero: {
    width: 100, // Ajusta según tu preferencia
    height: 80, // Ajusta según tu preferencia
  }
});
