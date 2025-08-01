import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "宇文 Teacher",
  initials: "IceTeacher",
  location: "中国, 河南, 郑州",
  locationLink: "https://ditu.amap.com/place/B0FFF9GURB",
  about: "致力于构建高质量产品的前端工程师。",
  summary: (
    <>
      <ul className='list-inside list-disc'>
        <li>2023全国大学生数学建模竞赛 省一等奖</li>
        <li>第十六届“挑战杯”河南省大学生课外学术科技作品竞赛 省二等奖</li>
        <li>第十四届蓝桥杯全国软件和信息技术专业人才大赛 省三等奖</li>
        <li>河南省三好学生</li>
        <li>具备项目从0到1部署上线的经验</li>
        <li>对前后端接口联调过程中的问题能够进行清晰定位</li>
        <li>熟练Spring Boot 以及 Express、Flask 等多种不同语言后端开发框架</li>
        <li>能够独当一面，从0到1构建前端项目且具备完整项目设计、研发、部署、全链路问题排查能力</li>
      </ul>
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
      start: "2025",
      end: null,
      description: (
        <>
          采用Next.js全栈开发了一个婚纱影楼工作室管理系统，包含婚纱影楼企业官网和档期管理系统的前后台，支持用户在线浏览摄影师作品、预约拍摄时间和在线支付功能。企业官网在充分利用了React服务端组件和客户端组件的优势，在保持良好用户体验的同时，显著提升了首屏加载速度。档期管理系统还包含摄影师排班管理、客片管理和数据统计分析功能，提高了影楼的运营效率。系统通过tRPC和Prisma的组合，实现了从前端到数据库的端到端完整的类型安全，大幅减少了系统在实际使用过程中可能出现的类型错误和运行时错误。系统上线后，帮助客户提升了30%的线上预约转化率，减少了50%的人工排期工作量。
          <ul className='list-inside list-disc'>
            <li>通过Next.js实现了服务端渲染(SSR)和静态生成(SSG)，提升了页面加载速度和SEO优化</li>
            <li>使用tRPC实现了前后端的端到端类型安全通信，确保了数据的一致性和可靠性</li>
            <li>使用Redis实现了热门摄影师和套餐的缓存机制，显著提升了系统响应速度</li>
          </ul>
        </>
      ),
    },
    {
      company: "易查茶微信小程序",
      link: "#",
      badges: ["miniProgram", "Vant", "Spring Boot"],
      title: "前端开发工程师",
      start: "2024",
      end: "2025",
      description: (
        <>
          基于微信小程序的茶叶查询平台，用户可以通过拍照识别茶叶种类，并获取相关信息和购买链接。该小程序使用Vant组件库实现了良好的用户体验，后端使用Spring
          Boot提供API服务和图片存储功能。通过图像识别技术，系统能够准确识别多种茶叶类型，并提供详细的茶叶介绍和购买建议。
          <ul className='list-inside list-disc'>
            <li>使用微信小程序的API实现了拍照识别功能，用户可以通过拍照上传茶叶图片</li>
            <li>使用Vant组件库实现了小程序的UI设计，提供了良好的用户体验</li>
            <li>使用图像识别技术实现了茶叶种类的自动识别，提供了准确的茶叶信息</li>
            <li>后端使用Spring Boot提供API服务和图片存储功能</li>
          </ul>
        </>
      ),
    },
    {
      company: "社区志愿者服务积分兑换平台",
      link: "#",
      badges: ["Uni-APP", "Vue.js", "React", "Spring Boot"],
      title: "前端开发工程师",
      start: "2023",
      end: "2024",
      description: (
        <>
          确保前后端的类型安全，确保积分兑换和商品核销过程的数据一致性和系统稳定性。使用Spring
          Boot实现了核心业务逻辑，通过MyBatis进行ORM映射，并使用Redis实现了高频数据的缓存，显著提升了系统性能。
          <ul className='list-inside list-disc'>
            <li>使用Uni-APP实现了多端适配，支持Android、iOS和小程序等多个平台</li>
            <li>使用React实现了后台管理页面的开发</li>
            <li>使用Spring Boot实现了后端API服务，提供了积分兑换和商品核销的核心业务逻辑</li>
            <li>使用MyBatis进行ORM映射，简化了数据库操作</li>
            <li>使用Redis实现了高频数据的缓存，显著提升了系统性能</li>
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
    "Java/Spring Boot/MyBatis",
    "Node.js/Express/Koa/Nest.js",
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
        <li>熟练HTML、CSS、Sass、Scss、Less、Tailwind CSS，能够精准还原UI设计师的产品原型图，实现产品级的复现</li>
        <li>熟练TypeScript、JavaScript、jQuery、面向对象、闭包、原型链、WebAPI、原生DOM</li>
        <li>
          熟练React生态，如Umi、Next.js等框架和Redux、Zustand、Ahooks、Motion等库的使用，有基于React
          Native的移动端应用混合开发经验
        </li>
        <li>熟练Vue3/2生态，如Nuxt.js框架和Vue Router、Pinia、Vuex等库的使用</li>
        <li>熟练Uni-APP，能够实现多端适配以及原生微信小程序开发</li>
        <li>熟练Echarts数据可视化开发且能够根据业务需求进行自定义扩展</li>
        <li>熟练Ant Design、Element UI/Plus、Vant、Naive UI、Shadcn/UI、Bootstrap 等多种组件库的使用</li>
        <li>熟练Java后端开发，掌握Spring Boot、Spring MVC、MyBatis等框架，能够构建RESTful API和微服务架构</li>
        <li>熟练使用Node.js进行后端开发，掌握Express、Koa、Nest.js等框架，了解tRPC在全栈TypeScript项目中的应用。</li>
        <li>具备关系型数据库(MySQL)和非关系型数据库(MongoDB)的使用经验，能够进行基本的数据库设计和优化</li>
        <li>掌握Webpack和Vite的基本配置和使用，有相关工具的配置经验</li>
        <li>掌握HTTP等计算机网络基础知识，对浏览器知识有一定的了解</li>
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
