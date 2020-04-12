import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
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

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderWidth: Int!,
        $borderRadius: Int!,
        $padding: Int!,
        $margin: Int!) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize,
                backgroundColor: $backgroundColor,
                borderColor: $borderColor,
                borderWidth: $borderWidth,
                borderRadius: $borderRadius,
                padding: $padding,
                margin: $margin) {
                    lastUpdate
                }
        }
`;

// text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin

//add padding margin

class EditLogoScreen extends Component {
    changeflag=false;

    handleTextChange = (event) => {
        this.setState({text: event.target.value, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handleFontSizeChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: event.target.value, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handleColorChange = (event) => {
        this.setState({text: this.state.text, color: event.target.value, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handleBackgroundColorChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: event.target.value, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handleBorderColorChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: event.target.value, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handleBorderRadiusChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: event.target.value, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handleBorderWidthChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: event.target.value, padding: this.state.padding, margin: this.state.margin});
        this.changeflag = true;
    }

    handlePaddingChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: event.target.value, margin: this.state.margin});
        this.changeflag = true;
    }

    handleMarginChange = (event) => {
        this.setState({text: this.state.text, color: this.state.color, backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, fontSize: this.state.fontSize, borderRadius: this.state.borderRadius, borderWidth: this.state.borderWidth, padding: this.state.padding, margin: event.target.value});
        this.changeflag = true;
    }

    render() {
        let text, color, fontSize, borderColor, backgroundColor, borderRadius, borderWidth, padding, margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    if (!this.changeflag) {
                        this.state = {
                            text: data.logo.text,
                            color: data.logo.color,
                            borderColor: data.logo.borderColor,
                            backgroundColor: data.logo.backgroundColor,
                            fontSize: data.logo.fontSize,
                            borderRadius: data.logo.borderRadius,
                            borderWidth: data.logo.borderWidth,
                            padding: data.logo.padding,
                            margin: data.logo.margin
                        };
                    }
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container row">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">Home</Link></h4>
                                            <h3 className="panel-title">
                                                Edit Logo
                                        </h3>
                                        </div>
                                        <div className="panel-body col-lg">                                            
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id,text: text.value, color: color.value, borderColor: borderColor.value, backgroundColor: backgroundColor.value, 
                                                    fontSize: parseInt(fontSize.value), borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value),
                                                    padding: parseInt(padding.value), margin: parseInt(margin.value) } });
                                                    text.value = "";
                                                    color.value = "";
                                                    borderColor.value = "";
                                                    backgroundColor.value = "";
                                                    fontSize.value = "";
                                                    borderRadius.value = "";
                                                    borderWidth.value = "";
                                                    padding.value = "";
                                                    margin.value = "";
                                            }}>
                                                <div className="form-group">
                                                    <label htmlFor="text">Text:</label>
                                                    <input type="text" className="form-control" name="text" ref={node => {
                                                        text = node;
                                                    }} defaultValue={data.logo.text} onChange={this.handleTextChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="color">Color:</label>
                                                    <input type="color" className="form-control" name="color" ref={node => {
                                                        color = node;
                                                    }} defaultValue={data.logo.color} onChange={this.handleColorChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input type="color" className="form-control" name="borderColor" ref={node => {
                                                        borderColor = node;
                                                    }} defaultValue={data.logo.borderColor} onChange={this.handleBorderColorChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="backgroundColor">Background Color:</label>
                                                    <input type="color" className="form-control" name="backgroundColor" ref={node => {
                                                        backgroundColor = node;
                                                    }} defaultValue={data.logo.backgroundColor} onChange={this.handleBackgroundColorChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fontSize">Font Size:</label>
                                                    <input type="range" className="form-control-range" name="fontSize" ref={node => {
                                                        fontSize = node;
                                                    }} defaultValue={data.logo.fontSize} onChange={this.handleFontSizeChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input type="range" className="form-control-range" name="borderRadius" ref={node => {
                                                        borderRadius = node;
                                                    }} defaultValue={data.logo.borderRadius} onChange={this.handleBorderRadiusChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input type="range" className="form-control-range" name="borderWidth" ref={node => {
                                                        borderWidth = node;
                                                    }} defaultValue={data.logo.borderWidth} onChange={this.handleBorderWidthChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="padding">Padding:</label>
                                                    <input type="range" className="form-control-range" name="padding" ref={node => {
                                                        padding = node;
                                                    }} defaultValue={data.logo.padding} onChange={this.handlePaddingChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="margin">Margin:</label>
                                                    <input type="range" className="form-control-range" name="margin" ref={node => {
                                                        margin = node;
                                                    }} defaultValue={data.logo.margin} onChange={this.handleMarginChange}/>
                                                </div>
                                             <button type="submit" className="btn btn-success">Submit</button>
                                            </form>
                                            {loading && <p>Loading...</p>}
                                            {error && <p>Error :( Please try again</p>}
                                        </div>
                                    </div>
                                    <div className="col col-lg"  style={{height: "500px", width: "750px", overflow: "auto"}}>
                                        <TextWorkSpace color={this.state.color} fontSize={this.state.fontSize}
                                                borderWidth={this.state.borderWidth} borderRadius={this.state.borderRadius}
                                                borderColor={this.state.borderColor} backgroundColor={this.state.backgroundColor}
                                                padding={this.state.padding} margin={this.state.margin} text={this.state.text}>
                                        </TextWorkSpace>
                                    </div>
                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;