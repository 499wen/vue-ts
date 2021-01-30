import Vue from 'vue'

declare module "vue/types/vue" {
    interface Vue {
        $http: any,
        $message: any
    }
} 

declare global {
    interface Window {
        BMap: any
    }
  }