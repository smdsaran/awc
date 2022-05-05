// import React from "react";
// import NextDocument from "next/document";
// import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
// import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@mui/styles";
// export default class Document extends NextDocument {
//   static async getInitialProps(ctx) {
//     const styledComponentSheet = new StyledComponentSheets();
//     const materialUiSheets = new MaterialUiServerStyleSheets();
//     const originalRenderPage = ctx.renderPage;
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             styledComponentSheet.collectStyles(
//               materialUiSheets.collect(<App {...props} />)
//             ),
//         });
//       const initialProps = await NextDocument.getInitialProps(ctx);

//       return {
//         ...initialProps,
//         styles: [
//           <React.Fragment key="styles">
//             {initialProps.styles}
//             {materialUiSheets.getStyleElement()}
//             {styledComponentSheet.getStyleElement()}
//           </React.Fragment>,
//         ],
//       };
//     } finally {
//       styledComponentSheet.seal();
//     }
//   }
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
