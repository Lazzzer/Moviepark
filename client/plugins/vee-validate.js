import { extend } from 'vee-validate'
import { required, between } from 'vee-validate/dist/rules'

extend('required', required)
extend('between', between)
