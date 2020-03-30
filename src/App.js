import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src="https://static.paladinssidekick.com/logo.png" />
        </p>
        <a
          className="App-link"
          href="https://discordapp.com/oauth2/authorize?client_id=691669920093700116&permissions=536345936&scope=bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invite Paladins Sidekick to your Discord server.
        </a>
        <br/>
        <small>Full website and documentation coming soon.</small>
      </header>
    </div>
  );
}

export default App;
