/**
 * 表单元素混合注入
 *
 * @author: Storm
 * @date: 2018/08/08
 */

export default {
  props: {

    name: String,

    required: Boolean,

    minlength: Number,

    maxlength: Number,

    title: String,

    pattern: RegExp,

    max: Number,

    min: Number,

    step: Number
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
      if (!this.isGroup || !this.name) return;
      const validity = $el.validity;
      const result = {
        name: $el.name,
        title: $el.title,
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
      this.formParent.handleValidate(result, 2);
    },

    /**
     * 获取form表单元素的直属父表单元素
     */
    getFormParent ($this) {
      if (!$this.$parent) return;
      const name = $this.$parent.$options.name;
      if (name === 'sFormItem' || name === 'sForm') {
        return this.formParent = $this.$parent;
      } else return this.getFormParent($this.$parent);
    }
  },

  mounted () {
    this.getFormParent(this);
    this.handleValidate();
  }
};