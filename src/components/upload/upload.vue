<!--
 - upload
 -
 - @author: Storm
 - @date: 2017/12/21
 -->
<template>
  <div class="s-upload">
    <label class="s-upload-label">
      <input type="file"
             class="s-upload-input"
             :multiple="multiple"
             :disabled="disabled"
             :required="required"
             :accept="accept"
             @change="handleChange"
             :name="name">
      <slot></slot>
    </label>
    <div class="s-upload-content">

    </div>
  </div>
</template>

<script>
  import imageCompress from '../../core/imageCompress';

  export default {
    name: 'sUpload',
    props: {

      // 名称
      name: String,

      // 是否允许多选
      multiple: Boolean,

      // 是否禁用
      disabled: Boolean,

      // 是否必需
      required: Boolean,

      // 允许上传图片类型
      accept: {
        type: String,
        default: 'image/jpg,image/jpeg,image/png'
      },

      // 图片最小限制, 0为不做限制
      minSize: {
        type: Number,
        default: 0
      },

      // 图片最大限制, 0为不做限制, 默认最大10MB, 如果有压缩选项的话, 该项将失效
      maxSize: {
        type: Number,
        default: 10 * 1024 * 1024
      },

      // 最大宽度限制, 如果可以压缩, 将被作为压缩选项, 0为不做限制
      maxWidth: {
        type: Number,
        default: 1000
      },

      // 最小宽度限制
      minWidth: {
        type: Number,
        default: 0
      },

      // 最大高度限制, 如果可以压缩, 将被作为压缩选项, 0为不做限制
      maxHeight: {
        type: Number,
        default: 1000
      },

      // 最小高度限制
      minHeight: {
        type: Number,
        default: 0
      },

      // 压缩, 默认为true
      compress: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {

        // 文件列表
        fileList: [],

        // 文件类型
        fileType: ''
      };
    },
    methods: {

      /**
       * 失败
       * @param type 失败类型
       * @param file 失败文件
       */
      handleError ({ type, file }) {
        this.$emit('error', { type, file });
      },

      /**
       * 选择图片
       * @param $event 事件内容
       */
      handleChange ($event) {
        console.log($event);
        const length = $event.target.files.length;
        for (let i = 0; i < length; i++) {

          imageCompress($event.target.files[i], {});

          // 检查该文件
          this.handleCheck($event.target.files[i]);
        }
        $event.target.value = '';
      },

      /**
       * 检查图片
       */
      checkImage (file) {
        const reader = new FileReader();
        const image = new Image();
        let type = '';
        reader.readAsDataURL(file);
        reader.onload = event => {
          image.src = event.target.result;
        };

        image.onload = () => {

          // 最小验证限制验证
          if (!this.compress && this.minSize && file.size < this.minSize) { // 失败
            type = 'MIN_SIZE';
            return false;
          }

          // 最大限制验证
          if (!this.compress && this.maxSize && file.size > this.maxSize) { // 失败
            type = 'MAX_SIZE';
            return false;
          }

          // 最大宽度限制
          if (!this.compress && this.maxWidth && image.width > this.maxWidth) {
            type = 'MAX_WIDTH';
            return false;
          }

          // 最小宽度限制
          if (!this.compress && this.minWidth && image.width < this.minWidth) {
            type = 'MIN_WIDTH';
            return false;
          }

          // 最大宽度限制
          if (!this.compress && this.maxHeight && image.width > this.maxHeight) {
            type = 'MAX_HEIGHT';
            return false;
          }

          // 最小宽度限制
          if (!this.compress && this.minHeight && image.width < this.minHeight) {
            type = 'MIN_HEIGHT';
            return false;
          }
        };

        return type;
      },

      /**
       * 检查文件
       * @param file 文件
       */
      checkFile (file) {
        if (this.maxSize && file.size > this.maxSize) {
          return 'MAX_SIZE';
        }

        // 最小验证限制验证
        if (this.minSize && file.size < this.minSize) { // 失败
          return 'MIN_SIZE';
        }
      },

      /**
       * 检查文件
       * @param file 文件
       */
      handleCheck (file) {
        console.log('handleCheck: ', file);
        let type = this.checkFile(file);

        /*switch (this.fileType) {
          case 'image':
            type = this.checkImage(file);
            break;
          default:
            type = this.checkFile(file);
            break;
        }*/

        // 判断是否有错误类型
        if (type) { // 是
          this.handleError({ type, file });
          return false;
        } else {
          this.fileList.push(file);
        }
      },

      /**
       * 判断文件类型
       */
      judgeFileType () {
        if (this.accept.includes('image')) {
          this.fileType = 'image';
        }
      }
    },
    created () {
      this.judgeFileType();
    }
  };
</script>

<style lang="scss" scoped>
  .s-upload {
    display: inline-block;
    vertical-align: middle;

    &-label {
      display: block;
      width: 100%;
      position: relative;
      border: 1px solid #20a0ff;
      color: #fff;
      text-align: center;
      padding: 5.5px 11px;
      background-color: #20a0ff;
      border-radius: 4px;

      &:hover,
      &:focus {
        background: #4db3ff;
        border-color: #4db3ff;
      }
    }

    &-input {
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
