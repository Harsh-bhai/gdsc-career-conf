import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="google-site-verification"
          content="bsRPIU_p6Ax7n_Qu44XpRptq2uAASJ5YLxn2OrDe2eM"
        />
        <title>GSDC Career Conf</title>
        <meta name="title" content="GSDC Career Conf" />
        <meta
          name="description"
          content="Uncovering Untapped career paths in tech. [3rd February 2024]"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdsccareerconf.netlify.app/" />
        <meta property="og:title" content="GSDC Career Conf" />
        <meta
          property="og:description"
          content="Uncovering Untapped career paths in tech. [3rd February 2024]"
        />
        <meta
          property="og:image"
          content="https://gdsccareerconf.netlify.app/Logo_url.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gdsccareerconf.netlify.app/"
        />
        <meta property="twitter:title" content="GSDC Career Conf" />
        <meta
          property="twitter:description"
          content="Uncovering Untapped career paths in tech. [3rd February 2024]"
        />
        <meta
          property="twitter:image"
          content="https://gdsccareerconf.netlify.app/Logo_url.png"
        />
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
