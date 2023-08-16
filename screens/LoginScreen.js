import { StyleSheet, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import LottieView from 'lottie-react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import { useUserContext } from '../userContext/UserContext';

export default function LoginScreen() {
  const { updateUser } = useUserContext();

  const handleLogin = (user) => {
    updateUser(user);
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.background}
      />
      <View style={styles.backgroundCircle}></View>
      <View style={styles.backgroundCircleBottom}></View>
      <View style={styles.animation}>
        <LottieView
          source={require('../assets/animations/animation_ll4gwq3k.json')}
          autoPlay
          loop
        />
      </View>

      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            rut: '',
            password: '',
          }}
          onSubmit={handleLogin}
        >
          <AppFormField name="rut" placeholder="RUT" icon="account" />
          <AppFormField name="password" placeholder="Contraseña" icon="lock" />
          <View>
            <SubmitButton title="Iniciar Sesión" color="primary" />
          </View>
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backgroundCircle: {
    backgroundColor: colors.lightBlue,
    height: 400,
    width: 400,
    position: 'absolute',
    top: -10,
    left: 100,
    borderRadius: 200,
  },
  backgroundCircleBottom: {
    backgroundColor: colors.secondary,
    height: 400,
    width: 400,
    position: 'absolute',
    top: 400,
    right: 100,
    borderRadius: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  formContainer: {
    flex: 2,
    width: '90%',
    padding: 20,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
  },
});
