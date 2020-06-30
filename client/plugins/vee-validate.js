/* eslint-disable camelcase */
import { extend } from 'vee-validate'
import { required, between, alpha_dash, min, max, confirmed } from 'vee-validate/dist/rules'

extend('required', { ...required, message: 'The field is required.' })
extend('between', between)
extend('alpha_dash', { ...alpha_dash, message: 'The field may contain alpha-numeric characters, dashes and underscores.' })
extend('min', { ...min, message: 'The field must be at least {length} characters.' })
extend('max', { ...max, message: 'The field may not be greater than {length} characters.' })
extend('confirmed', { ...confirmed, message: 'The confirmation field does not match.' })
