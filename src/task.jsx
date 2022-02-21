import React, {Component} from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
    box-shadow: 1px 1px 5px lightgrey;
`;

export default class Task extends Component {
    render() {
        return (

            // Similarly, Draggable components expects a function as children
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}