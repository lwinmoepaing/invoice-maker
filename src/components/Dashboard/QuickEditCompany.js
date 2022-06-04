import React, { useCallback, useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import ImageUpload from "../Common/ImageUpload";
import SectionTitle from "../Common/SectionTitle";
import { getCompanyData, updateCompanyData } from "../../store/companySlice";
import { useAppContext } from "../../context/AppContext";
import {
  defaultInputStyle,
  defaultInputInvalidStyle,
  defaultInputLargeStyle,
  defaultInputLargeInvalidStyle,
  defaultSkeletonLargeStyle,
  defaultSkeletonNormalStyle,
} from "../../constants/defaultStyles";

const emptyForm = {
  id: "",
  image: "",
  companyName: "",
  companyEmail: "",
  companyMobile: "",
  billingAddress: "",
};

function QuickEditCompany({ isShowDetail = false, alreadySet = false }) {
  const dispatch = useDispatch();
  const company = useSelector(getCompanyData);
  const { initLoading: isInitLoading } = useAppContext();
  const [isTouched, setIsTouched] = useState(false);
  const [companyForm, setCompanyForm] = useState(emptyForm);
  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const onChangeImage = useCallback((str) => {
    setCompanyForm((prev) => ({ ...prev, image: str }));
  }, []);

  // const clearForm = useCallback(() => {
  //   setCompanyForm({ ...emptyForm });
  // }, []);

  const handlerCompanyValue = useCallback((event, keyName) => {
    const value = event.target.value;
    setCompanyForm((prev) => ({ ...prev, [keyName]: value }));
  }, []);

  const submitHandler = useCallback(() => {
    setIsTouched(true);

    const isValid = Object.keys(validForm).every((key) => validForm[key]);

    if (!isValid) {
      toast.error("Invalid Company Form!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      return;
    }

    toast.success("Wow so easy to Update!", {
      position: "bottom-center",
      autoClose: 2000,
    });

    dispatch(updateCompanyData(companyForm));
  }, [companyForm, dispatch, validForm]);

  const imageUploadClasses = useMemo(() => {
    const defaultStyle = "rounded-xl ";

    if (isTouched && !companyForm.image) {
      return defaultStyle + " border-dashed border-2 border-red-400 ";
    }

    if (!companyForm.image) {
      return defaultStyle + " border-dashed border-2 border-indigo-400 ";
    }

    return defaultStyle;
  }, [companyForm, isTouched]);

  useEffect(() => {
    if (company) {
      setCompanyForm(company);
    }
  }, [company]);

  useEffect(() => {
    setValidForm((prev) => ({
      id: true,
      image: companyForm.image ? true : false,
      companyName: companyForm.companyName ? true : false,
      companyEmail: companyForm.companyEmail ? true : false,
      companyMobile: companyForm.companyMobile ? true : false,
      billingAddress: companyForm.billingAddress ? true : false,
    }));
  }, [companyForm]);

  return (
    <div className="bg-white rounded-xl p-4 mt-4">
      <SectionTitle> Quick Edit Company </SectionTitle>
      <div className="flex mt-2">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-dashed border-2" />
        ) : (
          <ImageUpload
            onChangeImage={onChangeImage}
            keyName="QuickEditImageUpload"
            className={imageUploadClasses}
            url={companyForm.image}
          />
        )}

        <div className="flex-1 pl-3">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonLargeStyle} />
          ) : (
            <input
              value={companyForm.companyName}
              placeholder="Company Name"
              className={
                !validForm.companyName && isTouched
                  ? defaultInputLargeInvalidStyle
                  : defaultInputLargeStyle
              }
              onChange={(e) => handlerCompanyValue(e, "companyName")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>

      <div className="flex mt-2">
        <div className="flex-1">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              value={companyForm.billingAddress}
              placeholder="Company Address"
              className={
                !validForm.billingAddress && isTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              onChange={(e) => handlerCompanyValue(e, "billingAddress")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>

      <>
        <div className="flex mt-2">
          <div className="flex-1">
            {isInitLoading ? (
              <Skeleton className={defaultSkeletonNormalStyle} />
            ) : (
              <input
                value={companyForm.companyEmail}
                placeholder="Company Email"
                className={
                  !validForm.companyEmail && isTouched
                    ? defaultInputInvalidStyle
                    : defaultInputStyle
                }
                onChange={(e) => handlerCompanyValue(e, "companyEmail")}
                disabled={isInitLoading}
              />
            )}
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex-1">
            {isInitLoading ? (
              <Skeleton className={defaultSkeletonNormalStyle} />
            ) : (
              <input
                value={companyForm.companyMobile}
                placeholder="Company Phone"
                className={
                  !validForm.companyMobile && isTouched
                    ? defaultInputInvalidStyle
                    : defaultInputStyle
                }
                onChange={(e) => handlerCompanyValue(e, "companyMobile")}
                disabled={isInitLoading}
              />
            )}
          </div>
        </div>
      </>

      <div className="mt-3">
        <Button onClick={submitHandler} block={1}>
          <span className="inline-block ml-2"> Submit </span>
        </Button>
      </div>
    </div>
  );
}

export default QuickEditCompany;
