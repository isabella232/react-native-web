import { create } from 'jss';
import camelCase from 'jss-plugin-camel-case';
import ruleValueFn from 'jss-plugin-rule-value-function';

export default create().use(camelCase(), ruleValueFn());
