import React, { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import {
  getIsInvoiceConfirmModal,
  setConfirmModalOpen,
  setIsConfirm,
} from "../../store/invoiceSlice";
import CheckCircleIcon from "../Icons/CheckCircleIcon";

function InvoiceConfirmModal(props) {
  const dispatch = useDispatch();
  const isOpenConfirmModal = useSelector(getIsInvoiceConfirmModal);
  const [animate, setAnimate] = useState(true);

  const onConfirmModal = useCallback(() => {
    dispatch(setIsConfirm(true));
    dispatch(setConfirmModalOpen(false));
    toast.success("Successfully Action", {
      position: "bottom-center",
      autoClose: 2000,
    });
  }, [dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(setConfirmModalOpen(false));
    dispatch(setIsConfirm(false));
  }, [dispatch]);

  useEffect(() => {
    if (isOpenConfirmModal !== false) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpenConfirmModal]);

  return isOpenConfirmModal !== false ? (
    <motion.div
      className="modal-container"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: animate ? 1 : 0,
      }}
      transition={{
        type: "spring",
        damping: 18,
      }}
    >
      <div className="relative">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Invoice Confirmation
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Only "Draft save" can be modified. If "Unpaid" or "Paid"
                        invoice can't be modified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onConfirmModal}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onCancelHandler}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ) : null;
}

export default InvoiceConfirmModal;
