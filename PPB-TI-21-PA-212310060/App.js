import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView>
      <h1>My Profile</h1>
      <Text>Nama = {profile.nama}</Text>
      <Text>Jurusan = {profile.jurusan}</Text>
      <Text>Kelas = {profile.kelas}</Text>
    </SafeAreaView>
  );
}

const profile = {nama:"Michael Fernandez", npm:212310060, jurusan:"Teknologi Informasi", kelas: "TI-21-PA"};
