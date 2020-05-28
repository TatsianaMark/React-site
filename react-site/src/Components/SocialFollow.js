import React from 'react';

import {FaInstagram} from "react-icons/fa";
import {FaVk} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";




export default function SocialFollow(){
    return (
        <div className="social_container">
            <a href="https://www.instagram.com/bad_ledi/"
               className="instagram_social">
                <FaInstagram/>
            </a>
            <a href="https://vk.com/katerina_dorogush"
               className="vk_social">
                <FaVk/>
            </a>
            <a href="https://m.facebook.com/katerina.pirss"
               className="facebook_social">
                <FaFacebook/>
            </a>
        </div>
    )
}
