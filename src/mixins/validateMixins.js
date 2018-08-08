/**
 *
 *
 * @author: Storm
 * @date: 2018/08/08
 */

export default {
  props: {
    name: String,

    required: Boolean,

    minlength: [Number, String],

    maxlength: [Number, String],

    title: String
  },
  computed: {

    isGroup () {
      const name = this.$parent.$options.name;
      return name === 'sFormItem' || name === 'sForm';
    }
  },
  methods: {
    /**
     * 表单验证
     */
    handleValidate () {
      const $el = this.$el;
      console.log({$el});
      if (!this.isGroup || !$el.name) return;
      const validity = $el.validity;
      const result = {
        name: $el.name,
        title: this.title,
        value: this.innerVal,
        required: $el.required,
        requiredErr: validity.valueMissing,
        minlength: $el.minLength,
        minlengthErr: validity.tooShort,
        maxlength: $el.maxLength,
        maxlengthErr: validity.tooLong,
        pattern: $el.pattern,
        patternErr: validity.patternMismatch,
        max: $el.max,
        maxErr: validity.rangeOverflow,
        min: $el.min,
        minErr: validity.rangeUnderflow,
        step: $el.step,
        stepErr: validity.stepMismatch,
        valid: validity.valid,
        invalid: !validity.valid
      };
      this.$parent.handleValidate(result, 2);

    },
  },

  mounted () {
    this.handleValidate();
  }
};