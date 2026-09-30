import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image accessibilityLabel={product.title} resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text numberOfLines={2} style={styles.title}>{product.title}</Text>
        <Text numberOfLines={1} style={styles.category}>{product.category}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.rating}>★ {product.rating?.rate ?? '—'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: 10, borderWidth: 1, flexDirection: 'row', marginVertical: 7, overflow: 'hidden', padding: 12 },
  image: { height: 92, marginRight: 13, width: 82 },
  details: { flex: 1, justifyContent: 'space-between', paddingVertical: 2 },
  title: { color: '#1F2937', fontSize: 15, lineHeight: 20 },
  category: { color: '#64748B', fontSize: 12, marginTop: 6, textTransform: 'capitalize' },
  bottomRow: { alignItems: 'center', borderTopColor: '#F1F5F9', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingTop: 8 },
  price: { color: '#111827', fontSize: 17 },
  rating: { color: '#64748B', fontSize: 13 },
});
