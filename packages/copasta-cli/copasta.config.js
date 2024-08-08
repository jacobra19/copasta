const config = {
  templates: [
    {
      "emoji": "😢",
      "fileExtension": ".config.ts",
      "content": "const Template = (args) => <Component {...args} />;\n\nexport const Default = Template.bind({});\nDefault.args = {};\n\nexport const Example = Template.bind({});\nExample.args = {};\n\nexport default {\n  title: 'Component',\n  component: Component,\n};"
    }
  ]
};

module.exports = config;
