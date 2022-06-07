import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  getIsOpenClientSelector,
  getAllClientsSelector,
  setClientSelector,
  setOpenClientSelector,
} from "../../store/clientSlice";
import {
  defaultTdStyle,
  defaultTdActionStyle,
  defaultTdWrapperStyle,
  defaultTdContent,
  defaultTdContentTitleStyle,
  defaultSearchStyle,
} from "../../constants/defaultStyles";
import ReactPaginate from "react-paginate";
import Button from "../Button/Button";

// Example items, to simulate fetching from another resources.
const itemsPerPage = 6;
const emptySearchForm = {
  name: "",
  email: "",
  mobileNo: "",
};

function ClientChooseModal() {
  const dispatch = useDispatch();
  const allClients = useSelector(getAllClientsSelector);
  const openModal = useSelector(getIsOpenClientSelector);

  const [animate, setAnimate] = useState(true);
  const [searchForm, setSearchForm] = useState(emptySearchForm);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const clients = useMemo(() => {
    let filterData = allClients.length > 0 ? [...allClients].reverse() : [];
    if (searchForm.name?.trim()) {
      filterData = filterData.filter((client) =>
        client.name.includes(searchForm.name)
      );
    }

    if (searchForm.email?.trim()) {
      filterData = filterData.filter((client) =>
        client.email.includes(searchForm.email)
      );
    }

    if (searchForm.mobileNo?.trim()) {
      filterData = filterData.filter((client) =>
        client.mobileNo.includes(searchForm.mobileNo)
      );
    }

    return filterData;
  }, [allClients, searchForm]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % clients.length;
    setItemOffset(newOffset);
  };

  const handlerSearchValue = useCallback((event, keyName) => {
    const value = event.target.value;

    setSearchForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    setItemOffset(0);
  }, []);

  const onCancelHandler = useCallback(() => {
    dispatch(setOpenClientSelector(false));
  }, [dispatch]);

  const handleSelect = useCallback(
    (item) => {
      dispatch(setClientSelector(item.id));

      setTimeout(() => {
        dispatch(setOpenClientSelector(false));
      }, 50);
    },
    [dispatch]
  );

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(clients.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(clients.length / itemsPerPage));
  }, [clients, itemOffset]);

  useEffect(() => {
    if (openModal) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [clients, openModal]);

  return openModal ? (
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
                <div className="rounded-xl px-3 py-3 mb-3">
                  <div className="font-title mb-2">Advanced Search</div>
                  <div className="flex w-full flex-col sm:flex-row">
                    <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 sm:px-2">
                      <div className="h-12 w-12 rounded-2xl bg-gray-100 mr-2 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        autoComplete="nope"
                        value={searchForm.name}
                        placeholder="User Name"
                        className={defaultSearchStyle}
                        onChange={(e) => handlerSearchValue(e, "name")}
                      />
                    </div>
                    <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 sm:px-2">
                      <div className="h-12 w-12 rounded-2xl bg-gray-100 mr-2 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        autoComplete="nope"
                        value={searchForm.email}
                        placeholder="User Email"
                        className={defaultSearchStyle}
                        onChange={(e) => handlerSearchValue(e, "email")}
                      />
                    </div>
                    <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 sm:px-2">
                      <div className="h-12 w-12 rounded-2xl bg-gray-100 mr-2 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        autoComplete="nope"
                        value={searchForm.mobileNo}
                        placeholder="Mobile Number"
                        className={defaultSearchStyle}
                        onChange={(e) => handlerSearchValue(e, "mobileNo")}
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:bg-white rounded-xl sm:px-3 sm:py-3">
                  <div className="hidden sm:flex invisible sm:visible w-full flex-col sm:flex-row  bg-gray-50 py-2 px-2 rounded-xl mb-1">
                    <div className="sm:text-left text-default-color font-title flex-1">
                      Name
                    </div>
                    <div className="sm:text-left text-default-color font-title flex-1">
                      Mobile
                    </div>
                    <div className="sm:text-left text-default-color font-title flex-1">
                      Email
                    </div>
                    <div className="sm:text-left text-default-color font-title sm:w-11">
                      Action
                    </div>
                  </div>

                  <div>
                    {currentItems &&
                      currentItems.map((client) => (
                        <div className={defaultTdWrapperStyle} key={client.id}>
                          <div className={defaultTdStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Name
                            </div>
                            <div className={defaultTdContent}>
                              {client.image ? (
                                <img
                                  className="object-cover h-10 w-10 rounded-2xl"
                                  src={client.image}
                                  alt={client.name}
                                />
                              ) : (
                                <span className="h-10 w-10 rounded-2xl bg-gray-100 flex justify-center items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}

                              <span className="whitespace-nowrap text-ellipsis overflow-hidden pl-1">
                                {client.name}
                              </span>
                            </div>
                          </div>
                          <div className={defaultTdStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Mobile
                            </div>
                            <div className={defaultTdContent}>
                              <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                                {client.mobileNo}
                              </span>
                            </div>
                          </div>
                          <div className={defaultTdStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Email
                            </div>
                            <div className={defaultTdContent}>
                              <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                                {client.email}{" "}
                              </span>
                            </div>
                          </div>
                          <div className={defaultTdActionStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Action
                            </div>
                            <div className={defaultTdContent}>
                              <Button
                                size="sm"
                                block={1}
                                onClick={() => handleSelect(client)}
                              >
                                Select
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}

                    {clients.length > 0 && (
                      <ReactPaginate
                        className="inline-flex items-center -space-x-px mt-2"
                        previousLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        nextLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        pageLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        breakLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        activeLinkClassName="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="<"
                        nextLabel={">"}
                        renderOnZeroPageCount={null}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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

export default ClientChooseModal;
