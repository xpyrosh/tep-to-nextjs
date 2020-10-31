import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About(){
    return (
        <div>
            <Nav/>
            <section id="about">
                <img src="/img/paint-eye.jpg" alt="" class="about-banner"/>
                <div class="container">
                    <div id="about-a">
                        <div class="card about-us">
                            <h1>About Us</h1>
                            <h3>Our qualifications: What it means to be Board Certified</h3>
                            <p>All Ocularists currently practicing in Ontario are required to be Board Certified by the National Examining Board of Ocularists (NEBO) in order to bill ADP for services rendered. NEBO is associated with the American Society of Ocularists (ASO). The ASO is the only certifying educational body for Ocularists in the world and is known for it's very high standards in education.<br/><br/>

                            Training for an Ocularist is done on an apprentice basis which requires 10,000 hours (a minimum of 5 years) of practical work with a journeyman Ocularist as well as the class time and required course load.<br/><br/>
                                
                            Our education is ongoing and we are required to certify every six years by taking courses, writing exams, etc. For this we typically must travel to the USA in the spring and fall for about five days each year to attend courses and lectures.<br/><br/>
                                
                            We also have certification from the ASO to assert that all course requirements have been met to receive their diploma and to be able to use the credentials BADO (Board Approved Diplomate Ocularist).</p>
                        </div>

                        <div class="background">
                            {/* <!-- <div class="background-card card">
                                <img src="/img/phils-photos/PhilProfile.JPG" alt="">
                                <div>
                                    <h2>Phil Bowen</h2>
                                    <h3>BCO, BADO</h3>
                                    <p>Phil started training in 2007 with his mother Diane and was Board Certified in March of 2013. Since then he has continued trained and is currently practicing in both the Toronto and Hamilton locations. He is also a lecturer, and a Board Member of the American Society of Ocularists in Education and enjoys his role there overseeing and striving to improve the educational process.</p>
                                </div>
                            </div> --> */}

                            <div class="background-card-test card">
                                <p>Phil started training in 2007 with his mother Diane and was Board Certified in March of 2013. Since then he has continued trained and is currently practicing in both the Toronto and Hamilton locations. He is also a lecturer, and a Board Member of the American Society of Ocularists in Education and enjoys his role there overseeing and striving to improve the educational process.</p>
                                <div>
                                    <div>
                                        <h2>Phil Bowen</h2>
                                        <h3>BCO, BADO</h3>
                                    </div>
                                    <img src="/img/phils-photos/PhilProfile.JPG" alt=""/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}