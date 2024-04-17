import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import MyPNG from '@/assets/images/logo-olhe-oleo.png';
import MyAlert from '@/assets/images/ponto-de-exclamacao1.png'
import GooglePng from '@/assets/images/iconGoogle.png'

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={MyPNG}/>
      </View>
      <View>
        
            <View>
              <Text style={styles.title}>Faça seu Login</Text>
            </View> 
      </View>
      <View>
        <Text style={styles.subtitle}>Novo usuario? <Text style={styles.span}>Crie uma conta</Text></Text>
      </View>
      <View>
        
        <Text>   E-mail:</Text>
        <TextInput
         style={styles.inputText}
        //  value=""
        //  onChangeText=
         keyboardType="email-address"
         />
        <Text>   Senha:</Text>
        <TextInput
         style={styles.inputText}
        //  value=""
        //  onChangeText=
         keyboardType="email-address"
         />
         <View style={styles.displayForgotPassword}>
          <Image  height={2} source={MyAlert}/>
          <Text style={styles.subtitulo2}>Esqueceu a senha?</Text>
        </View>
      </View>
      <View>
        <View style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </View>
      </View>
      <View style={styles.displayTypeContainer}>
          <Text style={styles.separetor1}></Text>
          <Text >OU</Text>
          <Text style={styles.separetor1}></Text>
        </View>
      <View style={styles.displayForgotPassword}>
        <Image height={25} source={GooglePng}/>
        <Text style={styles.subtitulo2} >Continuar com o google</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: 460,
    backgroundColor: '#0D1F2D',
    height: 65,
  },
  container: {
    backgroundColor: '#fff', 
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: "#38434D",
  },
  subtitulo2:{
    textAlign: "right",
    textDecorationLine:"underline",
    alignItems:'baseline',
    paddingLeft: 5,
  },
  logo:{
    height: 49,
    width: 189,
    marginTop: 8,
    marginBottom: 8,
  },
  span:{
    color: '#0000FF'
  },
  inputText:{
    width: 327,
    height: 39,
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#FEC31A',
  },
  button:{
    shadowColor: '#000',
    width: 259,
    height: 46,
    backgroundColor:'#FEC31A',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  textButton:{
    color: '#fff',
  },
  separetor1:{
    flex:1,
    height: 1,
    backgroundColor: '#877676',
    marginHorizontal: 10,
  },
  separetor2:{
    flex: 0.01,
    height: 10,
    backgroundColor: '#000',
    marginHorizontal: 10,
    alignItems: 'baseline',
  },
  displayTypeContainer:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  displayForgotPassword: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  }
});
