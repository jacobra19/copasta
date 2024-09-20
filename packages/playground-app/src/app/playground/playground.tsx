import {
  AppShell,
  Button,
  // Code,
  Flex,
  // Input,
  // JsonInput,
  // Select,
  // TagsInput,
  // Text,
} from '@mantine/core';
import Editor from '@monaco-editor/react';
import { TemplateSettingsToolbar } from './template-settings-toolbar/template-settings-toolbar';
import { usePlaygroundContext } from './playground.context';
import { ConfigPreview } from './config-preview/config-preview';
import { ModuleNameTip } from './module-name-tip/module-name-tip';

export const Main = () => {
  const {
    editorLanguage,
    editorValue,
    handleEditorValueChange,
    handleAddTemplate,
  } = usePlaygroundContext();

  return (
    <AppShell.Main>
      <Flex gap={'lg'} h={'calc(100vh - 152px)'}>
        <Flex
          flex={1}
          direction={'column'}
          justify={'space-between'}
          gap={'lg'}
        >
          <TemplateSettingsToolbar />
          <ModuleNameTip />
          <Flex flex={1}>
            <Editor
              height={'100%'}
              width={'100%'}
              language={editorLanguage?.id}
              theme='vs-dark'
              value={editorValue}
              onChange={(value) => {
                if (value) handleEditorValueChange(value);
              }}
            />
          </Flex>
          <Flex align={'flex-end'} justify={'flex-end'}>
            <Button onClick={handleAddTemplate}>Add Template</Button>
          </Flex>
        </Flex>
        <ConfigPreview />
      </Flex>
    </AppShell.Main>
  );
};
