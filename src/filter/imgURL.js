import Vue from 'vue'
import API_CONSTANT from '@/constants/api.constant'

Vue.filter('imgURL', value => {
  if (value && value !== 'undefined') {
    return API_CONSTANT.BASE_IMG + value
  }
})
