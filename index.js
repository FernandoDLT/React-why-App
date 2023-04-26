// import React from "react"
// import ReactDOM from "react-dom"
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

// import MainContent from "./MainContent"


function Header() {
   return (
      <header>
         <nav className="nav">
            <img  src="react-logo.png" className="react-logo"></img>
            <ul className="nav-items">
               <li>Pricing</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </nav>
      </header>
   )
}

function Footer() {
   return (
      <footer className="foot">
         <small>© 2021 DLT development. All rights reserved.</small>
      </footer>
   )
}

function MainContent() {
      return (
            <div>
         <h1>Why I'm excited to learn React</h1>
         <ol>
            <li>It's a popular language so I'll be able to fit in with the cool kid</li>
            <li>I'm more likely to get a job as a developer if I know React</li>
            <li>In high demand</li>
            <li>People love React and what it can do</li>
            <li>I like it</li>
         </ol>
      </div>
   )
}

   function App() {
      return (
         <div>
            <Header />
            <MainContent />
            <Footer />
         </div>
      )
   }
   ReactDOM.render(<App />, document.getElementById("root"))