<template>
  <transition name="backdrop">
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <transition name="bounce">
        <div
          v-if="isModalVisible"
          class="modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-header"
          ref="modalContent"
        >
          <button class="close-button" @click="closeModal" aria-label="关闭">×</button>
          <div class="modal-header">
            <h2 id="modal-header">特别声明</h2>
          </div>
          <div class="modal-body">
            <p>大家好！我是前端开发学习者，此“库迪咖啡”网站是我为练习 Vue.js 和现代前端技术而创建的个人项目，仅用于学习和展示技能。</p>
            <p>本网站所有内容，包括品牌名称、图片、文字描述、产品信息及招商加盟信息，均为虚构，仅为演示用途，与库迪咖啡（COTTI COFFEE）无任何商业关联或官方联系。</p>
            <p>有关库迪咖啡的任何官方信息，请通过其官方渠道查询。本网站不提供任何官方服务或代表库迪咖啡的立场。</p>
            <p>感谢您的理解与支持！如有反馈或问题，请通过 <a href="mailto:svip888ws@foxmail.com">svip888ws@foxmail.com</a> 联系我。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="closeModal">我已知晓</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AnnouncementModal',
  data() {
    return {
      // 每次加载都显示模态框，所以默认设置为 true
      isModalVisible: true 
    };
  },
  watch: {
    isModalVisible(newVal) {
      if (newVal) {
        // 当模态框显示时，设置焦点
        this.$nextTick(() => {
          this.trapFocus();
        });
      }
    }
  },
  mounted() {
    // 页面加载时模态框自动显示，这里不再需要检查 localStorage
    // 确保在 DOM 更新后设置焦点，因为 isModalVisible 默认就是 true，所以一加载就会尝试设置焦点
    this.$nextTick(() => {
      if (this.isModalVisible) { // 再次确认当前是可见的，以防万一
        this.trapFocus();
      }
    });
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() { // Vue 3 中使用 beforeUnmount
    document.removeEventListener('keydown', this.handleKeydown);
    // 在组件销毁前移除焦点陷阱的事件监听器
    if (this.$refs.modalContent) {
      this.$refs.modalContent.removeEventListener('keydown', this.handleTabKeydown);
    }
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
      // 移除 localStorage 的设置，因为每次刷新都要显示
      this.$emit('close'); 
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && this.isModalVisible) { 
        this.closeModal();
      }
    },
    trapFocus() {
      if (!this.$refs.modalContent) return;

      const focusableElements = this.$refs.modalContent.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      
      firstElement.focus();

      if (this.$refs.modalContent) {
        this.$refs.modalContent.removeEventListener('keydown', this.handleTabKeydown);
      }
      this.$refs.modalContent.addEventListener('keydown', this.handleTabKeydown);
    },
    handleTabKeydown(event) {
      if (event.key === 'Tab') {
        const focusableElements = this.$refs.modalContent.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { 
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else { 
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap');

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.5s ease;
}

.modal-content {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 700px;
  position: relative;
  font-family: 'Noto Sans SC', sans-serif;
  box-sizing: border-box; 
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #f0f0f0; 
  border: none;
  border-radius: 50%; 
  width: 40px; 
  height: 40px; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px; 
  cursor: pointer;
  color: #888; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  transition: all 0.3s ease; 
  outline: none; 
}

.close-button:hover {
  background-color: #e0e0e0; 
  color: #c7000b; 
  transform: rotate(90deg) scale(1.1); 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
}

.close-button:active {
  transform: rotate(90deg) scale(0.95); 
  background-color: #d0d0d0; 
}

.modal-header {
  text-align: center;
  margin-bottom: 25px;
}

.modal-header h2 {
  color: #c7000b;
  font-size: 32px;
  font-weight: 700;
  animation: slideIn 0.5s ease-out;
}

.modal-body {
  margin-bottom: 25px;
  max-height: 450px;
  overflow-y: auto;
  line-height: 1.8;
  font-size: 16px;
  color: #333;
}

.modal-body p {
  margin-bottom: 15px;
}

.modal-body a {
  color: #c7000b;
  text-decoration: none;
}

.modal-body a:hover {
  text-decoration: underline;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 12px 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease-out 0.3s both;
}

.btn-primary {
  background-color: #c7000b;
  color: white;
}

.btn-primary:hover {
  background-color: #a50000;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 动画 */
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* backdrop 动画 */
.backdrop-enter-active, .backdrop-leave-active {
  transition: opacity 0.5s ease;
}

.backdrop-enter-from, .backdrop-leave-to { 
  opacity: 0;
}

/* bounce 动画 */
.bounce-enter-active {
  animation: bounceIn 0.5s ease-out;
}

.bounce-leave-active {
  animation: bounceIn 0.5s ease-out reverse;
}

@media (max-width: 600px) {
  .modal-content {
    width: 95%;
    padding: 20px;
  }

  .modal-header h2 {
    font-size: 26px;
  }

  .btn-primary {
    padding: 10px 30px;
    font-size: 16px;
  }
}
</style>