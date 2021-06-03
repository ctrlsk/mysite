import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getBlogs } from "../lib/api";
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/navbar';

export default function Home({ blogs, database }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  return (
    <>
      <Head>
        <title>shashank.work - personal website, portfolio, blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Navbar />
        
        <header className={styles.intro}  id="page_top">
            <div className="d-flex flex-column m-sm-2 m-lg-5 p-5 align-middle text-left">
              <motion.div initial={{x: -100, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50, delay: 0.4 }}>
                <div className="col-md-7 mr-lg-5"><h1 className="display-3 text-white">Let's build something amazing together</h1></div>
              </motion.div>
                <div className="col-md-7 mt-4">
                <motion.div  initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                  <a className="btn btn-dark" href="#about">Let's go!</a>
                </motion.div>
                </div>
            </div>
        </header>
        
        <section className={styles.about} id="about">
            <div className="container px-4">
                <div className="row g-2 justify-content-center">
                    <div className="col-lg-3">
                        <img className={styles.myphoto} src="/images/shashank-v2.jpg"/>
                    </div>
                    <div className="col-lg-5">
                        <h2 className="font-weight-bold">Hi! I'm Shashank.</h2>
                        <p className="lead mt-3">That content guy. A journalist-turned-marketing professional based in Gurgaon, India. I write and edit, research and analyse, and design amazing things. I pride myself on lucid communication and being an easy to work with, friendly guy.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className={styles.experience} id="experience">
          <div className="container text-white">
            <div className="row g-2">
              <div className="col-sm-4">
              <motion.div ref={ref} animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="col-sm-11 rounded p-5 text-center bg-dark">
                  <p class="badge text-wrap bg-danger text-white">December 2016 - present</p>
                  <p><img src="/images/mc.png" height="73px" className="my-4" /></p>
                  <h4>Mastercard</h4>
                  <p className="text-muted mt-3">Senior Analyst, Marketing</p>
                </div>
              </motion.div>
              </div>
              <div className="col-sm-4">
              <motion.div ref={ref} animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <div className="col-sm-11 rounded p-5 text-center bg-dark">
                  <p class="badge text-wrap bg-danger text-light">June 2015 - November 2016</p>
                  <p><img src="/images/ht.png" height="73px" className="my-4" /></p>
                  <h4>Hindustan Times</h4>
                  <p className="text-muted mt-3">Senior Content Producer</p>
                </div>
              </motion.div>    
              </div>
              <div className="col-sm-4">
              <motion.div ref={ref} animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} transition={{ duration: 0.5, delay: 1 }}>
                <div className="col-sm-11 rounded p-5 text-center bg-dark">
                  <p class="badge fw-bold text-wrap bg-danger text-light">June 2013 - May 2015</p>
                  <p><img src="/images/mwg.png" height="73px" className="my-4" /></p>
                  <h4>Mindworks Global</h4>
                  <p className="text-muted mt-3">Copy Editor</p>
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>Contact us</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="py-5 bg-dark">
            <div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
      <main className="page-container">
        <div className="main">
          <h1>
            Notion API + Tailwind + Next.js
          </h1>
        </div>
        <p>Welcome to my example blog!</p>
        <p>Technologies used:</p>
        <ul className="list-disc list-inside">
          <li className="my-2">
            <span className="px-2 py-1 bg-yellow-200">Notion API</span> as
            Markdown backend
          </li>
          <li className="mb-2">
            <span className="px-2 py-1 bg-yellow-200">Tailwind</span> for
            styling
          </li>
          <li>
            <span className="px-2 py-1 bg-yellow-200">Next.js</span> as
            framework
          </li>
        </ul>
        <p>
          Source code can be found on{" "}
          <a
            className="underline"
            href="https://github.com/thomasledoux1/notion-blog"
          >
            Github
          </a>
        </p>
        <p>
          Data comes from{" "}
          <a className="underline" href={`https://notion.so/${database}`}>
            Notion
          </a>
        </p>
        <p>
          Hosted on{" "}
          <a
            className="underline"
            href="https://notion-blog-ruby-kappa.vercel.app/"
          >
            Vercel
          </a>
        </p>
        <h2 className="my-4 text-xl font-bold md:text-2xl ">Blogs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map(blog => (
            <Link passHref key={blog.id} href={`/blog/${blog.id}`}>
              <a>
                <article className="shadow-md hover:shadow-xl p-4">
                  <h2>{blog.properties.Name.title[0].plain_text}</h2>
                  <h4>{blog.properties.Description.rich_text[0].plain_text}</h4>
                  <p>{new Date(blog.last_edited_time).toLocaleDateString('en-GB')}</p>
                </article>
              </a>
            </Link>
          ))}
        </div>

        <article></article>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getBlogs();
  return {
    props: {
      blogs,
      database: process.env.NOTION_DATABASE
    },
    revalidate: 3600
  };
}