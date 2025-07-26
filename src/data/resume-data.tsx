import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "宇文 Teacher",
  initials: "IceTeacher",
  location: "中国, 河南, 郑州",
  locationLink: "https://ditu.amap.com/place/B0FFF9GURB",
  about: "致力于构建高质量产品的前端工程师。",
  summary: (
    <>
      我是⼀名专注于高性能Web应用开发的前端工程师，擅长基于React、Next.js、Vue.js的前端开发及Spring
      Boot、Node.js等后端服务的架构与实现。具备丰富的技术架构设计和远程团队协作经验，能够独立负责从需求分析、系统设计到前后端开发与上线的全流程。熟悉TypeScript、Tailwind
      CSS等主流技术，具备WebRTC/WebSockets等实时协作系统开发能力。曾主导婚纱影楼档期管理、社区志愿者积分兑换等多个项目，注重端到端类型安全、系统性能优化及良好用户体验。热衷于通过技术创新提升产品价值和团队效率。
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
      degree: "计算机科学与技术 本科",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "婚纱影楼档期管理系统",
      link: "#",
      badges: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "tRPC"],
      title: "前端开发工程师（全栈）",
      start: "2025",
      end: null,
      description: (
        <>
          本项目采用Next.js全栈开发了一个婚纱影楼档期管理系统，包含婚纱影楼企业官网和档期管理系统的前后台，支持用户在线浏览摄影师作品、预约拍摄时间和在线支付功能。企业官网在充分利用了React服务端组件和客户端组件的优势，在保持良好用户体验的同时，显著提升了首屏加载速度。档期管理系统还包含摄影师排班管理、客片管理和数据统计分析功能，提高了影楼的运营效率。系统通过tRPC和Prisma的组合，实现了从前端到数据库的端到端完整的类型安全，大幅减少了系统在实际使用过程中可能出现的类型错误和运行时错误。系统上线后，帮助客户提升了30%的线上预约转化率，减少了50%的人工排期工作量。
          <ul className='list-inside list-disc'>
            <li>通过Next.js实现了服务端渲染(SSR)和静态生成(SSG)，提升了页面加载速度和SEO优化</li>
            <li>使用tRPC实现了前后端的端到端类型安全通信，确保了数据的一致性和可靠性</li>
            <li>使用Redis实现了热门摄影师和套餐的缓存机制，显著提升了系统响应速度</li>
          </ul>
        </>
      ),
    },
    {
      company: "DrawingBook儿童绘图本",
      link: "https://github.com/IceTeacher/DrawingBook",
      badges: ["Harmonyos Next", "ArkTS", "ArkUI", "Spring Boot"],
      title: "鸿蒙开发工程师",
      start: "2024",
      end: "2025",
      description: (
        <>
          为 DrawingBook 开发 HarmonyOS NEXT 下的绘本阅读和管理应用，旨在为用户提供便捷的绘本查找、阅读和管理功能。
          <ul className='list-inside list-disc'>
            <li>使用ArkTS、ArkUI开发</li>
            <li>后端使用Spring Boot提供API服务和图片存储功能</li>
          </ul>
        </>
      ),
    },
    {
      company: "社区志愿者服务积分兑换系统",
      link: "#",
      badges: ["Uni-APP", "Vue.js", "React", "Spring Boot", "MyBatis"],
      title: "前端开发工程师",
      start: "2023",
      end: "2024",
      description: (
        <>
          确保前后端的类型安全，并通过锁机制和事务处理确保积分兑换和商品核销过程的数据一致性和系统稳定性。使用Spring
          Boot实现了核心业务逻辑，通过MyBatis进行ORM映射，并使用Redis实现了高频数据的缓存，显著提升了系统性能。
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Node.js/Express/Koa/Nest.js",
    "Java/Spring Boot/MyBatis",
    "TypeScript",
    "Tailwind CSS",
    "WebRTC",
    "WebSockets",
  ],
  projects: [
    {
      title: "DrawingBook儿童绘图本",
      techStack: ["Harmonyos Next", "ArkTS", "ArkUI", "Spring Boot"],
      description:
        "DrawingBook 是一个 HarmonyOS NEXT 下的绘本阅读和管理应用，旨在为用户提供便捷的绘本查找、阅读和管理功能。该应用包含首页、书单查找、听故事、登录、书单详情、书籍详情、排行榜、分类、带有分类标签的书籍列表、个人资料和更多评论等多个页面。",
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
        "经过多次迭代优化，已实现小麦病虫害识别的准确率高达98%。微信小程序前端允许用户通过拍照来识别小麦病虫害，并提供相关信息与处理建议。后端使用Spring Boot构建了一个稳定的API服务，处理图像上传和识别结果返回，并通过MyBatis实现了与MySQL数据库的交互，存储识别历史和用户数据。",
    },
  ],
} as const;
