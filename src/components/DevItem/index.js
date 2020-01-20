import React from "react";

import "./styles.css";

export default function DevItem({ dev }) {
  return (
    <li className="devItem">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="userInfo">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>

      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no GitHub
      </a>
    </li>
  );
}
