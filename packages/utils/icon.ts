import {
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
  Close,
  Loading,
  CircleCheck,
  CircleClose,
} from '@element-plus/icons-vue'
import { definePropType } from '@element-plus/utils-new'
import type { Component } from 'vue'

export const iconPropType = definePropType<string | Component>([String, Object])

export const CloseComponents = {
  Close,
}

export const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
}

export const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}

export const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose,
}
