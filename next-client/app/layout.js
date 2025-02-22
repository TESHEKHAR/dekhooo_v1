
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from '@/components/Headers/Header';
import Footer from '@/components/Footers/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: `Dekhooo - Premium Men's Fashion`,
  description: 'Discover premium quality men’s clothing at Dekhooo. Shop the latest fashion trends with the best quality and unbeatable prices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Men's Clothing, Fashion, Premium Wear, Streetwear, Dekhooo" />
        <meta name="author" content="Dekhooo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/Dekhooo-preview.jpg" />
        <meta property="og:url" content="https://www.Dekhooo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Dekhooo-preview.jpg" />
        <link rel="canonical" href="https://www.Dekhooo.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "name": "Dekhooo",
            "url": "https://www.Dekhooo.com",
            "description": metadata.description,
            "image": "https://www.Dekhooo.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Store Address",
              "addressLocality": "Your City",
              "postalCode": "Your ZIP Code",
              "addressCountry": "Your Country"
            },
            "sameAs": [
              "https://www.facebook.com/Dekhooo",
              "https://www.instagram.com/Dekhooo",
              "https://twitter.com/Dekhooo"
            ]
          })
        }} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="max-w-[1360px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}