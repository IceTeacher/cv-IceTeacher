import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "宇文 Teacher",
  initials: "IceTeacher",
  location: "中国, 河南, 郑州",
  locationLink: "https://ditu.amap.com/place/B0FFF9GURB",
  about: "致力于构建高质量产品的前端工程师。",
  summary: (
    <>
      一名对构建端到端高质量应用充满热情的全栈工程师，以React和Next.js前端技术为核心，并具备Spring
      Boot与Node.js的后端能力。曾独立主导开发婚纱摄影工作室老旧管理系统以及官网的全面重构项目，通过技术优化帮助客户将系统部署成本降低50%的同时将线上预约转化率提升了30%，并减少了50%的人工排期工作量。
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/47437649?v=4",
  personalWebsiteUrl: "https://wwww.rainafter.cn",
  contact: {
    email: "Ice.Teacher@Outlook.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/IceTeacher",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "新乡学院",
      degree: "计算机科学与技术 本科 新乡学院优秀毕业生",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "婚纱影楼工作室",
      link: "#",
      badges: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "tRPC"],
      title: "前端开发工程师（全栈）",
      start: "2025.03",
      end: "2025.06",
      description: (
        <>
          <ul className='list-inside list-disc'>
            <li>
              <b>成就：</b>
              主导项目重构改造从0到1的完整设计、研发与部署。项目上线后，帮助客户线上预约转化率提升30%，
              人工排期工作量减少50%
            </li>
            <li>
              <b>性能与SEO：</b>
              为解决官网首屏加载慢、不利于搜索引擎收录的问题，采用Next.js混合渲染模式。针对作品展示等静态页面使用SSG，将
              LCP时间从2.6秒优化至1.2秒；对用户预约等动态页面采用SSR，确保了最佳SEO效果与数据实时性。
            </li>
            <li>
              <b>类型安全与效率：</b>为解决传统REST
              API开发中前后端类型不匹配、联调效率低的问题，引入tRPC与Prisma，实现了从数据库到前端的端到端类型安全，
              将开发阶段因接口数据不匹配导致的Bug减少了约20%，提升了多人协作效率与项目稳定性。
            </li>
            <li>
              <b>高可用：</b>
              通过与Microsoft
              Clarity数据埋点系统的集成，合理化分析用户行为，识别出热门摄影师、套餐的高频访问路径和用户高热度点击区域，设计并实现了基于Redis的高热度热门数据的缓存策略，将核心页面的
              API平均响应时间从约300ms降低至100ms以下。
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "社区志愿者服务积分兑换平台",
      link: "#",
      badges: ["Uni-APP", "Vue.js", "React", "Spring Boot"],
      title: "前端开发工程师",
      start: "2024.03",
      end: "2024.06",
      description: (
        <>
          <ul className='list-inside list-disc'>
            <li>
              <b>跨端方案：</b>
              为在有限的成本内覆盖Android、iOS及微信小程序多端用户，主导采用Uni-APP作为跨端解决方案。通过封装平台特定API和条件编译，实现了超过85%的代码复用率，将多端应用的开发周期缩短了至少一半。
            </li>
            <li>
              <b>后台系统：</b> 使用React和Ant
              Design独立开发了后台管理系统，通过对大型列表数据页面引入虚拟列表和前端搜索优化，使管理员处理上万条商品核销记录的页面加载和操作流畅度提升了90%。
            </li>
            <li>
              <b>后端服务：</b>:
              负责后端积分兑换核销业务模块部分，针对积分兑换高频读写场景，引入Redis缓存用户积分与热门商品信息，将兑换接口的响应时间稳定在80ms以下。
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "易查茶微信小程序（竞赛项目）",
      link: "#",
      badges: ["miniProgram", "Vant", "Spring Boot", "React"],
      title: "前端开发工程师",
      start: "2023.10",
      end: "2024.01",
      description: (
        <>
          <ul className='list-inside list-disc'>
            <li>
              <b>核心功能：</b>
              负责实现拍照识茶核心功能。通过调用微信原生API并对上传图片进行预处理，结合后端图像识别服务，将用户从拍照到获取识别结果的端到端平均耗时控制在2.5秒以内。
            </li>
            <li>
              <b>用户体验：</b>
              使用Vant组件库构建UI，并针对小程序环境使用骨架屏增强用户体验，并将程序主包与用于拍照识别的分包通过分包加载进行性能优化，将小程序的启动耗时减少了40%，关键页面的加载成功率达到99.9%。
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Java(Spring Boot/MyBatis)",
    "Node.js(Express/Koa/Nest.js)",
    "TypeScript",
    "Tailwind CSS",
    "CSS/Sass/Scss/Less",
    "WebSockets",
    "WebRTC",
    "MySQL/MongoDB",
  ],
  skillsInfo: (
    <>
      <ul className='list-disc px-4'>
        <li>
          <b>精通：</b>TypeScript, React, Next.js, Node.js (Express, Koa), Web性能优化, RESTful API设计,
        </li>
        <li>
          <b>熟悉：</b>Vue.js, Spring Boot, MyBatis, MySQL, MongoDB, Redis, Uni-APP, Echarts
        </li>
        <li>
          <b>了解：</b>HarmonyOS (ArkTS, ArkUI), 原生Android/iOS开发 (Kotlin/Swift), WebRTC, tRPC
        </li>
        <li>
          <b>工具：</b>Vite, Webpack, Git, Docker, Nginx
        </li>
      </ul>
    </>
  ),
  projects: [
    {
      title: "DrawingBook儿童绘图本",
      techStack: ["Harmonyos Next", "ArkTS", "ArkUI", "Spring Boot"],
      description:
        "DrawingBook是一个HarmonyOS NEXT下的绘本阅读和管理应用，旨在为用户提供便捷的绘本查找、阅读和管理功能。该应用包含首页、书单查找、听故事、登录、书单详情、书籍详情、排行榜、分类、带有分类标签的书籍列表、个人资料和更多评论等多个页面。",
      link: {
        label: "DrawingBook",
        href: "https://github.com/IceTeacher/DrawingBook",
      },
    },
    {
      title: "番茄钟个人待办事项APP",
      techStack: ["React Native", "Kotlin", "Swift", "Spring Boot", "mongoDB"],
      description:
        "使用Kotlin和Swift分别原生开发的Android和iOS系统小组件，以提高用户的便利性和效率。后端使用Koa框架构建了轻量级API服务，实现了用户认证、任务同步和数据统计功能，通过MongoDB存储用户任务数据和完成记录。",
    },
    {
      title: "基于物品分类识别的小麦病虫害识别系统",
      techStack: ["miniprogram ", "Python", "Spring Boot"],
      description:
        "微信小程序前端允许用户通过拍照来识别小麦病虫害，并提供相关信息与处理建议。后端使用Spring Boot构建了一个稳定的API服务，处理图像上传和识别结果返回，并通过MyBatis实现了与MySQL数据库的交互，存储识别历史和用户数据。",
    },
  ],
} as const;
