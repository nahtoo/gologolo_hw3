import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container">
                            <div className="container row">
                                <div className="col s4">
                                    <h3><span className="badge badge-secondary">Recent Work</span></h3>
                                    {data.logos.sort((a,b) => b.lastUpdate.localeCompare(a.lastUpdate)).map((logo, index) => (
                                        <div key={index} className='home_logo_link'
                                            style={{ cursor: "pointer", whiteSpace: "pre"}} className="font-weight-bold text-primary">
                                            <Link to={`/view/${logo._id}`} >{logo.text}</Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="jumbotron col bg-secondary">
                                    <div className="display-4 text-white font-weight-bold" id="home_banner_container">
                                        goLogoLo
                                    </div>
                                    <div>
                                        <Link id="add_logo_button" to="/create">
                                            <button type="button" className="btn btn-primary btn-lg btn-block">New Logo</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
