import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getBlogs } from "../lib/api";
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/navbar';
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import { ContactForm } from "../components/contact";

export default function Home({ blogs, database }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
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
            <div className="row g-3">
              <div className="col-sm-4">
              <motion.div ref={ref} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }}>
                <div className="col-sm-11 rounded p-5 text-center bg-dark">
                  <p class="badge text-wrap bg-light text-dark">December 2016 - present</p>
                  <p><img src="/images/mc.png" height="73px" width="117px" className="my-4" /></p>
                  <h4>Mastercard</h4>
                  <p className="text-muted mt-3">Senior Analyst, Marketing</p>
                </div>
              </motion.div>
              </div>
              <div className="col-sm-4">
              <motion.div ref={ref} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="col-sm-11 rounded p-5 text-center bg-dark">
                  <p class="badge text-wrap bg-light text-dark">June 2015 - November 2016</p>
                  <p><img src="/images/ht.png" height="73px" width="74px" className="my-4" /></p>
                  <h4>Hindustan Times</h4>
                  <p className="text-muted mt-3">Senior Content Producer</p>
                </div>
              </motion.div>    
              </div>
              <div className="col-sm-4">
              <motion.div ref={ref} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="col-sm-11 rounded p-5 text-center bg-dark">
                  <p class="badge fw-bold text-wrap bg-light text-dark">June 2013 - May 2015</p>
                  <p><img src="/images/mwg.png" height="73px" width="175" className="my-4" /></p>
                  <h4>Mindworks Global</h4>
                  <p className="text-muted mt-3">Copy Editor</p>
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.showcase} id="showcase">
          <div className="container text-dark">
            <div className="row g-2 pt-5 align-items-center border-bottom">
              <div className="col-sm-7">
                <div className="col-sm-12 rounded p-5 text-left">
                  <h4 className="display-5">Copy writing & editing</h4>
                  <p className="text-muted mt-3">Senior Analyst, Marketing</p>
                </div>
              </div>
              <div className="col-sm-5 order-md-1">
                <div className="col-sm-12 rounded p-5 text-center" style={{ backgroundImage: "url(/images/blob1.png)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                <motion.div ref={ref} animate={{ y: [-25,0,10,-25] }} transition={{ repeat: Infinity, duration: 10, repeatDelay:.5 }}>
                  <p><img src="/images/htshowcase.png" height="400px" className="my-4" /></p>
                </motion.div>
                </div>
              </div>
            </div>
            <div className="row g-2 pt-5 align-items-center border-bottom">
            <div className="col-sm-5  order-lg-1 order-sm-2">
                <div className="col-sm-12 rounded p-5 text-center" style={{ backgroundImage: "url(/images/blob2.png)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                <motion.div ref={ref} animate={{ y: [-25,0,10,-25] }} transition={{ repeat: Infinity, duration: 10, repeatDelay:.5 }}>
                  <p><img src="/images/invisionshowcase.png" height="400px" className="my-4" /></p>
                </motion.div>
                </div>
              </div>
              <div className="col-sm-7 order-lg-2 order-sm-1">
                <div className="col-sm-12 rounded p-5 text-right">
                  <h4 className="display-5  text-right">Interactive design</h4>
                  <p className="text-muted mt-3 text-right">Senior Analyst, Marketing</p>
                </div>
              </div>
            </div>
            <div className="row g-2 pt-5 align-items-center">
              <div className="col-sm-7">
                <div className="col-sm-12 rounded p-5 text-left">
                  <h4 className="display-5">Print design</h4>
                  <p className="text-muted mt-3">Senior Analyst, Marketing</p>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="col-sm-12 rounded p-5 text-center" style={{ backgroundImage: "url(/images/blob3.png)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                <motion.div ref={ref} animate={{ y: [-25,0,10,-25] }} transition={{ repeat: Infinity, duration: 10, repeatDelay:.5 }}>
                  <p><img src="/images/htshowcase.png" height="400px" className="my-4" /></p>
                </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skills} id="skills">
        <div className="col-md-8 text-dark pt-4">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-2">
                <p><img src="/images/indesign.png" height="100px" /></p>
              </div>
              <div className="col-md-2">
                <p><img src="/images/photoshop.png" height="100px" /></p>
              </div>
              <div className="col-md-2">
                <p><img src="/images/invision.svg" height="85px" /></p>
              </div>
              <div className="col-md-2">
                <p><img src="/images/html.png" height="100px" /></p>
              </div>
              <div className="col-md-2">
                <p><img src="/images/css.png" height="100px" /></p>
              </div>
              <div className="col-md-2">
                <p><img src="/images/ceros.png" width="150px" /></p>
              </div>
            </div>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <ContactForm />
        </section>
        
        <section>
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
        </section>
        <footer className="py-5 bg-dark">
            <div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
      
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