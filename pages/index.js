import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy loading de componente (opcional)
const DynamicComponent = dynamic(
  () => import("../components/LargeComponent"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoMarket - Inicio</title>
        <meta
          name="description"
          content="EcoMarket es una plataforma dedicada a productos ecológicos y sostenibles. Descubre opciones responsables para tu vida diaria."
        />
        <meta name="keywords" content="EcoMarket, productos ecológicos, sostenibilidad, tienda eco" />

        <meta property="og:title" content="EcoMarket - Inicio" />
        <meta
          property="og:description"
          content="Explora productos sostenibles y ecológicos en EcoMarket."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a EcoMarket</h1>
      <p>
        Tu lugar para descubrir productos ecológicos, sostenibles y amigables con el medio ambiente.
      </p>

      <Image
        src="/images/ecomarket.png"
        width={800}
        height={400}
        alt="Imagen EcoMarket"
        priority
      />

      <h2>Explora nuestro sitio</h2>
      <ul>
        <li>
          <Link href="/blog">Ir al Blog</Link>
        </li>
        <li>
          <Link href="/contacto">Ir a Contacto</Link>
        </li>
      </ul>

      <DynamicComponent />
    </>
  );
}
