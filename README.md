# Copasta - Template Generator CLI

<p align="center">
<img height="200px" src="./copasta.svg">
</p>

## Why Copasta?

When working on a project, you often need to create multiple files with similar content. For example, you might need to create a new React component, a CSS file, and a test file for that component. Often times teams will have a convention to write different types of files in a certain way, With Copasta, you can define templates for these files and generate them with a single command.

## Features

- Generate file templates with a single command.
- Pre-defined templates for common file types.
- Easy to use with `npx`, no need to install globally.
- Extensible to create your own templates.

## Usage

- Create your own [copasta config](#configuration) file in your project.
  - use [dynamic values](#dynamic-values) to make your templates more flexible.
  - you can use the [copata playground](https://jacobra19.github.io/copasta/) to create your own templates and configurations.
- Run `npx copasta <template-name>` to generate the files.
- Select which files you want to generate.
- Files will be generated in the current working directory.

## Dynamic Values

- `CapitalizedName`: The name of the template in PascalCase. e.g. `npx copasta hello-world` will find and replace `CapitalizedName` with `HelloWorld`.
- `KebabedName`: The name of the template in kebab-case. e.g. `npx copasta hello-world` will find and replace `KebabedName` with `hello-world`.
- file names will be kebab-cased by default.

## Configuration

Copasta uses [cosmiconfig](https://github.com/cosmiconfig/cosmiconfig) internally to load configuration files. You can create a `copasta` property in you `package.json`, `copasta.json`, `copasta.config.js` or any other supported file format.

## Example Configuration

`package.json`:

```json
{
  "copasta": {
    "templates": [
      {
        "emoji": "🔥", // optional
        "fileExtension": ".tsx",
        "content": "import React from 'react';\n\nconst CapitalizedName = () => {\n  return <div>Hello, World!</div>;\n};\n\nexport default CapitalizedName;\n"
      },
      {
        "emoji": "🌍", // optional
        "fileExtension": ".css",
        "content": ".KebabedName {\n  color: red;\n}\n"
      }
    ]
  }
}
```

`copasta.json`:

```json
{
  "templates": [
    // templates here
  ]
}
```

`copasta.config.js`:

```js
module.exports = {
  templates: [
    // templates here
  ],
};
```

## Copasta Monorepo

This project is a monorepo containing the following packages:

- [copasta-cli](https://github.com/jacobra19/copasta/blob/master/packages/copasta-cli): The actual CLI tool. This is the npm package you will use to generate templates.
- [playground-app](https://github.com/jacobra19/copasta/blob/master/packages/playground-app): A web app to create and test copasta configurations.
