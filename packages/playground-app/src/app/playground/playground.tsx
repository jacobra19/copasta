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
// import Editor from '@monaco-editor/react';
import { TemplateSettingsToolbar } from './template-settings-toolbar/template-settings-toolbar';
import { usePlaygroundContext } from './playground.context';

export const Main = () => {
  const { editorLanguage, moduleName } = usePlaygroundContext();

  return (
    <AppShell.Main>
      <Flex gap={'lg'}>
        <Flex
          flex={1}
          direction={'column'}
          style={{ border: '1px solid grey' }}
        >
          <TemplateSettingsToolbar />
          <pre>{JSON.stringify(editorLanguage, null, 2)}</pre>
          <pre>{JSON.stringify(moduleName, null, 2)}</pre>
          {/* <Flex>
        <Flex flex={1} direction={'column'}>
          <Editor
            // onChange={}
            height={'calc(100vh - 110px)'}
            defaultLanguage={editorLanguage?.id}
            language={editorLanguage?.id}
            theme='vs-dark'
            width={'100%'}
            value={editorValue}
            onChange={(value) => {
              console.log('Editor onChange value', value);

              setEditorValue(value ?? '');
            }}
            wrapperProps={{}}
          />
        </Flex>
        <Flex flex={1} direction={'column'}>
          <Flex direction={'column'}>
            <Code>
              <Text>copasta.config.json</Text>
            </Code>
            <Editor
              // onChange={}
              height={'calc(100vh - 110px)'}
              defaultLanguage={'json'}
              theme='vs-dark'
              width={'100%'}
              value={JSON.stringify(
                {
                  templates: [
                    {
                      extension: editorLanguage.id,
                      content: editorValue,
                    },
                  ],
                },
                null,
                2
              )}
              onChange={(value) => {
                console.log('Editor onChange value', value);

                setEditorValue(value ?? '');
              }}
            />
          </Flex>
          <Code>
            <Text>{JSON.stringify(editorValue)}</Text>
          </Code>
        </Flex>
      </Flex> */}
          <Flex align={'flex-end'}>
            <Button>Add Template</Button>
          </Flex>
        </Flex>
        <Flex flex={1} style={{ border: '1px solid grey' }}>
          preview
        </Flex>
      </Flex>
    </AppShell.Main>
  );
};
