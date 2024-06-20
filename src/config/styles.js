import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 10,
    marginBottom: 12,
    paddingHorizontal: 9,
  },
  button: {
    marginTop: 12,
  },
  error: {
    color: "red",
  },
  textin:{
    color: '#293285',
    fontFamily: "Comic Sans MS" ,
    textAlign: 'center',
    fontSize: 20
},
  textinput: {
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
    padding: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    backgroundColor: "#c4d7ff",
    justifyContent: "center",
    padding: 16,
    flex: 1
  },  
  botao: {
    marginTop: 6,
    padding: "5px",
    backgroundColor: "#9CBBFF",
    textTransform: "uppercase"
    
  },
});
