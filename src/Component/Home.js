import React, { useState, useEffect } from 'react'   
import { Link } from 'react-router-dom'
import Header from './Layout/Header'
import Login from './Login'
import Registration from './Registration'
import Card from './Card';
import axios from 'axios';
import './LoginStyle.css'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux/user/userActions'
import FooterTeam from './Pages/Footer/FooterTeam'
import Footer from './Pages/Footer/Footer'
    function Home ({ userData, fetchUsers }) {
        useEffect(() => {
          fetchUsers() 
        }, [])
        return (
            <div style={{
                // backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`
             }}> 
                <Header /> 
               
                { userData.loading ?
                    ( <h2>Loading</h2> ) : 
                    userData.error ? 
                       ( <h2>{userData.error}</h2> ) : (
                    <div>
                        <div className="flex-style2">
                        { userData && userData.users && userData.users.map(data => {  
                            return  <div className="flex-style2" key={ data.id }> {
                                <Card names={ data.name } id={data.id} mail={data.email} add={ data.address.street } city={ data.address.city } zipcode={ data.address.zipcode } phn={ data.phone } website={ data.website } />} </div>;
                            // <div className="flex-style2" key={ data.id }> {<Card id={data.id} mail={data.email} add={ data.address.street } city={ data.address.city } zipcode={ data.address.zipcode } phn={ data.phone } website={ data.website } />}
                            })
                        }
                        </div>
                    </div>
                    ) 
                }
                <FooterTeam />
                <Footer />
            </div>
        )
      }

    const mapStateToProps = state => {
        return {
            userData: state.user
        }
    }
  
    const mapDispatchToProps = dispatch => {
        return {
        fetchUsers: () => dispatch(fetchUsers())
        }
    }
  
export default connect( mapStateToProps, mapDispatchToProps )(Home)