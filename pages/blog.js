import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>EcoMarket - Blog de Sostenibilidad</title>
        <meta
          name="description"
          content="Artículos sobre reciclaje, energías renovables y vida ecológica para un mundo más sostenible."
        />
        <meta name="keywords" content="blog sostenible, reciclaje, eco tips, vida verde" />

        <meta property="og:title" content="EcoMarket - Blog" />
        <meta
          property="og:description"
          content="Lee contenido sobre sostenibilidad, reciclaje y productos eco-amigables."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog de Sostenibilidad</h1>
      <p>
        Bienvenido a nuestra sección de artículos donde aprenderás sobre prácticas eco-amigables y estilo de vida sostenible.
      </p>

      <Image
        src="/images/blog-example.png"
        width={700}
        height={350}
        alt="Imagen de blog"
      />

      <br />
      <br />

      <Link href="/">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>Volver al Home</button>
      </Link>
    </>
  );
}
