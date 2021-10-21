## Unofficial hyperexpress types

---

#### Its generated using typescript compiler [types genertion from js files](https://www.typescriptlang.org/docs/handbook/project-references.html)

But running `npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types` directly throws `unexpected PrivateIdentifier` error

So to types generate i modified all properties begining with `#` which represents private class properties to beign with `_`

Just as a workaround to get types. There will definately be better ways for doing this.

