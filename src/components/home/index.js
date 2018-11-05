import React ,{Component}from 'react'
import Header from './../header'
import Footer from './../footer'
import $ from 'jquery'
import './style.css'


class Home extends Component{
    render (){
        $(document).ready(function(){
            $('.header').height($(window).height());
           })
        return(
            <div>
                <Header />
                    <div className="header">
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="description ">
                    <h1>    Hello ,Welcome To My official Website
                        <p>    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>   
                    <button className="btn btn-outline-secondary btn-lg">See more</button>   </h1>  
                    </div>
                    </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Home