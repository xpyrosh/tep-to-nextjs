import LearnSection from '../components/LearnSection'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import * as contentful from 'contentful';
import { Component } from 'react';

export default function Learn() {
    // const client = contentful.createClient({
    //     space: process.env.REACT_APP_SPACE_ID,
    //     accessToken: process.env.REACT_APP_ACCESS_TOKEN
    // });

    // state = {
    //     articles: []
    // };

    // componentDidMount() {
    //     client.getEntries()
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch(console.error)
    // };

    return (
        <div>
            <Nav/>
            <section id="learn">
                <div class="container">
                    <h1>About Section</h1>  
                    <LearnSection/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}