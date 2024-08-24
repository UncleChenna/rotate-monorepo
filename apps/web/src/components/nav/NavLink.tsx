"use client"
import React from "react";
import { Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export type NavigationLink = {
  name: string;
  href: string;
};

interface Props {
  link: NavigationLink;
}

export default function NavLink({ link }: Props) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link href={link.href}>
      <Text 
        color='white'
        fontSize="large"
        fontWeight={500} 
        borderBottom={isActive ? '2px solid white' : "none"} 
      >
        {link.name}
      </Text>
    </Link>
  );
}
