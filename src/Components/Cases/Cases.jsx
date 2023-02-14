import React from "react"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import "./Cases.css"

function Cases(){
    return(
        <div>
            <div className="head">
                <h2>CASE STUDIES</h2>
                <p>Being featured consistently amongst the leading Web3 Agencies, Phoenix Strategy has had the pleasure of working with 100+ clients and raised over 17 million Euro. Through establishing partnerships with our clients that are data driven and focused on the growth of their Web3 projects, we are able to achieve sustainable long term growth. <br /> 
Read through some of the case studies and dive into some of the results we’ve achieved while helping our clients with Web3 social media management, the use of Web3 influencers, and trying to navigate the Web3 PR field.</p>
<Link to="/Proposal">
<button>GET A PROPOSAL</button>
</Link>
            </div>
            <Footer/>
        </div>
    )
}
export default Cases