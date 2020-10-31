import React from 'react'

export default function Footer() {
    return (
        <section id="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-left">
                        <div class="footer-title">
                            <img src="/img/logo_e.png" alt=""/>
                            <h1>Toronto Eye Prosthetics</h1>
                        </div>
                        <div>
                            <p>torontoeye@icloud.com</p>
                            <p>Copyright &copy; 2020 Toronto Eye Prosthetics Ltd. </p>
                        </div>
                    </div>
                    <div class="locations">
                        <div>
                            <h1>Toronto</h1>
                            <p>
                                3101 Bloor St. West, Suite 307<br/>
                                Toronto, ON M8X 2W2<br/>
                                416-232-1089 
                            </p>
                        </div>
                        <div>
                            <h1>Hamilton</h1>
                            {/* <!-- <div class="bottom-line"></div> --> */}
                            <p>
                                1 Young Street, Suite 601<br/>
                                Hamilton, ON L8N 1T8<br/>
                                905-528-7266 
                            </p>
                        </div>
                        <div>
                            <h1>St Lucia</h1>
                            {/* <!-- <div class="bottom-line"></div> --> */}
                            <p>
                                788 McVane Drive <br/>
                                Sans Soucis Castries <br/>
                                Saint Lucia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}