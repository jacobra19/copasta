import { Button, Flex } from '@mantine/core';
import { usePlaygroundContext } from '../playground.context';

export const AddTemplateButton = () => {
  const { handleAddTemplate } = usePlaygroundContext();
  return (
    <Flex w={'100%'}>
      {/* TODO: add i18n */}
      <Button onClick={handleAddTemplate}>Add Template</Button>
    </Flex>
  );
};
