import React from "react";
import SocialFollow from "./SocialFollow";

const Footer = () => {
    return(
        <>
            <div className="footer footer_mix bg-dark d-flex flex-row flex-wrap">
                <div className="main-footer px-5 py-3 text-white">
                    Авторские права ©2020
                </div>
                <SocialFollow/>
            </div>
        </>
    )
};


export default  Footer;