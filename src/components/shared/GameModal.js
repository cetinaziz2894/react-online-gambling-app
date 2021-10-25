import React from 'react';
import {Modal } from 'semantic-ui-react';
import { closeModal } from "../../actions/modal";
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/modal.css';

export default function GameModal() {
  const dispatch = useDispatch();
  
  const { open, code } = useSelector(state => state.modal);

    const playGameHandler = () => {
      window.comeon.game.launch(code);
    }
    return (
        <Modal
        closeIcon
        dimmer={'blurring'}
        open={open}
        onClose={() => dispatch(closeModal(false))}
        onMount={() => playGameHandler()}
        closeOnDimmerClick={false}
      >
        <Modal.Header>{code?.toUpperCase()} PLAY</Modal.Header>
        <Modal.Content>
            <div id="game-launch"></div>
        </Modal.Content>
      </Modal>
    )
}
