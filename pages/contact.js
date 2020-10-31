import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Nav/>
            <section id="contact">
                <div class="container">
                    <div id="contact-wrapper">
                        <div id="contact-a">
                            <h2>Send us an email!</h2>
                            <form name="contact" method="POST" id="contact-form">
                                <div class="text-fields">
                                    <input type="text" id="name" class="text-input" name="name" placeholder="Name"/>
                                    <input type="text" id="email" class="text-input" name="email" placeholder="Email"/>
                                    <input type="text" id="subject" class="text-input" name="subject" placeholder="Subject"/>
                                    <textarea name="message" class="text-input" id="message" placeholder="Please describe what you are inquirying about."></textarea>
                                </div>
                                <div>
                                    <button type="submit" class="btn-learn">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div id="contact-b">
                            <div id="tab-contents">
                                <div class="tab-content" id="Toronto">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0961588034734!2d-79.51760988408628!3d43.646167679121554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37acb41feb49%3A0xf1ef714369c9d5c3!2sToronto%20Eye%20Prosthetics!5e0!3m2!1sen!2sca!4v1603851334559!5m2!1sen!2sca" width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    
                                </div>
                                <div class="tab-content" id="Hamilton">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.99967211895!2d-79.87316588409627!3d43.251428679137135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b9c3161c96d%3A0xb41a26697ce9a39b!2sToronto%20Eye%20Prosthetics!5e0!3m2!1sen!2sca!4v1603851358045!5m2!1sen!2sca" width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    
                                </div>
                                <div class="tab-content" id="StLucia">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6510.259571537957!2d-60.99492268775779!3d14.016620844809559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c4067af3be5f58b%3A0x724920b496749185!2sSt.%20Lucia%20Blind%20Welfare%20Association%20%2F%20Eye%20Care%20St.%20Lucia!5e0!3m2!1sen!2sca!4v1603851299341!5m2!1sen!2sca" width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    
                                </div>
                            </div>
                            <div class="loc-tabs" id="loc-tabs">
                                <a href="#" class="tablink current" onclick="openLocation(event, 'Toronto')">Toronto</a>
                                <a href="#" class="tablink" onclick="openLocation(event, 'Hamilton')">Hamilton</a>
                                <a href="#" class="tablink" onclick="openLocation(event, 'StLucia')">St Lucia</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        
    )
}