import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import TextWorkSpace from './TextWorkSpace.js';

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            backgroundColor
            borderColor
            fontSize
            borderWidth
            borderRadius
            padding
            margin
            lastUpdate
        }
    }
`;

const DELETE_LOGO = gql`
  mutation removeLogo($id: String!) {
    removeLogo(id:$id) {
      _id
    }
  }
`;

class ViewLogoScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container row">
                            <div className="card col bg-secondary text-white">
                                <div className="card-header">
                                    <h4><Link to="/"><button type="button" className="btn btn-primary btn-lg btn-block">Home</button></Link></h4>
                                    <h3 className="font-weight-bold">View Logo</h3>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <dl>
                                            <dt>Text:</dt>
                                            <dd>{data.logo.text}</dd>
                                            <dt>Color:</dt>
                                            <dd>{data.logo.color}</dd>
                                            <dt>Border Color:</dt>
                                            <dd>{data.logo.borderColor}</dd>
                                            <dt>Background Color:</dt>
                                            <dd>{data.logo.backgroundColor}</dd>
                                            <dt>Font Size:</dt>
                                            <dd>{data.logo.fontSize}</dd>
                                            <dt>Border Radius:</dt>
                                            <dd>{data.logo.borderRadius}</dd>
                                            <dt>Border Width:</dt>
                                            <dd>{data.logo.borderWidth}</dd>
                                            <dt>Padding:</dt>
                                            <dd>{data.logo.padding}</dd>
                                            <dt>Margin:</dt>
                                            <dd>{data.logo.margin}</dd>
                                            <dt>Last Updated:</dt>
                                            <dd>{data.logo.lastUpdate}</dd>
                                        </dl>
                                    </div>
                                    <Mutation mutation={DELETE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push('/')}>
                                        {(removeLogo, { loading, error }) => (
                                            <div>
                                                <form
                                                    onSubmit={e => {
                                                        e.preventDefault();
                                                        removeLogo({ variables: { id: data.logo._id } });
                                                    }}>
                                                    <Link to={`/edit/${data.logo._id}`} className="btn btn-success">Edit</Link>&nbsp;
                                                <button type="submit" className="btn btn-danger">Delete</button>
                                                </form>
                                                {loading && <p>Loading...</p>}
                                                {error && <p>Error :( Please try again</p>}
                                            </div>
                                        )}
                                    </Mutation>
                                </div>
                            </div>
                            <div className="col col-lg"  style={{height: "750px", width: "750px", overflow: "auto"}}>
                                    <TextWorkSpace color={data.logo.color} fontSize={data.logo.fontSize}
                                        borderWidth={data.logo.borderWidth} borderRadius={data.logo.borderRadius}
                                        borderColor={data.logo.borderColor} backgroundColor={data.logo.backgroundColor}
                                        padding={data.logo.padding} margin={data.logo.margin} text={data.logo.text}>
                                    </TextWorkSpace>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default ViewLogoScreen;