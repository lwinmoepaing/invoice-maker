/* eslint-disable no-useless-escape */
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentBGImage,
  getCurrentColor,
  getInvoiceSettingModal,
  setDefaultBackground,
  setDefaultColor,
  setSettingModalOpen,
} from "../../store/invoiceSlice";
import imageData from "../../shared/imageData.json";
import colorData from "../../shared/colorData.json";

function InvoiceSettingModal(props) {
  const dispatch = useDispatch();
  const openModal = useSelector(getInvoiceSettingModal);
  const currentBg = useSelector(getCurrentBGImage);
  const currentColor = useSelector(getCurrentColor);

  const [animate, setAnimate] = useState(true);

  const onCancelHandler = useCallback(() => {
    dispatch(setSettingModalOpen(false));
    console.log("Click");
  }, [dispatch]);

  const onClickBg = useCallback(
    (item) => {
      dispatch(setDefaultBackground(item));
    },
    [dispatch]
  );

  const onClickColor = useCallback(
    (item) => {
      dispatch(setDefaultColor(item));
    },
    [dispatch]
  );

  useEffect(() => {
    if (openModal !== null) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [openModal]);

  return openModal !== false ? (
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
          <div className="flex justify-center min-h-full p-4 text-center">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 flex flex-col w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex-1">
                <div className="font-title mb-2">Choose Color</div>

                <div className="flex flex-row flex-wrap mb-2">
                  {colorData.map((color) => (
                    <span
                      key={color}
                      onClick={() => onClickColor(color)}
                      className={
                        "inline-block w-8 h-8 mx-2 cursor-pointer " +
                        (currentColor === color
                          ? " border-2 border-blue-500 "
                          : " rounded-2xl scale-75")
                      }
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>

                <div className="font-title mb-2">Choose Background Image</div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mx-auto">
                  {imageData.map((image) => (
                    <div
                      className={
                        "w-full overflow-hidden h-24 cursor-pointer " +
                        (currentBg.id === image.id
                          ? " border-4 border-blue-500 "
                          : " rounded-2xl scale-75")
                      }
                      key={image.id}
                      onClick={() => onClickBg(image)}
                    >
                      <img
                        src={image.base64}
                        alt="imagezz"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onCancelHandler}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ) : null;
}

export default InvoiceSettingModal;
