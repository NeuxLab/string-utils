module.exports = {
  base64(input) {
    const result = new Buffer(input.value).toString('base64')
    return { type: 'text', value: result }
  },
  md5(input) {
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    const result = md5.update(input.value).digest('hex');
    return { type: 'text', value: result }
  },
}
