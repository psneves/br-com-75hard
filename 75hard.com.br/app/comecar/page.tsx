import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <form action="/api/lead" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" required />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastname">Sobrenome:</label>
                  <input type="text" name="lastname" className="form-control" id="lastname" placeholder="Seu sobrenome" required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Seu endereço de e-mail" required />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="phone">Telefone:</label>
                  <input type="text" className="form-control" name="phone" id="phone" pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4,3}" placeholder="(00) 0000-0000" required />

              </div>
            </div>
              <div className="my-3">
                <div className="loading">Carregando</div>
                <div className="error-message"></div>
                <div className="sent-message">Recebemos seu cadastro, você receberá um e-mail em breve com instruções.</div>
              </div>
              <div className="text-center"><button type="submit">Começar agora!</button></div>
        </form>
    </main>
  );
}
