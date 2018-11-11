import React, { Component } from 'react'
import { Modal } from 'antd'

export default class EventsModal extends Component {
  render() {
    const { toggleModal, visible, selectedDate } = this.props;

    return (
      <Modal
        centered
        visible={visible}
        onOk={() => toggleModal(false)}
        onCancel={() => toggleModal(false)}
      >
        {selectedDate}
      </Modal>
    )
  }
}
