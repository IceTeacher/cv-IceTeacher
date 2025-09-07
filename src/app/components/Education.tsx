import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div className='text-sm tabular-nums text-gray-500' title={`Period: ${start} to ${end}`}>
      {start} - {end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between gap-x-2 text-base'>
          <h3 className='font-semibold leading-none' id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}>
            {school}
          </h3>
          <EducationPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent
        className='mt-2 text-foreground/80 print:text-[12px]'
        aria-labelledby={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {degree}
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className='text-xl font-bold' id='education-section'>
        教育经历
      </h2>
      <div className='space-y-4' role='feed' aria-labelledby='education-section'>
        {education.map((item) => (
          <article key={item.school}>
            <EducationItem education={item} />
          </article>
        ))}
        <div>
          <h3 className='font-semibold leading-none'>荣誉奖项</h3>
          <CardContent className='mt-2 text-foreground/80 print:text-[12px]'>
            <ol className='list-inside list-disc'>
              <li>2023全国大学生数学建模竞赛 省一等奖</li>
              <li>第十六届“挑战杯”河南省大学生课外学术科技作品竞赛 省二等奖</li>
              <li>第五届传智杯全国大学生IT技能大赛 省二等奖</li>
              <li>第十四届蓝桥杯全国软件和信息技术专业人才大赛 省三等奖</li>
              <li>河南省三好学生</li>
            </ol>
          </CardContent>
        </div>
      </div>
    </Section>
  );
}
