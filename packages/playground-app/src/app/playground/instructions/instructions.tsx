import { Code, Group, Text, Timeline } from '@mantine/core';
import { TemplateSettingsToolbar } from '../template-settings-toolbar/template-settings-toolbar';
import { ConfigPreview } from '../config-preview/config-preview';
import { DynamicVariables } from '../../../utils/parse-content';
import { TemplateEditor } from '../template-editor/template-editor';
import { AddTemplateButton } from '../add-template-button/add-template-button';

interface Instruction {
  title?: React.ReactNode;
  description?: React.ReactElement | string;
  component: React.FC;
}

const listOfDynamicVariables = () => {
  console.log(
    'Object.values(DynamicVariables)',
    Object.values(DynamicVariables)
  );
  return (
    <span>
      {Object.values(DynamicVariables).map((variable) => (
        <Code>{variable}</Code>
      ))}
    </span>
  );
};

const INSTRUCTIONS: Instruction[] = [
  {
    // TODO: add i18n
    title: 'Select a Language & Extension',
    // TODO: add i18n
    description: 'Select the language and extension for your template',
    component: TemplateSettingsToolbar,
  },
  {
    // TODO: add i18n
    title: 'Create your Template',
    // TODO: add i18n
    description: (
      <Text>
        Create your template using the following dynamic variables:
        {listOfDynamicVariables()}
      </Text>
    ),
    component: TemplateEditor,
  },
  {
    component: AddTemplateButton,
  },
  {
    // TODO: add i18n
    title: 'Copy Config to your Repo',
    // TODO: add i18n
    description:
      'create a copasta.json / copasta.config.js file in the root of your repo/package and paste the following config',
    component: ConfigPreview,
  },
  {
    title: 'Run copasta',
    description: 'Run copasta your repo/package to generate your templates',
    component: () => (
      <Group justify='center' m={'lg'}>
        <Code color='dark.9' c='white' fz={'xl'}>
          {/* TODO: add i18n */}
          npx copasta hello-world
        </Code>
      </Group>
    ),
  },
];

export const Instructions = () => {
  return (
    <Timeline active={44} bulletSize={24} w={'100%'}>
      {INSTRUCTIONS.map(({ component, description, title }, index) => {
        const StepComponent = component;
        return (
          <Timeline.Item key={index} title={title}>
            {description ?? (
              <Text c='dimmed' size='sm'>
                {description}
              </Text>
            )}
            <StepComponent />
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
