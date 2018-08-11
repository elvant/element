<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', banner ? 'el-alert--banner' : '']"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content" :class="[ isBigPadding ]" >
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="el-alert__description" v-if="description">{{ description }}</p>
        </slot>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    success: 'success anticon-check-circle',
    info: 'info anticon-info-circle',
    warning: 'warning anticon-exclamation-circle',
    error: 'error anticon-cross-circle'
  };

  const TYPE_CLASSES_MAP2 = {
    success: 'success anticon-check-circle-o',
    info: 'info anticon-info-circle-o',
    warning: 'warning anticon-exclamation-circle-o',
    error: 'error anticon-cross-circle-o'
  };

  export default {
    name: 'ElAlert',

    props: {
      title: {
        type: String,
        default: '',
        required: true
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
      center: Boolean
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
