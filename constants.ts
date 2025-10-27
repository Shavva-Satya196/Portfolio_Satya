import { Project, SkillCategory, SocialLink } from './types';
import { GithubIcon, LinkedinIcon } from './components/Icons';

export const NAME = "Shavva Satya Keerthi Reddy";
export const ROLE = "Software Engineer";
export const BIO = "I build exceptional and accessible digital experiences for the web.";
export const RESUME_URL = "https://drive.google.com/file/d/1QG8h7FdBgJiUrYlN1wt2VWbWD3Uetmqq/view?usp=sharing";

export const ABOUT_TEXT = "A recent Information Technology graduate from SRKR Engineering College, I am a passionate software developer with hands-on experience in full-stack development. During my internship at Kodnest, I contributed to designing, coding, and deploying web applications using JavaScript, React, and Node.js. I am proficient in multiple programming languages and thrive in agile environments, focusing on enhancing user experiences and improving application performance. With a solid foundation in data structures and algorithms, I have successfully solved over 200 coding problems on various platforms.";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Shavva-Satya196',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shavva-satya-keerthi-reddy',
    icon: LinkedinIcon,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/ReddyShavva198/',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/shavva_satya',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Image Analysis Application',
    description: 'A full-stack image analysis application using Next.js, enabling users to upload images and receive AI-generated descriptions via Google AI Studio’s multimodal API. Features a robust image upload interface with validation and real-time feedback.',
    image: 'https://picsum.photos/seed/project1/800/600',
    tags: ['Next.js', 'TypeScript', 'Google AI Studio', 'CSS'],
    codeUrl: 'https://github.com/Shavva-Satya196/Image-Analysis-Application',
    liveUrl: 'https://image-delphi.vercel.app/',
  },
  {
    title: 'AI Flashcard Generator',
    description: 'A full-stack AI-based flashcard generator leveraging Google AI Studio (Gemini API) to generate Q&A pairs from user-defined topics. Features a responsive UI and local storage caching to improve performance.',
    image: 'https://picsum.photos/seed/project2/800/600',
    tags: ['React.js', 'Express.js', 'Google AI Studio', 'CSS'],
    codeUrl: 'https://github.com/Shavva-Satya196/AI-Flashcard-Generator',
    liveUrl: 'https://ai-flash-cards-sigma.vercel.app/',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Google AI Studio', 'VS Code', 'HackerRank'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB'],
  },
];