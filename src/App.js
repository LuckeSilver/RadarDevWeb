import React  from 'react';

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="inputBlock">           
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>
          
          <div className="inputBlock">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="inputGroup">
          <div className="inputBlock">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required/>
          </div>
          <div className="inputBlock">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required/>
          </div>
          </div>
        <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul><li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37150645?s=460&v=4" alt="perfil-dev"/>
              <div className="userInfo">
                <strong>Lucas Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Sempre fui apaixonado por aprender coisas novas e obter conhecimento e ao ter contato com programação tive meus olhos abertos para novos horizontes.</p>
            <a href="https://github.com/LuckeSilver">Acessar perfil no GitHub</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37150645?s=460&v=4" alt="perfil-dev"/>
              <div className="userInfo">
                <strong>Lucas Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Sempre fui apaixonado por aprender coisas novas e obter conhecimento e ao ter contato com programação tive meus olhos abertos para novos horizontes.</p>
            <a href="https://github.com/LuckeSilver">Acessar perfil no GitHub</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37150645?s=460&v=4" alt="perfil-dev"/>
              <div className="userInfo">
                <strong>Lucas Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Sempre fui apaixonado por aprender coisas novas e obter conhecimento e ao ter contato com programação tive meus olhos abertos para novos horizontes.</p>
            <a href="https://github.com/LuckeSilver">Acessar perfil no GitHub</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37150645?s=460&v=4" alt="perfil-dev"/>
              <div className="userInfo">
                <strong>Lucas Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Sempre fui apaixonado por aprender coisas novas e obter conhecimento e ao ter contato com programação tive meus olhos abertos para novos horizontes.</p>
            <a href="https://github.com/LuckeSilver">Acessar perfil no GitHub</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37150645?s=460&v=4" alt="perfil-dev"/>
              <div className="userInfo">
                <strong>Lucas Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Sempre fui apaixonado por aprender coisas novas e obter conhecimento e ao ter contato com programação tive meus olhos abertos para novos horizontes.</p>
            <a href="https://github.com/LuckeSilver">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
