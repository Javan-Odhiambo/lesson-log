"use client"

import NavBar from "@/app/components/core/nav-bar";
import {AppShell, Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {usePathname} from "next/navigation";
import React, {useEffect} from 'react';

const Client = ({children}: {children: React.ReactNode}) => {

  const [opened, { toggle, close }] = useDisclosure();
  const pathname = usePathname()

  useEffect(() => { close()}, [pathname]);

  return (
    <AppShell header={{ height: { base: 60, md: 65, lg: 75} }}
              navbar={{
                width: { base: 200, md: 250, lg: 300 },
                breakpoint: 'xs',
                collapsed: { mobile: !opened },
              }}
              padding="md">

      <AppShell.Header>
        <Group h={"100%"} px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavBar/>
      </AppShell.Navbar>

      <AppShell.Main> {children}</AppShell.Main>
    </AppShell>
  );
};

export default Client;