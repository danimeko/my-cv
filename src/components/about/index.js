import React ,{Component}from 'react'
import Header from './../header'
import Footer from './../footer'
import pic from './../../DanielPic.jpg'
import './style.css'


class About extends Component{
    render (){
        return(
            
            <div>
                <Header />
                <div className="about">
                <div className="row"> 
                
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img src={pic} className="img-fluid" alt="dani pic"/>
                        <span className="text-justify">S.Web Developer</span>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 desc">
     
                    <h3>Daniel M</h3>
                        <p>
                        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default About