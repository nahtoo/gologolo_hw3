import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextWorkSpace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.color,
                fontSize: this.props.fontSize + "pt",
                borderStyle: "solid",
                borderWidth: this.props.borderWidth + "pt",
                borderRadius: this.props.borderRadius + "pt",
                borderColor: this.props.borderColor,
                padding: this.props.padding + "pt",
                margin: this.props.margin + "pt",
                backgroundColor: this.props.backgroundColor,
                maxWidth: "max-content",
                minWidth: "min-content",
                whiteSpace: "pre",
                text: this.props.text
            }
        }
        return (
            <div>
                <div
                    style={ styles.container}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default TextWorkSpace