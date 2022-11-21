import React from 'react';

const ConfirmModal = ({ title, message, confirm, modalData, closeModal }) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action gap-2">
                        <label htmlFor="confirm-modal" onClick={() => confirm(modalData)} className="btn btn-sm border-none bg-red-500 hover:bg-red-600 text-white">Yes</label>
                        <label className="btn btn-sm btn-outline" onClick={() => closeModal(null)}>Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;