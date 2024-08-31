import {
  ActionIcon,
  Code,
  CopyButton,
  Flex,
  rem,
  Text,
  Tooltip,
} from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

const TEMPLATES_STRINGIFIED = JSON.stringify([{ hello: 'world' }]);

export const JsonPreview = () => {
  return (
    <Flex flex={1} style={{ border: '1px solid grey' }} pos={'relative'}>
      <Code w={'100%'} lang='js' block={true}>
        <Text>{TEMPLATES_STRINGIFIED}</Text>
      </Code>
      <Flex pos={'absolute'} top={0} right={0}>
        <CopyButton value={TEMPLATES_STRINGIFIED} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? 'Copied' : 'Copy'}
              withArrow
              position='right'
            >
              <ActionIcon
                color={copied ? 'teal' : 'gray'}
                variant='subtle'
                onClick={copy}
              >
                {copied ? (
                  <IconCheck style={{ width: rem(16) }} />
                ) : (
                  <IconCopy style={{ width: rem(16) }} />
                )}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Flex>
    </Flex>
  );
};
