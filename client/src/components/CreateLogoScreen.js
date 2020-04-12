import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import TextWorkSpace from './TextWorkSpace.js';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $borderColor: String!,
        $backgroundColor: String!,
        $fontSize: Int!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!) {
        addLogo(
            text: $text,
            color: $color,
            borderColor: $borderColor,
            backgroundColor: $backgroundColor
            fontSize: $fontSize,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            padding: $padding,
            margin: $margin) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
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
        if(!this.changeflag) {
            this.state = {
                text: "Text",
                color: "#000000",
                borderColor: "#000000",
                backgroundColor: "#000000",
                fontSize: 10,
                borderRadius: 1,
                borderWidth: 1,
                padding: 1,
                margin: 1
            };
        }
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="container row">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home</Link></h4>
                                <h3 className="panel-title">
                                    Create Logo
                            </h3>
                            </div>
                            <div className="panel-body col col-lg">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    addLogo({ variables: { text: text.value, color: color.value, borderColor: borderColor.value, backgroundColor: backgroundColor.value, 
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
                                        }} defaultValue="Text" onChange={this.handleTextChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="color">Color:</label>
                                        <input type="color" className="form-control" name="color" ref={node => {
                                            color = node;
                                        }} defaultValue="#000000" onChange={this.handleColorChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borderColor">Border Color:</label>
                                        <input type="color" className="form-control" name="borderColor" ref={node => {
                                            borderColor = node;
                                        }} defaultValue="#000000" onChange={this.handleBorderColorChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="backgroundColor">Background Color:</label>
                                        <input type="color" className="form-control" name="backgroundColor" ref={node => {
                                            backgroundColor = node;
                                        }} defaultValue="#000000" onChange={this.handleBackgroundColorChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fontSize">Font Size:</label>
                                        <input type="range" className="form-control-range" name="fontSize" ref={node => {
                                            fontSize = node;
                                        }} defaultValue={10} onChange={this.handleFontSizeChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borderRadius">Border Radius:</label>
                                        <input type="range" className="form-control-range" name="borderRadius" ref={node => {
                                            borderRadius = node;
                                        }} defaultValue={1} onChange={this.handleBorderRadiusChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borderWidth">Border Width:</label>
                                        <input type="range" className="form-control-range" name="borderWidth" ref={node => {
                                            borderWidth = node;
                                        }} defaultValue={1} onChange={this.handleBorderWidthChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="padding">Padding:</label>
                                        <input type="range" className="form-control-range" name="padding" ref={node => {
                                            padding = node;
                                        }} defaultValue={1} onChange={this.handlePaddingChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="margin">Margin:</label>
                                        <input type="range" className="form-control-range" name="margin" ref={node => {
                                            margin = node;
                                        }} defaultValue={1} onChange={this.handleMarginChange}/>
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
    }
}

export default CreateLogoScreen;