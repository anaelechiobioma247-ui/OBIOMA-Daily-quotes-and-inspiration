import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const quotes = [
  {
    text: 'Success is the sum of small efforts, repeated day in and day out.',
    author: 'Robert Collier',
  },
  {
    text: 'You do not have to be great to start, but you have to start to be great.',
    author: 'Zig Ziglar',
  },
  {
    text: 'Believe you can and you are halfway there.',
    author: 'Theodore Roosevelt',
  },
  {
    text: 'The future depends on what you do today.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Dream big and dare to fail.',
    author: 'Norman Vaughan',
  },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const quote = useMemo(() => quotes[index], [index]);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef3c7" />
      <View style={styles.container}>
        <Text style={styles.badge}>OBIOMA</Text>
        <Text style={styles.title}>Daily Quotes & Inspiration</Text>

        <View style={styles.card}>
          <Text style={styles.quote}>“{quote.text}”</Text>
          <Text style={styles.author}>— {quote.author}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={nextQuote} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Next Inspiration</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fef3c7',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff7ed',
  },
  badge: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 3,
    color: '#c2410c',
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#7c2d12',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  quote: {
    fontSize: 22,
    lineHeight: 34,
    color: '#1f2937',
    textAlign: 'center',
    fontWeight: '500',
  },
  author: {
    marginTop: 20,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
    color: '#9a5b2b',
  },
  button: {
    marginTop: 28,
    backgroundColor: '#f59e0b',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
