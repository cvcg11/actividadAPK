import { router } from 'expo-router';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

export default function ProductsScreen() {
  const { error, isLoading, products, reload } = useProducts();

  if (isLoading) {
    return (
      <View style={styles.state}>
        <ActivityIndicator color="#111827" size="large" />
        <Text style={styles.stateText}>Cargando productos…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.state}>
        <Text style={styles.errorTitle}>No pudimos cargar el catálogo</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity accessibilityRole="button" style={styles.retryButton} onPress={reload}>
          <Text style={styles.retryText}>Intentar de nuevo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Productos destacados</Text>
            <Text style={styles.subtitle}>Información obtenida de Fake Store API</Text>
          </View>
        }
        ListEmptyComponent={<Text style={styles.empty}>No hay productos disponibles.</Text>}
        refreshing={isLoading}
        onRefresh={reload}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity accessibilityRole="button" style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Volver al perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8FAFC' },
  list: { padding: 16, paddingBottom: 82 },
  header: { marginBottom: 8, marginTop: 8 },
  title: { color: '#1F2937', fontSize: 24 },
  subtitle: { color: '#6B7280', fontSize: 14, marginTop: 5 },
  state: { alignItems: 'center', backgroundColor: '#F8F7FC', flex: 1, justifyContent: 'center', padding: 28 },
  stateText: { color: '#4B5563', fontSize: 16, marginTop: 16 },
  errorTitle: { color: '#991B1B', fontSize: 20, textAlign: 'center' },
  errorText: { color: '#6B7280', fontSize: 15, lineHeight: 22, marginTop: 10, textAlign: 'center' },
  retryButton: { backgroundColor: '#111827', borderRadius: 10, marginTop: 24, paddingHorizontal: 20, paddingVertical: 13 },
  retryText: { color: '#FFFFFF' },
  empty: { color: '#6B7280', textAlign: 'center' },
  backButton: { alignItems: 'center', backgroundColor: '#FFFFFF', borderTopColor: '#E5E7EB', borderTopWidth: 1, paddingVertical: 15 },
  backText: { color: '#111827', fontSize: 15 },
});
