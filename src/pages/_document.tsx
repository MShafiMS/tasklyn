import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Tasklyn</title>
      <Head>
        <meta property="og:title" content="Tasklyn" />
        <meta property="og:site_name" content="Tasklyn" />
        <meta
          property="og:url"
          content="https://main.d3188mhqzkjmhs.amplifyapp.com/todo"
        />
        <meta
          property="og:description"
          content="This is a simple Todo site built using Next.js, Tailwind CSS, Mobx State Tree, and AWS Amplify GraphQL API."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/BwfMj1P/Group-6.png"
        ></meta>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
