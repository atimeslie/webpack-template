const fs = require('fs')
const path = require('path')
const dosJson = require('./api.json')

dosJson.forEach(element => {
  var jsFile = fs.createWriteStream(path.resolve(__dirname, '../api', `${element.desc}.js`), {
    encoding: 'utf8'
  })
  jsFile.write(`export default {`)

  parsePostManJson(element)

  jsFile.write(`}`)

  jsFile.end()

  jsFile.on('finish', function() {
    console.log('写入完成')
  })

  jsFile.on('error', function() {
    console.log('写入失败')
  })
  function parsePostManJson(json) {
    json.list.forEach(item => {
      let index = ''
      let urlName = ''
      let url = ''
      let method = ''
      index = item.path.lastIndexOf('\/')
      urlName = item.path.substring(index + 1, item.path.length)
      method = item.method
      url = item.path
      const content = `
                    ${urlName}: {
                        url: "${url}",
                        method: "${method.toLowerCase()}",
                    },
                `
      jsFile.write(content)
    })
  }
})

