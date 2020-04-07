export function newMessages() {
    return {
      default: '%s 验证失败，请重试',
      required: '%s 为必填项',
      enum: '%s 必须为 %s中的一项',
      whitespace: '%s 不能为空',
      date: {
        format: '%s date %s is invalid for format %s',
        parse: '%s 无法被转换, %s 不可用 ',
        invalid: '%s date %s is invalid',
      },
      types: {
        string: '%s 不是可用的 %s',
        method: '%s 不是可用的 %s (function)',
        array: '%s 不是可用的 %s',
        object: '%s 不是可用的 %s',
        number: '%s 不是可用的 %s',
        date: '%s 不是可用的 %s',
        boolean: '%s 不是可用的 %s',
        integer: '%s 不是可用的 %s',
        float: '%s 不是可用的 %s',
        regexp: '%s 不是可用的 %s',
        email: '%s 不是可用的 %s',
        url: '%s 不是可用的 %s',
        hex: '%s 不是可用的 %s',
      },
      string: {
        len: '%s must be exactly %s characters',
        min: '%s must be at least %s characters',
        max: '%s cannot be longer than %s characters',
        range: '%s must be between %s and %s characters',
      },
      number: {
        len: '%s 必须和 %s 相等',
        min: '%s 必须小于 %s',
        max: '%s 必须大于 %s',
        range: '%s 必须在 %s 和 %s 之间',
      },
      array: {
        len: '%s must be exactly %s in length',
        min: '%s 长度必须小于 %s ',
        max: '%s 长度必须大于 %s ',
        range: '%s 长度必须在 %s 和 %s 之间',
      },
      pattern: {
        mismatch: '%s value %s does not match pattern %s',
      },
      clone() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  
  export const messages = newMessages();