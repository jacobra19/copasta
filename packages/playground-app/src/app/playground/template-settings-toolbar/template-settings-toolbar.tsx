import { Flex, Input, Select } from '@mantine/core';
import { usePlaygroundContext } from '../playground.context';
import { useMemo } from 'react';

export const TemplateSettingsToolbar = () => {
  const {
    editorLanguage,
    handleEditorLanguageIdChange,
    handleModuleNameChange,
    handleSelectedExtensionChange,
    selectedExtension,
    moduleName,
    languages,
  } = usePlaygroundContext();

  const languagesData = useMemo(
    () =>
      languages.map((lang) => ({
        value: lang.id,
        label: lang.id,
      })),
    [languages]
  );

  const extensionsData = useMemo(
    () =>
      editorLanguage.extensions!.map((ext) => ({
        value: ext,
        label: ext,
      })),
    [editorLanguage.extensions]
  );

  return (
    <Flex gap={'md'}>
      <Select
        value={editorLanguage.id}
        label='Template Language'
        onChange={(value) => {
          if (value) handleEditorLanguageIdChange(value);
        }}
        allowDeselect={false}
        data={languagesData}
      />
      <Select
        label='File Extension'
        value={selectedExtension}
        onChange={(value) => {
          if (value) handleSelectedExtensionChange(value);
        }}
        allowDeselect={false}
        data={extensionsData}
      />
      <Input.Wrapper label='Module name'>
        <Input
          placeholder='Enter Module Name'
          value={moduleName}
          onChange={(e) => {
            handleModuleNameChange(e.currentTarget.value);
          }}
        />
      </Input.Wrapper>
    </Flex>
  );
};
