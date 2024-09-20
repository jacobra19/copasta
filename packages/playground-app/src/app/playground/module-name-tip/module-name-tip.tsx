import { Code, Flex, Text } from '@mantine/core';
import { usePlaygroundContext } from '../playground.context';
import { IconArrowRight } from '@tabler/icons-react';
import { parseModuleName } from '../../../utils/parse-module-name';

export const ModuleNameTip = () => {
  return (
    <>
      <CapitalizedExample />
      <KebabExample />
    </>
  );
};

const CapitalizedExample = () => {
  const { moduleName } = usePlaygroundContext();
  const { capitalizedName } = parseModuleName(moduleName);

  return (
    <Flex align={'center'} justify={'space-between'}>
      <Code>
        <Text size='xl'>{moduleName}</Text>
      </Code>
      <IconArrowRight />
      <Code>
        <Text size='xl'>{'<CapitalizedName>'}</Text>
      </Code>
      <IconArrowRight />
      <Code>
        <Text size='xl'>{capitalizedName}</Text>
      </Code>
    </Flex>
  );
};

const KebabExample = () => {
  const { moduleName } = usePlaygroundContext();
  const { kebabedName } = parseModuleName(moduleName);

  return (
    <Flex align={'center'} justify={'space-between'}>
      <Code>
        <Text size='xl'>{moduleName}</Text>
      </Code>
      <IconArrowRight />
      <Code>
        <Text size='xl'>{'<KebabedName>'}</Text>
      </Code>
      <IconArrowRight />
      <Code>
        <Text size='xl'>{kebabedName}</Text>
      </Code>
    </Flex>
  );
};
