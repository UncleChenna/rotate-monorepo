import { Montserrat } from "next/font/google";
import '../styles/global.css';

const montserrat = Montserrat( { subsets: [ "latin" ] } );

export default async function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/svgs/favicon.svg" />
        <title>Rotate Monorepo</title>
        <meta name="description" content="This is a small performant app" />
      </head>

      <body className={ `${montserrat.className} custom-scrollbar` }>
        { children }
      </body>
    </html>
  );
}