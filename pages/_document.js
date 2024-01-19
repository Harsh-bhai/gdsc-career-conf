import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Add your custom meta tags here */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GSDC Career Conf</title>
        <meta
          name="google-site-verification"
          content="bsRPIU_p6Ax7n_Qu44XpRptq2uAASJ5YLxn2OrDe2eM"
        />
        <meta
          name="description"
          content="GDSC CareerConf, a one-day conference hosted by Google Developers Student Clubs, BIT-D, is dedicated to broadening horizons within the tech industry for students. Our mission is to provide an understanding of diverse career opportunities in tech."
        />
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
