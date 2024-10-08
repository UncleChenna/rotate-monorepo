'use client'
import Nav from "@/components/nav/Nav";
import { Providers } from "@/providers";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import '../styles/global.css';
import bgImage from '../assets/bg-image.webp'

export default function RootTemplate( {
    children,
}: Readonly<{
    children: React.ReactNode;
}> ) {
    return (

        <Providers>
            <Box
                height="100vh"
                overflow="hidden"
                position="relative"
                display="block"
                zIndex={ 1 }
            >
                <Image
                    src={ bgImage }
                    alt="Background image"
                    fill
                    style={ { objectFit: 'cover' } }
                    sizes="100vw"
                    quality={ 75 } // increases performance by setting the quality to a recommended quality
                    priority // increases performance and makes the image load as quicly as possible
                />
                <Box
                    position="absolute"
                    top={ 0 }
                    left={ 0 }
                    width="100%"
                    height="100%"
                    bg="rgba(0, 0, 0, 0.5)" // add extra layer of shade to give background some overlay and increase accessibility
                    zIndex={ 2 }
                />
                <Box position="relative" zIndex={ 3 }>
                    <Nav />
                    { children }
                </Box>
            </Box>
        </Providers>
    );
}