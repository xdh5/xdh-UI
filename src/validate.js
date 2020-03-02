class Validator {
  required (value) {
    if (value !== 0 && !value) {
      return '请输入活动内容'
    }
  }

  pattern (value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '邮箱格式不正确'
    }
  }

  minLength (value, minLength) {
    if (value.length < minLength) {
      return '输入内容太短'
    }
  }

  maxLength (value, maxLength) {
    if (value.length > maxLength) {
      return '输入内容太长'
    }
  }
}

export default Validator
