import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Script from "next/script";
// Dynamically import ChatWidget with no SSR to avoid window is not defined errors
const ChatWidget = dynamic(() => import('@/components/ChatWidget/ChatWidget'), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
<>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4EX8BY8FJR"></script>
  <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4EX8BY8FJR"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4EX8BY8FJR');
        `}
      </Script>
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
        {/* Chat Widget - Available on all pages */}
        <ChatWidget />
      </motion.div>
    </AnimatePresence>
    </>
  );
}

