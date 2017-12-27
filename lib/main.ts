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

  capitalize (input: ValueWithType): ValueWithType {
    return {type: 'text', value: _.capitalize(input.value)}
  },

  truncate (input: ValueWithType, params): ValueWithType {
    return {type: 'text', value: _.truncate(input.value, params)}
  }

}
