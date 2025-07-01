import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, backgroundColor: '#101010' }}
        animate={{ opacity: 1, backgroundColor: 'transparent' }}
        exit={{ opacity: 0, backgroundColor: '#101010' }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ minHeight: '100vh' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

