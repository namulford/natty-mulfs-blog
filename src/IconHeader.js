import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

class IconHeader extends Component{
    render() {
        return (
            <Header as="h1" icon textAlign='center'>
                <Icon color='purple' name='address card outline' />
                Friend Face
                <Header.Subheader>You know, for friends.</Header.Subheader>
            </Header>
        )
    }
}

export default IconHeader