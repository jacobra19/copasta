import { Button, CopyButton, Flex, Group } from '@mantine/core';
import { usePlaygroundContext } from '../playground.context';
import Editor from '@monaco-editor/react';
import { useMemo, useRef } from 'react';
import { IconCopy, IconRestore } from '@tabler/icons-react';

export const ConfigPreview = () => {
  const { configPreview, handleConfigPreviewChange } = usePlaygroundContext();
  const originalConfig = useRef(configPreview);

  const value = useMemo(
    () => JSON.stringify(configPreview, null, 2),
    [configPreview]
  );

  const handleReset = () => {
    handleConfigPreviewChange(originalConfig.current);
  };

  return (
    <Flex flex={1} direction={'column'} gap={'xs'}>
      <Group justify='space-between'>
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <Button
              leftSection={<IconCopy size={14} />}
              color={copied ? 'teal' : 'blue'}
              onClick={copy}
              prefix=''
            >
              {copied ? 'Copied' : 'Copy to clipboard'}
              {/* TODO: add i18n */}
            </Button>
          )}
        </CopyButton>
        <Button
          variant='outline'
          leftSection={<IconRestore size={14} />}
          color={'blue'}
          onClick={handleReset}
        >
          {/* TODO: add i18n */}
          Reset
        </Button>
      </Group>
      <Flex flex={1}>
        <Editor
          height={'250px'}
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
