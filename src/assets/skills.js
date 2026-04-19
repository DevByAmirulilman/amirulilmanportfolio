import { FaAngular, FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact, FaGithub } from "react-icons/fa"
import { SiAxios, SiDotnet, SiExpress, SiMongodb, SiPostgresql, SiStyledcomponents, SiMui, SiBlender, SiWebgl, SiFirebase, SiNextdotjs, SiDbeaver, SiMysql } from "react-icons/si"
import { TbBrandFramerMotion, TbBrandRedux, TbBrandThreejs } from "react-icons/tb"
import { IoLogoJavascript, IoLogoAndroid } from "react-icons/io5"
import { VscVscode } from "react-icons/vsc"
import { BsBadge3dFill } from "react-icons/bs"

export const backend = [
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
    { name: 'Express.js', icon: SiExpress, color: '#f7df1e' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#417ba2' },
    { name: 'MongoDB', icon: SiMongodb, color: '#538557' },
    { name: '.NET', icon: SiDotnet, color: '#5c2992' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Java', icon: FaJava, color: '#f97316' },
    { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' },
    { name: 'Android', icon: IoLogoAndroid, color: '#3DDC84' },
    { name: 'Dotnet', icon: SiDotnet, color: '#ff0303' },
    { name: 'SQL Server Management Studio (SSMS)', icon: SiMysql, color: '#ff0303' },

]

export const frontend = [
    { name: 'React', icon: FaReact, color: '#61DBFB' },
    { name: 'React Native', icon: FaReact, color: '#4722ee' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#94a3b8' },
    { name: 'Angular', icon: FaAngular, color: '#c30130' },
    { name: 'Three.js', icon: TbBrandThreejs, color: '#a78bfa' },
    { name: 'Redux', icon: TbBrandRedux, color: '#764abc' },
    { name: 'Axios', icon: SiAxios, color: '#5a29e4' },
    { name: 'Framer Motion', icon: TbBrandFramerMotion, color: '#805bdd' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'Material UI', icon: SiMui, color: '#007FFF' },
    { name: 'WebGL', icon: SiWebgl, color: '#22D3EE' },
    { name: 'HTML5', icon: FaHtml5, color: '#E44D26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#264DE4' },
    { name: 'Blender', icon: SiBlender, color: '#F5792A' },
]

export const tools = [
    { name: 'GitHub', icon: FaGithub, color: '#94a3b8' },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    { name: 'DBeaver', icon: SiDbeaver, color: '#94a3b8' },
    { name: '3D', icon: BsBadge3dFill, color: '#22D3EE' },
    { name: 'Visual Studio', icon: VscVscode, color: '#4e06f5' },
]

export const educations = [
    {
        name: 'Universiti Teknologi MARA (UiTM) Shah Alam',
        details: "Bachelor's Degree in Computer Science",
    },
    {
        name: 'Universiti Teknologi MARA (UiTM) Machang',
        details: 'Diploma in Computer Science',
    },
]