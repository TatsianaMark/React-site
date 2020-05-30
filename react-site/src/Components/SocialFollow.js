import React from 'react';

import {FaInstagram} from "react-icons/fa";
import {FaVk} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";




export default function SocialFollow(){
    return (
        <div className="social_container ">
            <a href="https://www.instagram.com/bad_ledi/"
               className="instagram_social">
                <FaInstagram size="2rem" color='#dfe3ee'/>
            </a>
            <a href="https://vk.com/katerina_dorogush"
               className="vk_social mx-2">
                <FaVk size="2rem" color='#8b9dc3'/>
            </a>
            <a href="https://m.facebook.com/katerina.pirss"
               className="facebook_social">
                <FaFacebook size="2rem" color='#3b5998'/>
            </a>
        </div>
    )
}
