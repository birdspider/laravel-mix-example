
import moduleA, { square } from './modules/moduleA.js'

console.info('echo from: app.js')

export const value = 'value-from-appjs';

const exports = {
  app_Value: value,
  moduleA_value: moduleA.value,
  callModulAFn(x) {
    return square(x);
  }
}

export default exports;

// throws: ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead.
// module.exports = {a:'b'}

// pollute window - this works
window['app'] = exports