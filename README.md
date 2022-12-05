# git-hooks-example

> Example repository with git hooks configuration

## What is this

This repository was created for the purposes of the [***Git hook is the excellent alternative to
Husky***](https://dev.to/krzysztofkaczy9/do-you-really-need-husky-247b) article.
`pre-commit` and `prepare-commit-msg` hook should be triggered in every operating system.

## Set up

To use this repository you will need `node.js`, `npm` and `git`. If you have it, then you can run those command in
your `terminal` / `git-bash` / `cmd` / `power-shell`.

```bash
git clone https://github.com/kaczor6418/git-hooks-example.git
cd git-hooks-example/
npm install
```

> You have to run `npm install` or `npm postinstall` to set up `git-hooks`

## How to test

To check does `pre-commit` hook works you can do one of the following and then run `git-commit` to trigger this hook:

- use `let` for variables which can be `const` → it should be changed into `const` automatically,
- use `""` (double quote) for any text → it should be changed into `''`(single quote) automatically,
- do not use `;` (semicolon) at the end of the line → `;` (semicolon) should be added at the end of each line
  automatically

> You can change already prepared `index.js` file
