import {LinksGroup} from "@/app/components/core/nav-bar-group-links.";
import urls from "@/app/utils/urls";
import {Button, ScrollArea} from '@mantine/core';
import {
  IconAdjustments,
  IconBallpen,
  IconFileAnalytics,
  IconGauge,
  IconLogout,
  IconUsersGroup,
} from '@tabler/icons-react';
import React from 'react';

import classes from './NavbarNested.module.css';

const mockdata = [
  {label: 'Dashboard', icon: IconGauge, link: urls.DASHBOARD},
  {label: 'Assignments', icon: IconBallpen, link: urls.ASSIGNMENTS},
  {label: 'Groups', icon: IconUsersGroup, link: urls.GROUPS},
  {label: 'Courses', icon: IconFileAnalytics, link: urls.COURSES},
  {
    label: 'Settings',
    icon: IconAdjustments,
    initiallyOpened: true,
    links: [
      {label: 'Profile', link: urls.SETTINGS},
      {label: "Security", link: urls.SETTINGS},
    ]
  },

];
const NavBar = () => {

  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label}/>);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <Button variant={"light"} w={"100%"} leftSection={<IconLogout/>}> Log Out</Button>
      </div>
    </nav>
  );
};

export default NavBar;