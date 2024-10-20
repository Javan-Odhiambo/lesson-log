import {GoogleIcon} from '@/app/icons/GoogleIcon';
import {Button, ButtonProps, Group} from '@mantine/core';
import React from "react";
import {FaGithub} from "react-icons/fa";
import iconsClasses from './icons.module.css';

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button leftSection={<GoogleIcon />} variant="default" {...props} />;
}

export function GithubButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Button
      {...props}
      leftSection={<FaGithub style={{ width: '1rem', height: '1rem' }}/>}
      className={iconsClasses.githubButtons}
    />
  );
}

export function SocialButtons() {
  return (
    <Group justify="center" >
      <GoogleButton>Continue with Google</GoogleButton>
      <GithubButton>Login with GitHub</GithubButton>
    </Group>
  );
}