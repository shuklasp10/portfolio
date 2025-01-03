import React from "react"

const Nav = () => {

  function handleClick(e: React.MouseEvent<HTMLElement>) {

    const prevActive = document.getElementsByClassName('card nav_items')[0] as HTMLElement
    const nextActive = e.target as HTMLElement

    prevActive.classList.remove('card')
    nextActive.classList.add('card');

    [...document.getElementsByClassName(prevActive.title)].forEach((element) => {
      element.classList.remove('active');
    });
    [...document.getElementsByClassName(nextActive.title)].forEach((element) => {
      console.log(element);
      
      element.classList.add('active');
    });
  }

  return (
    <nav className="card nav">
      <ul id="navbar" className="card_header">
        <li className="card nav_items" onClick={handleClick} title='all'>All</li>
        <li className="nav_items" onClick={handleClick} title="about">About</li>
        <li className="nav_items" onClick={handleClick} title="work">Work</li>
      </ul>
    </nav>
  )
}

export default Nav