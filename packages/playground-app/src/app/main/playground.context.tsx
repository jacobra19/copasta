import { createContext, FC, useContext, useState } from 'react';
import { languages as _languages } from 'monaco-editor';
import type { languages as TLanguages } from 'monaco-editor';

type ILanguageExtensionPoint = TLanguages.ILanguageExtensionPoint;

const languages = _languages.getLanguages().filter((lang) => {
  return lang.extensions && lang.extensions.length > 0;
});

const languagesIds = languages.map((lang) => lang.id);

const createLanguagesDictionary = (languages: ILanguageExtensionPoint[]) => {
  const dictionary = new Map<string, ILanguageExtensionPoint>();

  languages.forEach((lang) => {
    dictionary.set(lang.id, lang);
  });

  return dictionary;
};

const languagesDictionary = createLanguagesDictionary(languages);

interface PlaygroundContextStore {
  editorLanguage: ILanguageExtensionPoint;
  handleEditorLanguageIdChange: (languageId: string) => void;
  handleModuleNameChange: (moduleName: string) => void;
  handleSelectedExtensionChange: (extension: string) => void;
  selectedExtension: string;
  moduleName: string;
  languages: ILanguageExtensionPoint[];
}
const PlaygroundContext = createContext<PlaygroundContextStore>(
  {} as PlaygroundContextStore
);

interface IPlaygroundContextProviderProps {
  children: React.ReactNode;
}

export const PlaygroundContextProvider: FC<IPlaygroundContextProviderProps> = ({
  children,
}) => {
  const [editorLanguageId, setEditorLanguageId] = useState<string>(
    languagesIds[0]
  );

  const [moduleName, setModuleName] = useState<string>('hello-world');

  const editorLanguage =
    languagesDictionary.get(editorLanguageId) ?? languages[0];

  const [selectedExtension, setSelectedExtension] = useState<string>(
    editorLanguage?.extensions![0] ?? ''
  );

  const handleEditorLanguageIdChange = (languageId: string) => {
    handleSelectedExtensionChange(
      languagesDictionary.get(languageId)?.extensions![0] ?? ''
    );
    setEditorLanguageId(languageId);
  };

  const handleModuleNameChange = (moduleName: string) => {
    setModuleName(moduleName);
  };

  const handleSelectedExtensionChange = (extension: string) => {
    setSelectedExtension(extension);
  };

  return (
    <PlaygroundContext.Provider
      value={{
        editorLanguage,
        handleEditorLanguageIdChange,
        handleSelectedExtensionChange,
        selectedExtension,
        handleModuleNameChange,
        moduleName,
        languages: languages,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};

export const usePlaygroundContext = () => useContext(PlaygroundContext);
