// components
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/dropdown";

// hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// locales
import enUS from "@/lang/en.json";
import jaJP from "@/lang/jp.json";
import idID from "@/lang/id.json";

// assets
import ogImage from "@/assets/images/og-image.png";
import meSq from "@/assets/images/me-sq.jpg";
import munky from "@/assets/images/projects/munky-monkey.png";
import fella from "@/assets/images/projects/fella-blooms.png";
import chimera from "@/assets/images/projects/chimeradude-gang.png";

// Icons
import { ArrowRightIcon, ArrowUpIcon, AtSymbolIcon, DocumentArrowDownIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import JAIcon from "@/components/svg/ja";
import IDIcon from "@/components/svg/id";
import USIcon from "@/components/svg/us";
import GitHubIcon from "@/components/svg/github";
import TailwindIcon from "@/components/svg/tailwind";
import LaravelIcon from "@/components/svg/laravel";
import NextJSIcon from "@/components/svg/next";
import BootstrapIcon from "@/components/svg/bootstrap";
import PHPIcon from "@/components/svg/php";
import JavascriptIcon from "@/components/svg/javascript";
import HTMLIcon from "@/components/svg/html";
import CSSIcon from "@/components/svg/css";
import AlpineJSIcon from "@/components/svg/alpine";
import ReactIcon from "@/components/svg/react";
import GitIcon from "@/components/svg/git";
import ComposerIcon from "@/components/svg/composer";
import NPMIcon from "@/components/svg/npm";

const Home = () => {
    const router = useRouter();
    const [scrollTopHidden, setScrollTopHidden] = useState(true);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const tech = {
        php: {
            name: "PHP",
            labelLink: <a href="https://php.net" target="_blank" rel="noopener noreferrer" className="px-1 py-1 rounded border border-indigo-400 uppercase flex items-center text-xs whitespace-nowrap text-indigo-400"><PHPIcon className="w-5 h-5" /></a>,
            icon: <PHPIcon className="w-10 h-10 text-indigo-400" />,
        },
        js: {
            name: "Javascript",
            labelLink: <a href="https://php.net" target="_blank" rel="noopener noreferrer" className="px-1 py-1 rounded border border-yellow-500 uppercase flex items-center text-xs whitespace-nowrap text-yellow-500"><JavascriptIcon className="w-5 h-5" /></a>,
            icon: <JavascriptIcon className="w-10 h-10 text-yellow-500" />,
        },
        laravel: {
            name: "Laravel",
            labelLink: <a href="https://laravel.com" target="_blank" rel="noopener noreferrer" className="px-1 py-1 rounded border border-red-500 uppercase flex items-center text-xs whitespace-nowrap text-red-600"><LaravelIcon className="w-5 h-5" /></a>,
            icon: <LaravelIcon className="w-10 h-10 text-red-600" />
        },
        html: {
            name: "HTML 5",
            icon: <HTMLIcon className="w-10 h-10 text-orange-600" />
        },
        css: {
            name: "CSS 3",
            icon: <CSSIcon className="w-10 h-10 text-blue-600" />
        },
        alpine: {
            name: "Alpine.JS",
            icon: <AlpineJSIcon className="w-10 h-10 text-gray-700" />
        },
        react: {
            name: "React JS",
            icon: <ReactIcon className="w-10 h-10 text-blue-500" />
        },
        nextjs: {
            name: "Next.JS",
            labelLink: <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="px-1 py-1 rounded border border-gray-700 uppercase flex items-center text-xs whitespace-nowrap text-gray-700"><NextJSIcon className="w-5 h-5" /></a>,
            icon: <NextJSIcon className="w-10 h-10 text-gray-800" />
        },
        tailwind: {
            name: "Tailwind CSS",
            labelLink: <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="px-1 py-1 rounded border border-sky-500 uppercase flex items-center text-xs whitespace-nowrap text-sky-600"><TailwindIcon className="w-5 h-5" /></a>,
            icon: <TailwindIcon className="w-10 h-10 text-sky-600" />
        },
        bootstrap: {
            name: "Bootstrap",
            labelLink: <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer" className="px-1 py-1 rounded border border-indigo-500 uppercase flex items-center text-xs whitespace-nowrap text-indigo-600"><BootstrapIcon className="w-5 h-5" /></a>,
            icon: <BootstrapIcon className="w-10 h-10 text-indigo-600" />
        }
    };

    const tools = [
        {
            name: "GitHub",
            icon: <GitHubIcon className="w-10 h-10 text-gray-900" />
        },
        {
            name: "Git",
            icon: <GitIcon className="w-10 h-10 text-gray-900" />
        },
        {
            name: "Composer",
            icon: <ComposerIcon className="w-10 h-10 text-gray-900" />
        },
        {
            name: "NPM",
            icon: <NPMIcon className="w-10 h-10 text-red-600" />
        }
    ];

    const projects = [
        {
            name: "The Munky Monkeys",
            techs: [tech.php, tech.laravel, tech.bootstrap, tech.js],
            image: munky,
            desc: "An NFT collection of 3000 unique Munkys on the NEAR Protocol.",
            website: "https://themunkymonkey.com/"
        },
        {
            name: "Fella Blooms",
            techs: [tech.js, tech.php, tech.laravel, tech.nextjs, tech.tailwind],
            image: fella,
            desc: "An NFT Project with sharing royalty system (from community to community) based on NEAR Protocol.",
            website: "https://fellablooms.com/"
        },
        {
            name: "ChimeraDude Gang",
            techs: [tech.js, tech.php, tech.laravel, tech.nextjs, tech.tailwind],
            image: chimera,
            desc: "The Creatures Within a dude stays on the Aptos Foundation blockchain. Chimeras is an Evolvable Human that will bring you into the Plague Story.",
            website: "https://chimeradudegang.com/"
        }
    ];
    
    const url = (path = "/") => {
        path = path.startsWith('/') ? path.substring(1) : path;
        return process.env.NEXT_PUBLIC_BASE_URL + path;
    }

    const lang = (key, alt = undefined) => {
        let data = enUS;
        switch (router.locale) {
            case 'jp':
                data = jaJP;
                break;
            case 'id':
                data = idID;
                break;
            default:
                break;
        }

        return data[key] ?? alt ?? key;
    }

    const scrollTo = (targetId) => {
        let el = document.getElementById(targetId);
        if (!el) {
            return;
        }
        el.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const watchScroll = () => {
            setScrollTopHidden(window.scrollY <= 150);
        };
        window.addEventListener('scroll', watchScroll);

        return () => {
            window.removeEventListener('scroll', watchScroll);
        };
    }, []);
    
    return (
        <>
            <Head>
                <title>Aziz Febriyanto ー Full Stack Web Developer</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width, initial-scale=1.0' />
                <meta name="title" content="Aziz Febriyanto ー Full Stack Web Developer" />
                <meta name="description" content="Hello there! My name is Aziz Febriyanto. I am a Full-Stack web developer." />
                <meta name="keywords" content="aziz,aziz febriyanto,febriyanto,full stack,web,developer,full,stack,react,laravel,php,javascript,js,typescript,ts,js,jsx,tall stack,tailwindcss,alpinejs,laravel livewire,html,css,html5,css3" />
                <meta name="author" content="Aziz Febriyanto" />
                <meta property="og:title" content="Aziz Febriyanto ー Full Stack Web Developer" />
                <meta property="og:description" content="Hello there! My name is Aziz Febriyanto. I am a Full-Stack web developer." />
                <meta property="og:image" content={url(ogImage.src)} />
                <meta property="og:url" content={url('/')} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Aziz Febriyanto" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@teikun_72" />
                <meta property="twitter:creator" content="@teikun_72" />
                <meta property="twitter:title" content="Aziz Febriyanto ー Full Stack Web Developer" />
                <meta property="twitter:description" content="Hello there! My name is Aziz Febriyanto. I am a Full-Stack web developer." />
                <meta property="twitter:image" content={url(ogImage.src)} />
                <meta property="twitter:url" content={url('/')} />
            </Head>
            <header className="fixed top-0 w-full h-16 bg-white shadow-lg z-10">
                <nav className="w-full max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="font-bold text-xl text-gray-900">
                        {lang('title')}
                    </Link>
                    <div className="flex items-center justify-end space-x-3">
                        <Dropdown>
                            <Dropdown.Label>
                                <button className="hover:bg-gray-50 focus:bg-gray-100 transition-all duration-200 p-2 rounded-lg">
                                    <LanguageIcon className="w-5 h-5 text-gray-800" />
                                </button>
                            </Dropdown.Label>
                            <Dropdown.Content>
                                <Dropdown.Item as="a" href="/en"><USIcon className="w-5 h-5 mr-2" /> English</Dropdown.Item>
                                <Dropdown.Item as="a" href="/id"><IDIcon className="w-5 h-5 mr-2" /> Bahasa Indonesia</Dropdown.Item>
                                <Dropdown.Item as="a" href="/jp"><JAIcon className="w-5 h-5 mr-2" /> 日本語</Dropdown.Item>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </nav>
            </header>
            <main className="w-full m-0 p-0 min-h-screen antialiased bg-gray-100">
                <button hidden={scrollTopHidden} onClick={() => scrollTo('main')} className="fixed bottom-4 right-4 md:right-6 md:bottom-6 rounded-lg bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 outline-none focus:outline-none p-2 transition-all duration-200">
                    <ArrowUpIcon className="w-5 h-5" />
                </button>
                <section id="main" className="max-w-7xl mx-auto w-full min-h-screen grid place-items-center px-2 md:px-0">
                    <div className="flex flex-col md:flex-row-reverse w-full justify-center items-center">
                        <Image className="w-48 h-48 rounded-full object-cover border-4 border-gray-600 mb-5 md:mb-0" alt="Aziz Febriyanto" src={meSq} priority />
                        <div className="block w-full md:w-[calc(100%-8rem)] px-3 prose">
                            <h1 className="!text-2xl md:!text-4xl">{lang('welcome')}</h1>
                            <h2 className="!text-xl md:!text-2xl">{lang('intro')}</h2>
                            <p>{lang('exp')}</p>
                            <div className="flex space-x-2 justify-center items-center md:justify-start mb-3 flex-wrap">
                                <a href="https://github.com/teikun-86" rel="noreferrer" target="_blank" className="flex items-center underline-offset-2">
                                    <GitHubIcon className="w-6 h-6 mr-1" /> GitHub
                                </a>
                                <a href="mailto:azizfebriyanto12@gmail.com" target="_blank" rel="noreferrer" className="flex items-center underline-offset-2">
                                    <AtSymbolIcon className="w-6 h-6 mr-1" /> {lang('email', 'Email')}
                                </a>
                                <a href="https://drive.google.com/file/d/1OxwahWmL-fSjvj27dvER9-eEv1_CAChA/view?usp=sharing" rel="noreferrer" target="_blank" className="transition-all duration-100 px-2 py-1 rounded-lg group flex items-center underline-offset-2">
                                    <DocumentArrowDownIcon className="w-5 h-5 mr-1" />
                                    {lang('cv')}
                                </a>
                            </div>
                            <div className="flex w-full items-center justify-center">
                                <button onClick={() => scrollTo('experiences')} className="hover:bg-gray-200 transition-all duration-100 px-3 py-2 rounded-lg group flex items-center">
                                    # {lang('my-experiences')}
                                    <ArrowRightIcon className="w-5 h-5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="experiences" className="max-w-7xl mx-auto w-full min-h-screen px-2 md:px-0 pt-20">
                    <h2 className="font-semibold text-2xl text-center"># {lang('my-experiences')}</h2>
                    <div className="max-w-full md:max-w-[66.6666%] lg:max-w-[50%] mx-auto w-full relative">
                        <div className="bg-white p-3 rounded-lg w-full shadow-md my-3 relative">
                            <h4 className="font-semibold text-lg">LPK ZEN <span className="font-normal text-sm italic"> ー {lang('internship_student')}</span></h4>
                            <p className="text-sm text-gray-600">{lang('zen.date')}</p>
                            <p className="text-sm">{lang('zen.desc')}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg w-full shadow-md my-3 relative">
                            <h4 className="font-semibold text-lg">CV. UNTUK SEMUA SAHABAT <span className="font-normal text-sm italic"> ー {lang('fullstack')}</span></h4>
                            <p className="text-sm text-gray-600">{lang('uss.date')}</p>
                            <p className="text-sm">{lang('uss.desc')}</p>
                        </div>
                        <div className="hidden absolute -left-8 top-6 md:flex flex-col items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-50 border-gray-600 border-4"></span>
                            <span className="w-1 h-4 bg-gray-600 my-1"></span>
                            <span className="w-1 h-4 bg-gray-600 my-1"></span>
                            <span className="w-1 h-4 bg-gray-600 my-1"></span>
                            <span className="w-6 h-6 rounded-full bg-gray-50 border-gray-600 border-4"></span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => scrollTo('projects')} className="hover:bg-gray-200 transition-all duration-100 px-3 py-2 rounded-lg group flex items-center">
                            # {lang('projects')}
                            <ArrowRightIcon className="w-5 h-5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100" />
                        </button>
                    </div>
                </section>
                <section id="projects" className="max-w-7xl mx-auto w-full min-h-screen px-2 md:px-0 pt-20">
                    <h2 className="font-semibold text-2xl text-center"># {lang('projects')}</h2>
                    <div className="w-full px-2 flex flex-wrap justify-center">
                        {
                            projects.map((project, key) => {
                                return (
                                    <div key={key} className="w-full md:w-1/3 p-3">
                                        <div className="w-full bg-white shadow rounded-lg overflow-hidden">
                                            <div className="w-full max-h-48 md:max-h-40 overflow-hidden">
                                                <a href={project.website} target="_blank" rel="noopener noreferrer">
                                                    <Image className="w-full object-cover hover:scale-105 hover:brightness-50 transition-all duration-300" src={project.image} alt={project.name} />
                                                </a>
                                            </div>
                                            <div className="p-2">
                                                <a href={project.website} rel="noreferrer" target="_blank" className="text-lg font-semibold text-gray-900 block">{project.name}</a>
                                                <small className="text-gray-500">{project.website}</small>
                                                <p className="text-sm line-clamp-2">{project.desc}</p>
                                                <div className="flex items-center space-x-2 my-2 flex-wrap">
                                                    {
                                                        project.techs.map((tech, idx) => {
                                                            return <div key={idx}>{tech.labelLink}</div>;
                                                        })
                                                    }
                                                </div>
                                                <div className="flex justify-end mt-4">
                                                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 focus:bg-gray-200 flex text-sm items-center group">
                                                        See More
                                                        <ArrowRightIcon className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-focus:opacity-100 group-focus:translate-x-0 transition-all duration-200" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => scrollTo('skills')} className="hover:bg-gray-200 transition-all duration-100 px-3 py-2 rounded-lg group flex items-center">
                            # {lang('tech-stacks')}
                            <ArrowRightIcon className="w-5 h-5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100" />
                        </button>
                    </div>
                </section>
                <section id="skills" className="max-w-7xl mx-auto w-full min-h-screen px-2 md:px-0 pt-20">
                    <h2 className="font-semibold text-2xl text-center"># {lang('tech-stacks')}</h2>
                    <div className="flex flex-wrap w-full mx-auto max-w-full md:max-w-[66.666%] justify-center">
                        {
                            Object.values(tech).map((tech, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col items-center justify-center p-2 mx-2 my-2">
                                        {tech.icon}
                                        <span className="text-gray-900 font-semibold text-base">{tech.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3 className="font-semibold text-xl text-center mt-4">## {lang('tools', "Tools")}</h3>
                    <div className="flex flex-wrap w-full mx-auto max-w-full md:max-w-[66.666%] justify-center">
                        {
                            tools.map((tool, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col items-center justify-center p-2 mx-2 my-2">
                                        {tool.icon}
                                        <span className="text-gray-900 font-semibold text-base">{tool.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3 className="font-semibold text-xl text-center mt-4">## {lang('langs')}</h3>
                    <div className="flex flex-wrap w-full mx-auto max-w-full md:max-w-[66.666%] justify-center">
                        <div className="flex flex-col items-center justify-center p-2 mx-2 my-2">
                            <IDIcon className="w-10 h-10" />
                            <span className="text-gray-900 font-semibold text-base">{lang('indonesian')}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 mx-2 my-2">
                            <USIcon className="w-10 h-10" />
                            <span className="text-gray-900 font-semibold text-base">{lang('english')}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 mx-2 my-2">
                            <JAIcon className="w-10 h-10" />
                            <span className="text-gray-900 font-semibold text-base">{lang('japanese')}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-3">
                        <button onClick={() => scrollTo('contacts')} className="hover:bg-gray-200 transition-all duration-100 px-3 py-2 rounded-lg group flex items-center">
                            # {lang('contacts')}
                            <ArrowRightIcon className="w-5 h-5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100" />
                        </button>
                    </div>
                </section>
                <section id="contacts" className="!max-w-7xl mx-auto w-full min-h-screen px-2 md:px-0 pt-20 prose">
                    <h2 className="text-center"># {lang('contacts')}</h2>
                    <p className="text-center">{lang('contact.text')}</p>
                    <div className="w-full md:w-1/2 md:mx-auto bg-white p-3 rounded-lg shadow-md">
                        <div className="w-full flex flex-col mb-3">
                            <label htmlFor="yourName">{lang('contact.name')}</label>
                            <input onChange={(e) => setName(e.target.value)} id="yourName" name="name" type="text" className="w-full rounded-lg text-sm border-gray-300 focus:border-gray-500 border bg-gray-100 px-2 py-1 focus:outline-none focus:bg-gray-50 transition-all duration-200 outline-none" placeholder={lang('contact.name')} />
                        </div>
                        <div className="w-full flex flex-col mb-3">
                            <label htmlFor="yourSubject">{lang('contact.subject')}</label>
                            <input onChange={(e) => setSubject(e.target.value)} id="yourSubject" name="subject" type="text" className="w-full rounded-lg text-sm border-gray-300 focus:border-gray-500 border bg-gray-100 px-2 py-1 focus:outline-none focus:bg-gray-50 transition-all duration-200 outline-none" placeholder={lang('contact.subject')} />
                        </div>
                        <div className="flex items-center justify-end w-full">
                            <button onClick={() => {
                                window.open(`mailto:azizfebriyanto12@gmail.com?subject=${subject}&body=Hello Aziz. My name is ${name}` , "_blank")
                            }} className="px-2 py-1 rounded-lg bg-white border-0 outline-none hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-0 ring-0 transition-all duration-200 group flex items-center">
                                {lang('contact.next')}
                                <ArrowRightIcon className="w-5 h-5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full block p-3">
                <div className="w-full max-w-7xl mx-auto">
                    <p className="flex justify-center items-center">
                        Made with <HeartIcon className="w-5 h-5 text-red-600 mx-1" /> by <a href="https://github.com/teikun-86" target="_blank" rel="noopener noreferrer" className="mx-1 underline hover:text-blue-600 transition-all duration-200">Aziz Febriyanto</a>
                    </p>
                    <p className="text-center text-sm text-gray-600">Copyright &copy; {(new Date).getFullYear()}</p>
                </div>
            </footer>
        </>
    );
};

export default Home;