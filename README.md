# git-hooks-example

> Example repository with git hooks configuration

## What is this

This repository was created for the purposes of the [***Git hook is the excellent alternative to
Husky***](https://dev.to/krzysztofkaczy9/do-you-really-need-husky-247b) article.
`pre-commit` and `prepare-commit-msg` hook should be triggered in every operating system.

## Set up

To use this repository, you will need `node.js`, `npm` and `git`. If you have it, then you can run those command in
your `terminal` / `git-bash` / `cmd` / `power-shell`.

```bash
git clone https://github.com/kaczor6418/git-hooks-example.git
cd git-hooks-example/
npm install
```

> You have to run `npm install` or `npm postinstall` to set up `git-hooks`

## How to test

### Checking code quality on commit

To check does `pre-commit` hook works, you can do one of the following and then run `git-commit` to trigger this hook:

- use `let` for variables which can be `const` → it should be changed into `const` automatically,
- use `""` (double quote) for any text → it should be changed into `''`(single quote) automatically,
- do not use `;` (semicolon) at the end of the line → `;` (semicolon) should be added at the end of each line
  automatically
- add css property that doesn't exist, for example `dupa: 12` → stylelint should fail cause not existing css property
  what will cause commit failure
- add tests that are not passing → tests should fail what will cause commit failure
  ```javascript
  it('should fail', function () {
    expect(0).toBe(1);
  });
  ```

> You can change already prepared `index.js` `index.spec.js` and `index.css` files

### Checking issue id with commit linking

Create a branch that starts with issue number, for example: For
issue ***[example issue #6](https://github.com/kaczor6418/git-hooks-example/issues/6)*** you will need to create a
branch that starts with number 6.

```bash
git branch 6-example issue
```

Then `git checkout` on this branch make any changes that fulfill eslint and stylelint and commit your changes.
Print `git log`. You should see a message at the end of your commit with attached issue number.

```
commit bbff505037ce2bef4f4d17f2c12c718a587cdf02
Author: Krzysztof Kaczyński
Date:   Mon Dec 5 13:01:02 2022 +0100

    chore: example with issue linking
    
    Related work item: GH-6
```
