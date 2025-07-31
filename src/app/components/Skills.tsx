import React from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul className={cn("flex list-none flex-wrap gap-1 p-0", className)} aria-label='List of skills'>
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className='print:text-[10px]' aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className='text-xl font-bold' id='skills-section'>
        专业技能
      </h2>
      <SkillsList skills={skills} aria-labelledby='skills-section' />
      <div className='text-pretty font-mono text-sm text-foreground/80 print:text-[12px]'>
        <ul className='list-disc px-4'>
          <li>熟练HTML、CSS、Sass、Scss、Less、Tailwind CSS，能够精准还原 UI 设计师的产品原型图，实现产品级的复现</li>
          <li>熟练 TypeScript、JavaScript、jQuery、面向对象、闭包、原型链、WebApi、原生DOM</li>
          <li>
            熟练React生态，如Umi、Next.js等框架和Redux、Zustand、Ahooks、Motion等库的使用，有基于React
            Native的移动端应用混合开发经验
          </li>
          <li>熟练Vue3 / 2生态。如Axios、Vuex、Pinia等</li>
          <li>熟练 Uni-APP ，能够实现多端适配以及原生微信小程序开发</li>
          <li>熟练 Echarts 数据可视化开发 且 能够根据业务需求进行自定义扩展</li>
          <li>熟练 Ant Design、Element UI、Vant、Naive UI、Shadcn/UI、Bootstrap 等多种组件库的使用</li>
          <li>熟练Java后端开发，掌握Spring Boot、Spring MVC、MyBatis等框架，能够构建RESTful API和微服务架构</li>
          <li>熟练使用Node.js进行后端开发，掌握Express、Koa、Nest.js等框架，了解tRPC在全栈TypeScript项目中的应用。</li>
          <li>具备关系型数据库(MySQL)和非关系型数据库(MongoDB)的使用经验，能够进行基本的数据库设计和优化</li>
          <li>掌握Webpack和Vite的基本配置和使用，有相关工具的配置经验</li>
          <li>掌握HTTP等计算机网络基础知识，对浏览器知识有一定的了解</li>
        </ul>
      </div>
    </Section>
  );
}
