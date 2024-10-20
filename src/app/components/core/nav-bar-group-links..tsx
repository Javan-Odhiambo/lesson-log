import {Anchor, Box, Collapse, Group, rem, Text, ThemeIcon, UnstyledButton} from '@mantine/core';
import {IconChevronRight} from '@tabler/icons-react';
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useState} from 'react';
import classes from './NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({icon: Icon, label, initiallyOpened, link, links}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const pathname = usePathname();
  const router = useRouter();

  const items = (hasLinks ? links : []).map((link) => (
    <Anchor
      component={Link}
      className={classes.link}
      href={link.link}
      key={link.label}
      data-active={`${pathname === link.link}`}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o)
          link && router.push(link)
        }}
        className={classes.control}
        data-active={`${pathname === link}`}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{display: 'flex', alignItems: 'center'}}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{width: rem(18), height: rem(18)}}/>
            </ThemeIcon>
            {link ? <Text href={link} component={Link} ml="md">{label}</Text> : <Text ml="md">{label}</Text>}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
          {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
