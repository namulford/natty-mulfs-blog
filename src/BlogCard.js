import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class BlogCard extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.avatar} />
                <Card.Content>
                    <Card.Header>{this.props.firstName}</Card.Header>
                    <Card.Meta>Joined in {this.props.joined}</Card.Meta>
                    <Card.Description>
                        {this.props.firstName} is a {this.props.jobTitle} living in {this.props.city} {this.props.state}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    {this.props.friends} friends
                </Card.Content>
            </Card>
        )
    }
}

export default BlogCard