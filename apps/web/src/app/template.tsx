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
                    quality={ 75 }
                    priority
                />
                <Box
                    position="absolute"
                    top={ 0 }
                    left={ 0 }
                    width="100%"
                    height="100%"
                    bg="rgba(0, 0, 0, 0.5)"
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