import React from "react";

import "../styles/_nav.scss";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Chillhop Player</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>Library</button>
    </nav>
  );
};

export default Nav;
