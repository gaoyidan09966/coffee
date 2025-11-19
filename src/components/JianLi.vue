<template>
  <div class="min-h-screen p-8 lg:p-10 font-sans text-gray-800 relative overflow-hidden bg-gradient-overlay" :style="backgroundStyle">
    <div class="absolute top-0 left-0 w-80 h-80 bg-blue-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-0"></div>
    <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-80 h-80 bg-pink-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    <div class="absolute top-1/3 left-1/4 w-72 h-72 bg-teal-300 opacity-15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1000"></div>
    <div class="absolute bottom-1/3 left-1/2 w-64 h-64 bg-orange-300 opacity-15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>

    <div class="max-w-4xl mx-auto p-8 lg:p-10 bg-white bg-opacity-90 shadow-4xl rounded-xl relative z-10 border border-gray-100 backdrop-blur-md animate-fade-in-content">
      <header class="flex flex-col lg:flex-row justify-between items-start pb-6 mb-8 border-b border-gray-100">
        <div class="flex flex-col lg:flex-row items-start w-full">
          <div class="w-24 h-32 lg:w-32 lg:h-44 border-4 border-indigo-300 shadow-xl flex-shrink-0 relative overflow-hidden mr-0 lg:mr-8 mb-6 lg:mb-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src="../assets/images/2d5f739bffe09b5d8fe546f4438d594.jpg" alt="Avatar" class="w-full h-full object-cover">
          </div>
          <div class="flex-grow">
            <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-2 tracking-tight animate-fade-in-up">王帅</h1>
            <p class="text-xl lg:text-2xl font-semibold text-indigo-700 mb-5 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 inline-block animate-fade-in-up animation-delay-200">求职意向：前端工程师</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-700">
              <p class="flex items-center animate-fade-in-up animation-delay-300">
                <svg class="w-5 h-5 mr-3 text-blue-700 animate-pulse-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM9.555 17.005L9.585 17h.83a.25.25 0 00.245-.25L11 16.518V13.5a2.5 2.5 0 00-2.5-2.5h-1A2.5 2.5 0 005 13.5v3.018l.344.205c.01.006.02.012.031.018a1 1 0 00.563 0c.01-.006.021-.012.031-.018L6.445 17.005l.385-.255c.01-.006.02-.012.031-.018a1 1 0 00.563 0c.01-.006.021-.012.031-.018L7.845 17.005l.385-.255c.01-.006.02-.012.031-.018a1 1 0 00.563 0c.01-.006.021-.012.031-.018L9.245 17.005zM17 5V3h-2V2h2V0h1v2h2v1h-2v2h-1z"></path>
                </svg>
                {{ birthday }}
              </p>
              <p class="flex items-center animate-fade-in-up animation-delay-400">
                <svg class="w-5 h-5 mr-3 text-blue-700 animate-pulse-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                {{ phone }}
              </p>
              <p class="flex items-center animate-fade-in-up animation-delay-500">
                <svg class="w-5 h-5 mr-3 text-blue-700 animate-pulse-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                </svg>
                {{ educationLevel }}
              </p>
              <p class="flex items-center animate-fade-in-up animation-delay-600">
                <svg class="w-5 h-5 mr-3 text-blue-700 animate-pulse-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                {{ email }}
              </p>
              <p class="flex items-center animate-fade-in-up animation-delay-700">
                <svg class="w-5 h-5 mr-3 text-blue-700 animate-pulse-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.96 8.001 0 01-3.078-.716l-2.072.398a.5.5 0 00-.598.592l-.398 2.072A10.001 10.001 0 0010 2c4.418 0 8 3.134 8 7zM9.5 6a.5.5 0 00-1 0v3a.5.5 0 001 0V6zM10.5 6a.5.5 0 00-1 0v3a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v3a.5.5 0 001 0V6zM12 6a.5.5 0 00-1 0v3a.5.5 0 001 0V6z" clip-rule="evenodd"></path>
                </svg>
                {{ qq }}
              </p>
              <p class="flex items-center animate-fade-in-up animation-delay-800">
                <svg class="w-5 h-5 mr-3 text-blue-700 animate-pulse-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                </svg>
                {{ university }}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section class="mb-8">
        <h2 class="section-heading animate-fade-in-left">核心技能</h2>
        <div class="flex flex-wrap gap-3 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-inner-lg">
          <span v-for="(skill, index) in skills" :key="skill" class="skill-tag animate-pop-in" :style="{ '--skill-index': index }">{{ skill }}</span>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="section-heading animate-fade-in-left animation-delay-100">教育背景</h2>
        <div class="item-block animate-fade-in-right">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
            <h3 class="text-xl font-bold text-gray-800">{{ education.university }} <span class="text-lg font-medium text-gray-700 ml-0 sm:ml-2">{{ education.degree }}</span></h3>
            <span class="text-sm text-gray-600 font-medium">{{ education.duration }}</span>
          </div>
          <p class="text-base text-gray-700 mb-2">专业: <span class="font-semibold">{{ education.major }}</span></p>
          <div class="mt-2">
            <h4 class="text-md font-semibold text-gray-800 mb-1">主修课程:</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(course, index) in education.courses" :key="index"
                    class="course-tag animate-course-float-in"
                    :style="{ 'animation-delay': (index * 80 + 100) + 'ms' }"
                    v-html="course">
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="section-heading animate-fade-in-left animation-delay-200">实习经历</h2>
        <div class="space-y-6">
          <div v-for="(experience, index) in internships" :key="index" class="item-block animate-fade-in-right" :style="{ 'animation-delay': (index * 100 + 200) + 'ms' }">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
              <h3 class="text-xl font-bold text-gray-800">{{ experience.company }} <span class="text-lg font-medium text-gray-700 ml-0 sm:ml-2">{{ experience.position }}</span></h3>
              <span class="text-sm text-gray-600 font-medium">{{ experience.duration }}</span>
            </div>
            <p v-if="experience.department" class="text-base text-gray-700 mb-2">部门: <span class="font-semibold">{{ experience.department }}</span></p>
            <p v-if="experience.description" class="text-sm text-gray-700 leading-relaxed">{{ experience.description }}</p>
            <div v-if="experience.summary" class="mt-2">
              <h4 class="text-md font-semibold text-gray-800 mt-2 mb-1">实习经验总结:</h4>
              <ul class="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1">
                <li v-for="(item, i) in experience.summary" :key="i" v-html="item"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="section-heading animate-fade-in-left animation-delay-300">项目经验</h2>
        <div v-for="(project, index) in projects" :key="index" class="item-block animate-fade-in-right" :style="{ 'animation-delay': (index * 100 + 300) + 'ms' }">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
            <h3 class="text-xl font-bold text-gray-800">{{ project.company }} <span class="text-lg font-medium text-gray-700 ml-0 sm:ml-2">{{ project.name }}</span></h3>
            <span class="text-sm text-gray-600 font-medium">{{ project.duration }}</span>
          </div>
          <ul class="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1">
            <li v-for="(detail, i) in project.details" :key="i" v-html="detail"></li>
          </ul>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="section-heading animate-fade-in-left animation-delay-400">荣誉证书</h2>
        <ul class="list-none pl-5 border-l-4 border-indigo-400 space-y-2 text-gray-700">
          <li v-for="(certificate, index) in certificates" :key="index" class="flex items-center text-base animate-fade-in-up" :style="{ 'animation-delay': (index * 50 + 400) + 'ms' }">
            <span class="icon-dot-sparkle"></span> <span class="font-semibold mr-1">{{ certificate.name }}</span> {{ certificate.description }}
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="section-heading animate-fade-in-left animation-delay-500">优势亮点</h2>
        <div class="flex flex-col md:flex-row">
          <ul class="list-disc pl-8 text-gray-700 leading-relaxed flex-grow pr-0 md:pr-8 space-y-2">
            <li v-for="(highlight, index) in highlights" :key="index" v-html="highlight" class="animate-fade-in-up" :style="{ 'animation-delay': (index * 70 + 500) + 'ms' }"></li>
          </ul>
          <div class="mt-8 md:mt-0 ml-0 md:ml-8 text-center flex-shrink-0 relative group">
            <p class="text-base text-gray-700 mb-3 font-semibold">个人博客二维码</p>
            <img src="../assets/images/art520.jpg" alt="QR Code" class="w-36 h-36 border-4 border-indigo-300 p-1 shadow-xl cursor-pointer rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <p class="text-sm text-gray-600 mt-3">扫码查看更多</p>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-3 bg-white border border-gray-200 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 h-auto hidden group-hover:block z-20">
              <p class="text-sm text-gray-700 mb-2 font-semibold">我的微信</p>
              <img :src="wechatQrCodeUrl" alt="WeChat QR Code" class="w-full h-auto object-cover rounded-md">
            </div>
          </div>
        </div>
      </section>

      <footer class="relative pt-0 mt-0 animate-fade-in overflow-hidden">
        <div class="waves-container">
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#7B68EE" /> <stop offset="100%" stop-color="#4169E1" /> </linearGradient>
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="url(#waveGradient)" opacity="0.8" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="url(#waveGradient)" opacity="0.6" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="url(#waveGradient)" opacity="0.4" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="url(#waveGradient)" opacity="0.2" />
            </g>
          </svg>
        </div>
        <div class="text-center text-sm text-gray-600 mt-[-1px] py-4 relative z-10 bg-white bg-opacity-70 rounded-b-xl shadow-inner-lg pb-6">
          <p>感谢您的时间和关注，期待与您进一步交流。</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// 头部信息
const avatarUrl = ref('../assets/images/2d5f739bffe09b5d8fe546f4438d594.jpg');
const birthday = ref('2001.03');
const phone = ref('13080983262');
const educationLevel = ref('本科');
const email = ref('svip888ws@foxmail.com');
const qq = ref('1911183091');
const university = ref('西安交通大学城市学院');

// 核心技能
const skills = ref([
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vue.js', 'Node.js',
  'Express.js', 'MySQL', 'Webpack', 'Git', 'Linux'
]);

// 教育背景
const education = ref({
  university: '西安交通大学城市学院',
  degree: '本科',
  duration: '2021年9月 - 2025年6月',
  major: '软件工程',
  courses: [
    '程序与设计',
    '数据结构与算法',
    '算法设计',
    'Python网络爬虫',
    'Linux应用技术',
    'MySQL数据库应用技术',
    '数据库结构',
    'Java高级',
    '响应式Web前端设计',
    '数据库技术及应用',
    'JS框架交互应用',
    '<strong class="font-bold">ES6+Node.js+Webpack (Web前端框架技术与开发)</strong>',
    '软件架构',
    '网络运行与维护技术',
    'JS框架交互应用技术',
    '网页设计(HTML+CSS)',
    '计算机组成与体系结构'
  ]
});

// 实习经历
const internships = ref([
  {
    company: '中译语通（陕西）有限公司',
    position: '数据分析见习生',
    duration: '2024年11月 - 2025年5月',
    department: '数字城市事业群',
    description: '在数字城市事业群担任见习岗位，主要负责数据的搜集、整理与初步分析，并辅助进行舆情分析工作，提升了数据敏感度和基础分析能力。'
  },
  {
    company: '参加校企合作生产实习',
    position: '全栈开发工程师',
    duration: '2024年6月 - 2024年7月',
    summary: [
      '参与游戏网站的全栈开发，负责前端界面（<span class="font-semibold">HTML、CSS、JavaScript</span>）与后端数据交互（<span class="font-semibold">Node.js、数据库</span>）。',
      '深入理解**高并发技术**挑战，学会高效沟通与项目管理，认识到前后端融合的重要性，提升了团队协作能力。'
    ]
  }
]);

// 项目经验
const projects = ref([
  {
    company: '四川学到牛科技有限公司',
    name: 'AI智能小车',
    duration: '2024年4月 - 2024年5月',
    details: [
      '负责基于<span class="font-semibold">STM32单片机</span>的AI智能小车软硬件开发，实现电机驱动与红外障碍检测。',
      '运用<span class="font-semibold">PID算法</span>精确控制电机速度与方向，优化小车在赛道上的稳定运行。',
      '通过<span class="font-semibold">多传感器融合与实时调整算法</span>，解决了复杂路面问题，小车在测试中能平稳行驶，<span class="font-semibold">速度控制准确，误差范围在2%以内</span>。',
      '深刻理解嵌入式系统开发，并锻炼了解决复杂问题的能力。'
    ]
  }
]);

// 荣誉证书
const certificates = ref([
  { name: '华为HCIP证书', description: '(Cloud Computing)' },
  { name: '华为开发者专业认证', description: 'HarmonyOS应用开发者高级认证' },
  { name: '普通话证书' },
  { name: 'C1类驾驶执照' },
  { name: '云专项技能认证', description: '(云ECS快速入门)' },
  { name: '学到牛AI智能小车结业证书' }
]);

// 优势亮点
const highlights = ref([
  '<strong class="font-bold text-blue-700">前端开发专家：</strong>精通<span class="font-semibold">HTML5、CSS3、JavaScript (ES6+)</span>，熟练运用<span class="font-semibold">Vue.js</span>等主流前端框架，具备从设计到部署的独立开发能力。',
  '<strong class="font-bold text-blue-700">后端与全栈基础：</strong>掌握<span class="font-semibold">Node.js和Express.js</span>，熟悉MySQL数据库操作和性能优化，具备一定全栈开发能力。',
  '<strong class="font-bold text-blue-700">项目实战经验：</strong>参与并完成多个真实项目，包括游戏网站全栈开发和AI智能小车，具备独立解决问题和团队协作能力。',
  '<strong class="font-bold text-blue-700">DevOps与部署：</strong>熟悉宝塔面板和Linux环境下的服务器管理与网站部署，具备运维基础。',
  '<strong class="font-bold text-blue-700">WordPress定制能力：</strong>深入理解WordPress底层，能够进行功能与外观深度定制，提升网站性能。',
  '<strong class="font-bold text-blue-700">数据分析与多媒体能力：</strong>具备数据搜集整理与基础分析经验，熟练使用PS/AE/PR等工具进行图像视频处理。',
  '<strong class="font-bold text-blue-700">高效办公技能：</strong>精通PPT、Excel、Word等办公软件，有效提升工作效率。'
]);

const blogQrCodeUrl = ref('https://via.placeholder.com/144');
const wechatQrCodeUrl = ref('https://via.placeholder.com/192');


// --- 滚动变化的背景逻辑 ---
const scrollY = ref(0);

// 监听滚动事件并更新 scrollY
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 计算动态背景样式
const backgroundStyle = computed(() => {
  // 根据滚动位置调整渐变颜色
  // 假设页面高度约 2000px，你可以根据实际内容高度调整 maxScroll
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = Math.min(scrollY.value / maxScroll, 1); // 0 到 1 的滚动进度

  // 定义两个颜色组，根据进度在它们之间插值
  // 初始颜色：浅蓝色和浅紫色
  const color1_start = [224, 242, 254]; // RGB for #e0f2fe
  const color2_start = [209, 196, 233]; // RGB for #d1c4e9

  // 滚动后的颜色：更深一些的蓝绿和深粉
  const color1_end = [159, 237, 246]; // RGB for #9fedf6 (浅青色)
  const color2_end = [255, 192, 203]; // RGB for #FFC0CB (粉色)

  // 线性插值函数
  const lerpColor = (startColor, endColor, progress) => {
    return startColor.map((c, i) => Math.round(c + (endColor[i] - c) * progress));
  };

  const currentColor1 = lerpColor(color1_start, color1_end, scrollProgress);
  const currentColor2 = lerpColor(color2_start, color2_end, scrollProgress);

  return {
    backgroundImage: `linear-gradient(to bottom right, rgb(${currentColor1.join(',')}), rgb(${currentColor2.join(',')}))`,
    transition: 'background-image 0.2s ease-out' // 让颜色变化平滑
  };
});
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

/* 整体背景渐变升级 */
/* 移除这里的固定背景，由 JS 动态控制 */
.min-h-screen {
  /* background-image: linear-gradient(to bottom right, #e0f2fe, #d1c4e9); */
}
/* 新增用于动态背景的类 */
.bg-gradient-overlay {
  background-attachment: fixed; /* 确保背景是固定的，内容滚动在上面 */
  /* transition 属性已在 JS 中动态绑定 */
}


/* Custom shadow classes */
.shadow-2xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.12), 0 15px 30px -5px rgba(0, 0, 0, 0.06);
}

.shadow-4xl { /* 新增更深度的阴影 */
  box-shadow: 0 45px 80px -20px rgba(0, 0, 0, 0.15), 0 25px 40px -10px rgba(0, 0, 0, 0.08);
}

.shadow-inner-lg {
  box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 0.04);
}

/* 背景粒子/气泡动画 */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(calc(30px + var(--random-x, 0px)), calc(-50px + var(--random-y, 0px))) scale(1.1);
  }
  66% {
    transform: translate(calc(-20px + var(--random-x, 0px)), calc(20px + var(--random-y, 0px))) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 10s infinite cubic-bezier(0.6, 0.01, 0.05, 0.9) alternate; /* 动画更长，交替播放 */
}

.animation-delay-0 { animation-delay: 0s; }
.animation-delay-1000 { animation-delay: 1s; } /* 新增延迟 */
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-3000 { animation-delay: 3s; } /* 新增延迟 */
.animation-delay-4000 { animation-delay: 4s; }

/* 内容区域整体入场动画 */
@keyframes fadeInContent {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-content {
  animation: fadeInContent 1s ease-out forwards;
  animation-delay: 0.5s; /* 稍晚于背景动画开始 */
  opacity: 0;
}


/* 头部信息动画增强 */
@keyframes fadeInOutUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInOutUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInOutLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-left {
  animation: fadeInOutLeft 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInOutRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-right {
  animation: fadeInOutRight 0.8s ease-out forwards;
  opacity: 0;
}

/* 新增：图标脉冲动画 */
@keyframes pulseIcon {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); color: #6a5acd; } /* 更亮的紫色 */
  100% { transform: scale(1); }
}
.animate-pulse-icon {
  animation: pulseIcon 1.5s ease-in-out infinite alternate;
}


/* 核心技能标签动画 */
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(20px);
    color: white;
  }
  70% {
    opacity: 1;
    transform: scale(1.05) translateY(-5px);
    color: white;
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    color: #333; /* 最终颜色改为深灰，与文字颜色协调 */
  }
}
.animate-pop-in {
  animation: popIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1.2) forwards; /* 调整缓动函数 */
  opacity: 0;
  animation-delay: var(--animation-delay, 0s);
}

.skill-tag {
  border-radius: 5px;
  padding: 4px;
  background-image: linear-gradient(45deg, #FF6B6B, #FFCD6B, #47e273); /* 活力三色渐变 */
  background-size: 300% auto;
  color: white;
  transition: background-position 0.6s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-out;
  animation-delay: calc(var(--skill-index) * 70ms + 0.9s); /* 调整初始延迟 */
}
.skill-tag:hover {
  background-position: right center; /* 鼠标悬停时渐变效果 */
  transform: scale(1.1) rotate(2deg); /* 增加旋转效果 */
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4); /* 更明显的阴影 */
  color: white; /* 悬停时保持白色文字 */
}

/* 课程标签动画 */
.course-tag {
  padding: 3px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #9370DB, #8A2BE2); /* 紫色系渐变 */
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.course-tag:hover {
  transform: translateY(-3px) scale(1.05); /* 更明显的上浮和放大 */
  box-shadow: 0 4px 10px rgba(147, 112, 219, 0.6); /* 更强的阴影 */
  background-image: linear-gradient(to right, #8A2BE2, #9370DB); /* 悬停时渐变方向反转 */
}
@keyframes floatIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
.animate-course-float-in {
  animation: floatIn 0.8s ease-out forwards;
  opacity: 0;
}


/* 章节标题样式 */
.section-heading {
  @apply text-3xl font-extrabold mb-6 relative pb-3;
  background-image: linear-gradient(to right, #6A5ACD, #483D8B); /* 更深邃的紫蓝色渐变 */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.section-heading::after {
  content: '';
  @apply absolute bottom-0 left-0 w-20 h-1.5 rounded-full;
  background-image: linear-gradient(to right, #9400D3, #4B0082); /* 标题下划线深紫渐变 */
}

/* 项目/实习块样式 */
.item-block {
  @apply pl-5 border-l-4 pb-4 rounded-r-lg; /* 增加圆角，更柔和 */
  border-image: linear-gradient(to bottom, #7B68EE, #4169E1) 1; /* 左侧边框更鲜明的蓝紫渐变 */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 调整过渡函数 */
  position: relative;
  overflow: hidden; /* 隐藏内部伪元素溢出 */
}
.item-block::before { /* 新增背景光晕效果 */
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(123, 104, 238, 0.1); /* 半透明的紫色 */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
  z-index: -1;
}
.item-block:hover {
  @apply bg-blue-50 bg-opacity-80 shadow-lg; /* hover 背景色和阴影 */
  transform: translateY(-5px) scale(1.01); /* 轻微上浮和放大 */
}
.item-block:hover::before { /* hover 时光晕扩大 */
  width: 150%;
  height: 150%;
}


/* 荣誉证书小圆点 */
.icon-dot-sparkle { /* 增加闪烁动画 */
  @apply inline-block w-2.5 h-2.5 rounded-full mr-2 flex-shrink-0;
  background-image: linear-gradient(to right, #DA70D6, #BA55D3); /* 兰花紫到中兰花紫渐变 */
  box-shadow: 0 0 8px rgba(218, 112, 214, 0.8); /* 增加更明显的光晕效果 */
  animation: sparkle 1.5s ease-in-out infinite alternate;
}
@keyframes sparkle {
  0% { box-shadow: 0 0 8px rgba(218, 112, 214, 0.8); transform: scale(1); }
  50% { box-shadow: 0 0 15px rgba(218, 112, 214, 1), 0 0 20px rgba(186, 85, 211, 0.7); transform: scale(1.1); }
  100% { box-shadow: 0 0 8px rgba(218, 112, 214, 0.8); transform: scale(1); }
}


/* 页脚波浪效果 */
.waves-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px; /* 波浪更高一点，确保覆盖底部 */
  overflow: hidden;
  margin-bottom: -1px;
  z-index: 0;
}

.waves {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 120px; /* 确保在小屏幕上不会过高 */
}

/* 波浪动画 */
.parallax > use {
  animation: move-wave 30s cubic-bezier(.55, .5, .45, .5) infinite; /* 动画更长 */
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 10s; /* 调整速度 */
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 15s; /* 调整速度 */
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 20s; /* 调整速度 */
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 25s; /* 调整速度 */
}

@keyframes move-wave {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* 动画延迟辅助类 */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-600 { animation-delay: 0.6s; }
.animation-700 { animation-delay: 0.7s; }
.animation-800 { animation-delay: 0.8s; }
.animation-900 { animation-delay: 0.9s; }


/* 响应式调整 */
@media (max-width: 768px) {
  .section-heading {
    @apply text-2xl mb-4;
  }
  .section-heading::after {
    @apply w-16 h-1;
  }
  .item-block {
    @apply pl-4;
  }
  .max-w-4xl {
    @apply p-6;
  }
  header {
    @apply flex-col items-center;
  }
  header .flex-grow {
    @apply text-center;
  }
  header h1 {
    @apply text-4xl;
  }
  header p {
    @apply text-xl;
  }
  /* 响应式头像尺寸调整 */
  .w-24 { /* 针对 w-24 h-32 */
    @apply w-20 h-28; /* 在小屏幕上稍微缩小 */
  }
  .ml-8 {
    margin-left: 0;
  }
  .pr-8 {
    padding-right: 0;
  }
  .waves-container {
    height: 80px; /* 小屏幕上波浪高度降低，但依然确保覆盖 */
  }
}
</style>