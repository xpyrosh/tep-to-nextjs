import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet"/> 
        <title>Toronto Eye Prosthetics</title>
      </Head>
      <Nav/>
        <section id="home">
            <div class="container">
                <div id="home-a">
                    <h1>We strive to recreate your eye to be as <span>lifelike</span> and <span>accurate</span> as possible.</h1>
                    <div class="images">
                        <img src="/img/main.jpg" alt=""/>
                        <img src="/img/main2.jpg" alt=""/>
                        <img src="/img/main3.jpg" alt=""/>
                    </div>
                </div>
                <div id="home-b">
                    
                    <div class="card" id="our-prosthetics">
                        <h1>Our Prosthetics</h1>
                        <h3>We make custom Ocular Prosthetics for:</h3>
                        <div class="inner-cols">
                            <div>
                                <h3>Artificial Eye</h3>
                                <p>A prosthesis designed to sit in place of a missing eye.</p>
                            </div>
                            <div>
                                <h3>Scleral Lens/Shell</h3>
                                <p>A prosthesis designed to cover a blind eye. All prosthetics are custom-fitted, hand-made and hand-painted.</p>
                            </div>
                        </div>
                        {/* <!-- <a href="#">Learn more about presthetic choices.</a> --> */}
            
                        <a href="#" class="btn-learn">Learn More</a>
                    </div>
                    
            
                    
                        <div class="card" id="experience">
                            <h1>Experience</h1>
                            <p>Board certified ocularists <a href="#">Diane and Phil Bowen</a> have years of experience behind them, ready to utilize to help make your eyes smile again.</p>
        
                            <a href="#" class="btn-learn">Learn More</a>
                        </div>
                    
        
                    
                        <div class="card" id="coverage">
                            <h1>Coverage</h1>
                            <p>You may not know it, but most or all of the cost of your new eye may be covered. Visit our <a href="#">fees section</a> or contact us to find out more.</p>
        
                            <a href="#" class="btn-learn">Learn More</a>
                        </div>
                    
                </div>
            </div>
        </section>
      <Footer/>
    </div>
  )
}
