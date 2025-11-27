import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>EcoMarket - Contáctanos</title>
        <meta
          name="description"
          content="¿Dudas o consultas? Ponte en contacto con el equipo de EcoMarket."
        />
        <meta name="keywords" content="contacto, soporte, ayuda EcoMarket" />

        <meta property="og:title" content="EcoMarket - Contáctanos" />
        <meta
          property="og:description"
          content="Comunícate con EcoMarket para recibir soporte o enviar sugerencias."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contáctanos</h1>
      <p>Estamos disponibles para ayudarte en lo que necesites.</p>

      <Image
        src="/images/contact-example.png"
        width={600}
        height={300}
        alt="Imagen contacto"
      />

      <h2>Formulario (simulado)</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea placeholder="Escribe tu mensaje"></textarea>
        </div>
      </form>

      <br />

      <Link href="/">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>Volver al Home</button>
      </Link>
    </>
  );
}
