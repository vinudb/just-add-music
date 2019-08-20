import React from 'react';
import Modal from 'react-modal';

class CommentModal extends React.Component{
    state = {
        comment:""
    }

    onCommentChange = (e)=>{
        const comment = e.target.value;
        this.setState({comment}); 
    }

    onSubmitClick=()=> this.state.comment.length > 0 && (this.props.handleCommentModal(this.state.comment));

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render(){
        return(
            <Modal
                data-test="commentModalComponent"
                isOpen={this.props.isModalOpen}
                contentLabel="Comment"
                closeTimeoutMS={200}
                className="modal"
                onRequestClose={this.props.handleCommentModal}
                closeTimeoutMS={200}
            >
            <h3 className="title">Add Comment</h3>
            
            <textarea 
                rows="5"  
                className="text-input small-margin-bottom text-input" 
                type="text" 
                placeholder="What do you feel about the song?" 
                value={this.state.comment} 
                onChange={this.onCommentChange} />
            <button className ="button" onClick={this.onSubmitClick}>SUBMIT</button>
            </Modal>                
        );
    }
}

export default CommentModal;