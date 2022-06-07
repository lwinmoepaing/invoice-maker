import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  defaultTdStyle,
  defaultTdActionStyle,
  defaultTdWrapperStyle,
  defaultTdContent,
  defaultTdContentTitleStyle,
  defaultSearchStyle,
} from "../../constants/defaultStyles";
import ReactPaginate from "react-paginate";
import { getAllInvoiceSelector, setDeleteId } from "../../store/invoiceSlice";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import InvoiceIcon from "../Icons/InvoiceIcon";
import { useAppContext } from "../../context/AppContext";
import EmptyBar from "../Common/EmptyBar";

// Example items, to simulate fetching from another resources.
const itemsPerPage = 10;
const emptySearchForm = {
  invoiceNo: "",
  clientName: "",
};

function InvoiceTable({ showAdvanceSearch = false }) {
  const { initLoading } = useAppContext();
  const dispatch = useDispatch();
  const allInvoices = useSelector(getAllInvoiceSelector);
  const navigate = useNavigate();

  const [searchForm, setSearchForm] = useState(emptySearchForm);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const invoices = useMemo(() => {
    let filterData = allInvoices.length > 0 ? [...allInvoices].reverse() : [];
    if (searchForm.invoiceNo?.trim()) {
      filterData = filterData.filter((invoice) =>
        invoice.invoiceNo.includes(searchForm.invoiceNo)
      );
    }

    if (searchForm.clientName?.trim()) {
      filterData = filterData.filter((invoice) =>
        invoice.clientName.includes(searchForm.clientName)
      );
    }

    return filterData;
  }, [allInvoices, searchForm]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % invoices.length;
    setItemOffset(newOffset);
  };

  const handleDelete = useCallback(
    (item) => {
      dispatch(setDeleteId(item.id));
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (item) => {
      navigate("/invoices/" + item.id);
    },
    [navigate]
  );

  const handlerSearchValue = useCallback((event, keyName) => {
    const value = event.target.value;

    setSearchForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    setItemOffset(0);
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(invoices.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(invoices.length / itemsPerPage));
  }, [invoices, itemOffset]);

  return (
    <>
      {showAdvanceSearch === true && (
        <div className="bg-white rounded-xl px-3 py-3 mb-3">
          <div className="font-title mb-2">Advanced Search</div>
          <div className="flex w-full flex-col sm:flex-row">
            <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 px-2">
              <div className="h-12 w-12 rounded-2xl bg-gray-100 mr-2 flex justify-center items-center">
                <InvoiceIcon className="h-6 w-6 text-gray-400" />
              </div>
              <input
                autoComplete="nope"
                value={searchForm.invoiceNo}
                placeholder="Invoice No"
                className={defaultSearchStyle}
                onChange={(e) => handlerSearchValue(e, "invoiceNo")}
              />
            </div>
            <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 px-2">
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
                value={searchForm.clientName}
                placeholder="User Name"
                className={defaultSearchStyle}
                onChange={(e) => handlerSearchValue(e, "clientName")}
              />
            </div>
          </div>
        </div>
      )}

      <div className="sm:bg-white rounded-xl sm:px-3 sm:py-3">
        <div className="hidden sm:flex invisible sm:visible w-full flex-col sm:flex-row">
          <div className="sm:text-left text-default-color font-title flex-1">
            Invoice Name
          </div>
          <div className="sm:text-left text-default-color font-title flex-1">
            Client Name
          </div>
          <div className="sm:text-left text-default-color font-title flex-1">
            Status
          </div>
          <div className="sm:text-left text-default-color font-title flex-1">
            Amount
          </div>
          <div className="sm:text-left text-default-color font-title sm:w-11">
            Action
          </div>
        </div>

        <div>
          {currentItems &&
            currentItems.map((invoice) => (
              <div className={defaultTdWrapperStyle} key={invoice.id}>
                <div className={defaultTdStyle}>
                  <div className={defaultTdContentTitleStyle}>Invoice Name</div>
                  <div className={defaultTdContent}>
                    <span
                      className="whitespace-nowrap text-ellipsis overflow-hidden text-blue-500 cursor-pointer"
                      onClick={() => handleEdit(invoice)}
                    >
                      {invoice.invoiceNo}
                    </span>
                  </div>
                </div>

                <div className={defaultTdStyle}>
                  <div className={defaultTdContentTitleStyle}>Client Name</div>
                  <div className={defaultTdContent}>
                    <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                      {invoice.clientName}
                    </span>
                  </div>
                </div>

                <div className={defaultTdStyle}>
                  <div className={defaultTdContentTitleStyle}>Status</div>
                  <div className={defaultTdContent}>
                    <span
                      className={
                        "whitespace-nowrap text-ellipsis overflow-hidden px-3 rounded-xl  py-1 " +
                        (invoice.statusIndex === "2"
                          ? "bg-red-100 text-red-400"
                          : invoice.statusIndex === "3"
                          ? "bg-green-200 text-green-600"
                          : "bg-gray-100 text-gray-600 ")
                      }
                    >
                      {invoice.statusName}
                    </span>
                  </div>
                </div>

                <div className={defaultTdStyle}>
                  <div className={defaultTdContentTitleStyle}>Status</div>
                  <div className={defaultTdContent + " "}>
                    <span className="whitespace-nowrap text-ellipsis overflow-hidden ">
                      <NumberFormat
                        value={invoice.totalAmount}
                        className=""
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value, props) => (
                          <span {...props}>{value}</span>
                        )}
                      />
                    </span>
                  </div>
                </div>

                <div className={defaultTdActionStyle}>
                  <div className={defaultTdContentTitleStyle}>Action</div>
                  <div className={defaultTdContent}>
                    <Menu
                      menuButton={
                        <MenuButton>
                          <div className="bg-gray-50 px-2 rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                              />
                            </svg>
                          </div>
                        </MenuButton>
                      }
                      transition
                    >
                      <MenuItem onClick={() => handleEdit(invoice)}>
                        Detail
                      </MenuItem>
                      <MenuItem onClick={() => handleDelete(invoice)}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            ))}

          {invoices.length <= 0 && !initLoading && (
            <EmptyBar title={"Invoice"} />
          )}

          {invoices.length > 0 && (
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
    </>
  );
}

export default InvoiceTable;
