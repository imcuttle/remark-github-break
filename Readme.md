# remark-github-break

[![build status](https://img.shields.io/travis/imcuttle/remark-github-break/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/remark-github-break)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/remark-github-break.svg?style=flat-square)](https://codecov.io/github/imcuttle/remark-github-break?branch=master)
[![NPM version](https://img.shields.io/npm/v/remark-github-break.svg?style=flat-square)](https://www.npmjs.com/package/remark-github-break)
[![NPM Downloads](https://img.shields.io/npm/dm/remark-github-break.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/remark-github-break)

https://gist.github.com/shaunlebron/746476e6e7a4d698b373

The plugin of [remark](https://github.com/remarkjs/remark) to support the rule of github break line.

- Input
```markdown
remark default support[space][space]
this

NOT support\
this
```

- Output
```html
<p>
remark default support<br>
this
</p>
<p>
NOT support<br>
this
</p>
```
