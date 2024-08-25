export default {
  isNumber: function(maybeNumber) {
    return /[0-9]/.test(maybeNumber)
  }, 
  isString: function(maybeString) {
    return /[a-z0-9A-Z€$]/.test(maybeString)
  },
  isDefined: function(maybeDefined) {
    return !(typeof maybeDefined === 'undefined')
  }
}