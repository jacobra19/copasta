import { ActionIcon, AppShell, Code, Flex, Text, Tooltip } from '@mantine/core';
import logo from '/copasta.svg';
import { IconBrandNpm, IconBrandGithubFilled } from '@tabler/icons-react';

export const Header = () => {
  return (
    <AppShell.Header p={'10px'}>
      <Flex align={'center'} justify={'space-between'}>
        <img src={logo} alt='Copasta logo' style={{ width: 60, height: 60 }} />
        <Code>
          <Text size='lg'>npx copasta hello-world</Text>
        </Code>
        <Flex gap={'md'}>
          <Tooltip label='npm'>
            <ActionIcon
              variant='outline'
              size='xl'
              radius='md'
              aria-label='npm'
              component='a'
              href='https://www.npmjs.com/package/copasta'
              target='_blank'
            >
              <IconBrandNpm
                style={{ width: '70%', height: '70%' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='github'>
            <ActionIcon
              variant='outline'
              radius='md'
              size='xl'
              aria-label='github'
              component='a'
              href='https://github.com/jacobra19/copasta'
              target='_blank'
            >
              <IconBrandGithubFilled
                style={{ width: '70%', height: '70%' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};
