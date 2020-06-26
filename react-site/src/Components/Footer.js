import React from "react";
import  {GoMail} from "react-icons/go";

export default function Footer() {
    return(
        <>
            <div className="footer footer_mix bg-dark d-flex flex-row flex-wrap px-5 py-3 justify-content-around">
                <div className="message message_footer d-flex">
                        <GoMail size="2rem" color='#dfe3ee'/>
                        <div className="e_mail_footer text-white ml-2">
                            <a href="edorogus@gmail.com">edorogus@gmail.com</a>
                        </div>
                </div>
                <div className="main-footer text-white">
                    © 2020 | Web Design and Service made in Malta provided by Markouskaya Tatsiana.
                </div>
            </div>
        </>
    )
}