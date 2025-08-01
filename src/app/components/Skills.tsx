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
  skillsInfo?: string | React.ReactNode;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, skillsInfo, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className='text-xl font-bold' id='skills-section'>
        专业技能
      </h2>
      <SkillsList skills={skills} aria-labelledby='skills-section' />
      <div className='text-pretty font-mono text-sm text-foreground/80 print:text-[12px]'>{skillsInfo}</div>
    </Section>
  );
}
