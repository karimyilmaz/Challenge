import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//STYLED COMPONENTS
const Nav = styled.div`
    box-shadow: 0px 0px 12px -1px rgba(47,55,71,1);
    -moz-box-shadow: 0px 0px 12px -1px rgba(47,55,71,1);
    -webkit-box-shadow: 0px 0px 12px -1px rgba(47,55,71,1);
    
    ul {
        margin: 0;
        /* padding: 40px 0px 20px 350px; */
        padding-left: 20%;
        padding-top: 40px;
        padding-bottom: 20px;
        
        display: flex;
        list-style: none;
        
        li{
            
            margin-right: 30px;

            a{
                text-decoration: none;
                font-size: 16px;
                color: #92DCE5;

                &:focus{
                    color: #F6BD60;
                }
            }
        }

        //1413px
        @media(max-width: 1413px){
            padding-left: 10%;
        }
        //1201px
        @media(max-width: 1201px){
            padding-left: 5%;
        }
    }

`


export const Navbar = () => {
    return (
        <Nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/#/contact'>Contact us</Link></li>
            </ul>
        </Nav>
    )
}


