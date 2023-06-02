import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
     
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
       <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Condensed:ital,wght@1,300&family=Roboto+Slab&display=swap" rel="stylesheet"/>
       <meta property="og:url" content="https://vas-kargo.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Sizin sevimli karqonuz"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Sayt təqdimat məqsədi ilə hazırlanmışdır."
        />
        <meta property="og:image" content={"https://vas-kargo.vercel.app/images/about/boy.svg"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
