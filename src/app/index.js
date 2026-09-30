import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const STUDENT = {
  name: 'Cristian',
  carnet: '20210425',
  section: '1A',
};

function StudentRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <Text style={styles.title}>Información del estudiante</Text>
        <Text style={styles.subtitle}>Evaluación práctica · React Native con Expo</Text>

        <View style={styles.card}>
          <StudentRow label="Nombre" value={STUDENT.name} />
          <StudentRow label="Carnet" value={STUDENT.carnet} />
          <StudentRow label="Sección y grupo" value={STUDENT.section} />
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Ver el catálogo de productos"
          activeOpacity={0.85}
          style={styles.button}
          onPress={() => router.push('/products')}
        >
          <Text style={styles.buttonText}>Ver productos</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { flex: 1, justifyContent: 'center', padding: 24 },
  badge: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#E2E8F0',
    borderRadius: 14,
    height: 72,
    justifyContent: 'center',
    marginBottom: 22,
    width: 72,
  },
  badgeText: { color: '#111827', fontSize: 30 },
  title: { color: '#111827', fontSize: 26, textAlign: 'center' },
  subtitle: { color: '#64748B', fontSize: 14, lineHeight: 20, marginTop: 8, textAlign: 'center' },
  card: { backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: 12, borderWidth: 1, marginTop: 28, overflow: 'hidden' },
  row: { borderBottomColor: '#E2E8F0', borderBottomWidth: 1, paddingHorizontal: 20, paddingVertical: 16 },
  label: { color: '#6B7280', fontSize: 13, textTransform: 'uppercase' },
  value: { color: '#1F2937', fontSize: 17, marginTop: 5 },
  button: { alignItems: 'center', backgroundColor: '#111827', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', marginTop: 22, paddingVertical: 16 },
  buttonText: { color: '#FFFFFF', fontSize: 16 },
  arrow: { color: '#FFFFFF', fontSize: 20, marginLeft: 10 },
});
