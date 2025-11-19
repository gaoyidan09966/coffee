import * as components from '@element-plus/icons-vue';

export default {
  install(app) {
    for (const key in components) {
      app.component(key, components[key]);
    }
  },
};