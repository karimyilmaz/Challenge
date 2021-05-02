
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 20%;
    padding-top: 9%;
    /* padding: 140px 0px 20px 350px; */
    color: #FF3A20;    
    
    //1413px
    @media(max-width: 1413px){
        padding-left: 10%;
        padding-top: 12%;
    }
    //1201px
    @media(max-width: 1201px){
        padding-left: 5%;
    }
    //613px
    @media(max-width: 613px){
        padding-top: 28%;
    }


    label{
        color: #92DCE5;
        margin-bottom: 10px
    }

    input{
        width: 200px;
        height: 30px;
        color: #F6BD60;
        background: #12313F;
        /* border: 2px solid #12313F; */
        box-shadow: 0px 0px 1px 1px rgba(18,49,63,1);
        border: none;
        border-radius: 4px;
        margin-bottom: 25px;

        &:focus{
            outline-style: none;
        }
    }

    textarea{
        width: 300px;
        color: #F6BD60;
        background: #12313F;
        /* border: 2px solid #12313F; */
        box-shadow: 0px 0px 1px 1px rgba(18,49,63,1);
        border: none;
        border-radius: 4px;
        margin-bottom: 35px;

        &:focus{
            outline-style: none;
        }
        //320px IPHONE 5/SE
        @media(max-width:320px){
            max-width: 270px;
        }
        //280px GALAXY FOLD
        @media(max-width:280px){
            max-width: 240px;
        }
    }

    button{
        padding: 8px 2px;
        width: 100px;
        background: #12313F;
        /* box-shadow: 0px 0px 1px 1px rgba(18,49,63,1); */
        /* border: none; */
        background: #0D232D;
        border: 2px solid #F6BD60;
        border-radius: 5px;
        color: #F6BD60;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            transform: translateY(-30%);
            
        }
    }

`
const SuccessParagraph = styled.p`
    color: #F6BD60;
    padding-left: 20%;
    padding-top: 9%;

    //1413px
    @media(max-width: 1413px){
        padding-left: 10%;
        padding-top: 12%;
    }
    //1201px
    @media(max-width: 1201px){
        padding-left: 5%;
    }
    //613px
    @media(max-width: 613px){
        padding-top: 28%;
    }

`


export const Contact = () => {
    const [state, handleSubmit] = useForm("mrgrepeb");
    
    if (state.succeeded) {
        return <SuccessParagraph>Thank you! We'll contact you soon</SuccessParagraph>;
    }


    return (
        <Form  onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email"  autoComplete="off" type="email" placeholder="Email" name="email"/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
            
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Message..." name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button type="submit" disabled={state.submitting}>Submit</button>
        </Form>
    );
}




  
