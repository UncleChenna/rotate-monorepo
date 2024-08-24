import Nav from "@/components/nav/Nav";
import { Providers } from "@/providers";
import { Box } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import '../styles/global.css';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/svgs/favicon.svg" />
      </head>

      <body className={`${montserrat.className} custom-scrollbar`}>
        <Providers>
          <Box
            height="100vh"
            overflow="hidden"
            position="relative"
            bgImg={`url(/assets/image/bg-image.jpg)`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundAttachment="fixed"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.5)"
              zIndex={1}
            />
            <Box position="relative" zIndex={2}>
              <Nav />
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}