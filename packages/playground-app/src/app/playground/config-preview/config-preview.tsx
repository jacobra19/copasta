import { Button, CopyButton, Flex } from '@mantine/core';
import { usePlaygroundContext } from '../playground.context';
import Editor from '@monaco-editor/react';
import { useMemo } from 'react';

export const ConfigPreview = () => {
  const { configPreview } = usePlaygroundContext();

  const value = useMemo(
    () => JSON.stringify(configPreview, null, 2),
    [configPreview]
  );

  return (
    <Flex flex={1} direction={'column'}>
      <Flex>
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
              {copied ? 'Copied Config' : 'Copy Config'}
            </Button>
          )}
        </CopyButton>
      </Flex>
      <Flex flex={1}>
        <Editor
          height={'100%'}
          width={'100%'}
          language={'json'}
          theme='vs-dark'
          value={value}
          onChange={() => {}}
          options={{ readOnly: true }}
        />
      </Flex>
    </Flex>
  );
};
