/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/2/24
 * @description
 */
const remark = require('remark')
const html = require('remark-html')
const breaks = require('../index')

describe('index', function () {
  test('index case 1', () => {
    remark()
      .use(html)
      .use(breaks)
      .process('aaa\\\n*b*bb  \nccc\nddd\\eee\n\\ \nfff', function (err, content) {
        expect(content.contents).toMatchSnapshot()
      })
  })
})
