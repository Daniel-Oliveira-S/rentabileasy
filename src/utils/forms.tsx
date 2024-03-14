import React,{ useRef } from "react";
import emailjs from '@emailjs/browser'
export function HeroForm(){
    const form = useRef<HTMLFormElement | null>(null);
    // redirecionar para o site do e
  
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log(e.currentTarget);
  
      emailjs
        .sendForm("service_4fr0abm", "template_uuz4g5d", e.currentTarget, {
          publicKey: "y30qUK2eyTlbxtioG",
        })
        .then(
          () => {
            // redirect to the thank you page
            alert("Email enviado com sucesso!");
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.message);
          }
        );
    }
    return (

        
        <form onSubmit={sendEmail}
        ref={
            form
        }
              >
                <p>
                  <strong>
                    O Rentabileasy te ajuda a descomplicar a burocracia e
                    impulsionar seu negócio.{" "}
                  </strong>
                  <br />
                  <br />
                  Preencha os campos a seguir que entraremos em contato o mais
                  breve possível.
                </p>
             

                <label htmlFor="">
                  Nome*
                  <input type="text" name="nome" required />
                </label>
                <label htmlFor="">
                  Email*
                  <input type="email" name="email" required />
                </label>
                <label htmlFor="">
                  Telefone*
                  <input type="tel" name="telefone" required />
                </label>
                <label htmlFor="">
                  Nome da Empresa*
                  <input type="text" name="empresa" required />
                </label>
                <button type="submit">Quero Lucrar Mais!</button>
              </form>
    )
}
export function Newsletter(){
    const form = useRef<HTMLFormElement | null>(null);
    // redirecionar para o site do e
  
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log(e.currentTarget);
  
      emailjs
        .sendForm("service_4fr0abm", "template_le766bo", e.currentTarget, {
          publicKey: "y30qUK2eyTlbxtioG",
        })
        .then(
          () => {
            // redirect to the thank you page
            alert("Email enviado com sucesso!");
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.message);
          }
        );
    }
    return (

        
        <form
        ref={form}
        onSubmit={sendEmail}
      >
         
        <label htmlFor="">
          Email
          <input type="email" name="email_newsletter" />
        </label>
        <button type="submit">
          <strong>Quero receber</strong>
        </button>
      </form>
    )
}
