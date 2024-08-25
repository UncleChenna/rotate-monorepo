'use client'
import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import type { NavigationLink } from "./NavLink";
import NavLink from "./NavLink";


// dynamic navigation links
const links: NavigationLink[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Data Table',
    href: '/data-table'
  },
  {
    name: 'Form',
    href: '/form'
  },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false); // store user scroll in state

  // detect user scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={100}
      bg={isScrolled ? "blue.600" : "transparent"} // use scroll detection to display nav bg color
      transition="background-color 0.3s ease"
    >
      <Flex
        justifyContent="center"
        gap={8}
        py={4}
      >
        {links.map((link: NavigationLink, index: number) => (
          <NavLink
            key={index}
            link={link}
          />
        ))}
      </Flex>
    </Box>
  );
}