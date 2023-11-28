import { Component } from 'react';
import { NameContact, DeleteBtn, WrapperContact } from './Contacts.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class Contacts extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      el: { name, id, number },
      Delete,
    } = this.props;
    return (
      <WrapperContact>
        <NameContact onClick={this.openModal}>
          {name}: <span>{number}</span>
        </NameContact>
        <DeleteBtn onClick={() => Delete(id)} type="button">
          Delete
        </DeleteBtn>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </WrapperContact>
    );
  }
}
