import React from "react";
import Modal from 'react-modal';


const Repo = (props) => {
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

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="repo">
            <h3 onClick={openModal} style={{ cursor: 'pointer' }}>{props.title}</h3>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <p>Forks: {props.forks}</p>
                <p>Stargazers: {props.stars}</p>
                <p>Open Issues: {props.issues}</p>
                <p>View the full repo on <a href={props.link}>GitHub</a>.</p>
                <button onClick={closeModal}>close</button>
            </Modal>
            <p className="repoDesc">{props.desc}</p>
        </div>
    );
}

export default Repo;
