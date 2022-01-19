
import moduleA from './modules/moduleA.js'

console.info('echo from: app.js')

export const value = 'value-from-appjs';

export default {
  app_Value: value,
  moduleA_value: moduleA.value
};

// throws: ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead.
// module.exports = {a:'b'}

// pollute window - this works
window['app'] = {
  app_Value: value,
  moduleA_value: moduleA.value
}