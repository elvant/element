<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', banner ? 'el-alert--banner' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    success: 'success ant-check-circle',
    info: 'info ant-info-circle',
    warning: 'warning ant-exclamation-circle',
    error: 'error ant-cross-circle'
  };

  const TYPE_CLASSES_MAP2 = {
    success: 'success ant-check-circle-o',
    info: 'info ant-info-circle-o',
    warning: 'warning ant-exclamation-circle-o',
    error: 'error ant-cross-circle-o'
  };

  export default {
    name: 'ElAlert',

    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      banner: {
        type: Boolean,
        default: false
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: function(value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `el-alert--${ this.type }`;
      },

      iconClass() {
        return `el-icon-${ this.description || this.$slots.default ? TYPE_CLASSES_MAP2[this.type] : TYPE_CLASSES_MAP[this.type] }`;
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },
      isBigPadding() {
        return this.showIcon && (this.description || this.$slots.default) ? 'is-with-desc-icon' : '';
      },
      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
