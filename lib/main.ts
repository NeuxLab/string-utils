import * as _ from 'lodash'

interface ValueWithType {
  type: string
  value: any
}

module.exports = {

  base64 (input: ValueWithType): ValueWithType {
    const result = new Buffer(input.value).toString('base64')
    return {type: 'text', value: result}
  },
  md5 (input: ValueWithType): ValueWithType {
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    const result = md5.update(input.value).digest('hex');
    return { type: 'text', value: result }
  },

  capitalize (input: ValueWithType): ValueWithType {
    return {type: 'text', value: _.capitalize(input.value)}
  },

  truncate (input: ValueWithType, params): ValueWithType {
    return {type: 'text', value: _.truncate(input.value, params)}
  }

}
