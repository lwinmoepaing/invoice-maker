import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
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
import {
  getAllProductSelector,
  getIsOpenProductSelector,
  setOpenProductSelector,
  setProductSelector,
} from "../../store/productSlice";
import ProductIDIcon from "../Icons/ProductIDIcon";
import ProductIcon from "../Icons/ProductIcon";

// Example items, to simulate fetching from another resources.
const itemsPerPage = 6;
const emptySearchForm = {
  name: "",
  email: "",
  mobileNo: "",
};

function ProductChoosenModal() {
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllProductSelector);
  const openModal = useSelector(getIsOpenProductSelector);

  const [animate, setAnimate] = useState(true);
  const [searchForm, setSearchForm] = useState(emptySearchForm);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const products = useMemo(() => {
    let filterData = allProducts.length > 0 ? [...allProducts].reverse() : [];
    if (searchForm.name?.trim()) {
      filterData = filterData.filter((product) =>
        product.name.includes(searchForm.name)
      );
    }

    if (searchForm.productID?.trim()) {
      filterData = filterData.filter((product) =>
        product.productID.includes(searchForm.productID)
      );
    }

    return filterData;
  }, [allProducts, searchForm]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const handleSelect = useCallback(
    (item) => {
      dispatch(setProductSelector(item.id));

      setTimeout(() => {
        dispatch(setOpenProductSelector(false));
      }, 50);
    },
    [dispatch]
  );

  const onCancelHandler = useCallback(() => {
    dispatch(setOpenProductSelector(false));
  }, [dispatch]);

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
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [products, itemOffset]);

  useEffect(() => {
    if (openModal) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [products, openModal]);

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
                    <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row  font-title flex-1 px-2">
                      <div className="h-12 w-12 rounded-2xl bg-gray-100 mr-2 flex justify-center items-center text-gray-400">
                        <ProductIDIcon />
                      </div>
                      <input
                        autoComplete="nope"
                        value={searchForm.productID}
                        placeholder="Product ID"
                        className={defaultSearchStyle}
                        onChange={(e) => handlerSearchValue(e, "productID")}
                      />
                    </div>
                    <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 px-2">
                      <div className="h-12 w-12 rounded-2xl bg-gray-100 mr-2 flex justify-center items-center text-gray-400">
                        <ProductIcon />
                      </div>
                      <input
                        autoComplete="nope"
                        value={searchForm.name}
                        placeholder="Product Name"
                        className={defaultSearchStyle}
                        onChange={(e) => handlerSearchValue(e, "name")}
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:bg-white rounded-xl sm:px-3 sm:py-3">
                  <div className="hidden sm:flex invisible sm:visible w-full flex-col sm:flex-row">
                    <div className="sm:text-left text-default-color font-title flex-1">
                      ProductID
                    </div>
                    <div className="sm:text-left text-default-color font-title flex-1">
                      Name
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
                      currentItems.map((product) => (
                        <div className={defaultTdWrapperStyle} key={product.id}>
                          <div className={defaultTdStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              ProductID
                            </div>
                            <div className={defaultTdContent}>
                              {product.image ? (
                                <img
                                  className="object-cover h-10 w-10 rounded-2xl"
                                  src={product.image}
                                  alt={product.name}
                                />
                              ) : (
                                <span className="h-10 w-10 rounded-2xl bg-gray-100 flex justify-center items-center">
                                  <ProductIcon />
                                </span>
                              )}
                              <span className="whitespace-nowrap text-ellipsis overflow-hidden pl-1">
                                {product.productID || "#"}
                              </span>
                            </div>
                          </div>

                          <div className={defaultTdStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Name
                            </div>
                            <div className={defaultTdContent}>
                              <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                                {product.name}
                              </span>
                            </div>
                          </div>

                          <div className={defaultTdStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Amount
                            </div>
                            <div className={defaultTdContent}>
                              <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                                {product.amount}
                              </span>
                            </div>
                          </div>

                          <div className={defaultTdActionStyle}>
                            <div className={defaultTdContentTitleStyle}>
                              Action
                            </div>
                            <div className={defaultTdContent}>
                              <Button onClick={() => handleSelect(product)}>
                                Select
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}

                    {products.length > 0 && (
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

export default ProductChoosenModal;
