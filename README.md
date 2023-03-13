<center>
  <img src=".github/assets/trac.io.small.svg" alt="trac.io logo" width="296" />
</center>
<br /><br />

# trac.io

A tech industry company created for study and practice purposes.

## Summary

- [Access website](#access-website)
- [Technologies](#technologies)
- [Settings](#settings)
  - [How to install and run project](#how-to-install-and-run-project)
  - [How to run storybook](#how-to-run-storybook)
  - [How to run tests](#how-to-run-tests)
  - [VsCode](#vscode)
  - [Commands](#commands)
  - [Internationalization](#internationalization)
- [Development flow](#development-flow)
- [Production flow](#production-flow)

## Access website

- [trac.io](https://tracio.netlify.app/)

## Technologies

- [TypeScript](https://www.typescriptlang.org/docs/)
- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [AntDesign](https://ant.design/components/overview/)
- [Styled-Components](https://styled-components.com/docs)
- [Highcharts](https://www.highcharts.com/)
- [Lottie for React](https://lottiereact.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/install)
- [Vitest](https://vitest.dev/guide/)
- [Testing Library](https://testing-library.com/docs/)
- [I18next](https://www.i18next.com/)
- [I18next-react](https://react.i18next.com/)
- [Fontawesome](https://fontawesome.com/)
- [DateFNS](https://date-fns.org/)
- [Faker](https://fakerjs.dev/guide/)
- [Eslint](https://eslint.org/)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Settings

### How to install and run project

yarn && yarn dev

### How to run storybook

yarn storybook

### How to run tests

yarn test

### VsCode

The settings below are not mandatory but make it easier in development at Ide VsCode

1. Create the `settings.json` file inside `.vscode`, with the following settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  }
}
```

### Internationalization

Internationalization done using i18next, if in doubt, please read the documentation [I18next](https://www.i18next.com/)

### Commands

- `dev`: runs the application and starts a local server at `http://localhost:{port}/`.
- `build`: generate for production.
- `storybook`: runs the stories from storybook.
- `test`: runs vitest and testing library tests.
- `preview`: generates for production and starts a local server on `http://localhost:{port}/`.
- `lint`: runs the linter on all components and pages.
- `format`: runs prettier to format all components and pages.

## Development flow

1. Print on terminal `yarn dev` to getting started

## Production flow

1. Type in terminal `yarn preview`
2. Publish the files
