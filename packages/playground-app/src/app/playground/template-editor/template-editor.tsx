import { Editor } from '@monaco-editor/react';
import { usePlaygroundContext } from '../playground.context';

export const TemplateEditor = () => {
  const { editorLanguage, editorValue, handleEditorValueChange } =
    usePlaygroundContext();

  return (
    <Editor
      height={'250px'}
      width={'100%'}
      language={editorLanguage?.id}
      theme='vs-dark'
      value={editorValue}
      onChange={(value) => {
        if (value) handleEditorValueChange(value);
      }}
    />
  );
};
