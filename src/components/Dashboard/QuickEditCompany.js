import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import ImageUpload from "../Common/ImageUpload";
import SectionTitle from "../Common/SectionTitle";
import { updateCompanyData } from "../../store/companySlice";

const emptyForm = {
  id: "",
  image: "",
  companyName: "",
  companyEmail: "",
  companyMobile: "",
  billingAddress: "",
};

const defaultStyle =
  "font-title text-lg px-2 block w-full border-solid border-2 rounded-xl p-x2 focus:outline-none ";
const defaultInputStyle = defaultStyle + "border-indigo-400 h-12";
const defaultInputInvalidStyle = defaultStyle + "border-red-400 h-12";
const defaultInputLargeStyle = defaultStyle + "border-indigo-400 h-14";
const defaultInputLargeInvalidStyle = defaultStyle + "border-red-400 h-14";

function QuickEditCompany({ isShowDetail = false, alreadySet = false }) {
  const dispatch = useDispatch();

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
        <ImageUpload
          onChangeImage={onChangeImage}
          keyName="QuickEditImageUpload"
          className={imageUploadClasses}
          url={companyForm.image}
        />

        <div className="flex-1 pl-3">
          <input
            value={companyForm.companyName}
            placeholder="Company Name"
            className={
              !validForm.companyName && isTouched
                ? defaultInputLargeInvalidStyle
                : defaultInputLargeStyle
            }
            onChange={(e) => handlerCompanyValue(e, "companyName")}
          />
        </div>
      </div>

      <div className="flex mt-2">
        <div className="flex-1">
          <input
            value={companyForm.billingAddress}
            placeholder="Company Address"
            className={
              !validForm.billingAddress && isTouched
                ? defaultInputInvalidStyle
                : defaultInputStyle
            }
            onChange={(e) => handlerCompanyValue(e, "billingAddress")}
          />
        </div>
      </div>

      <>
        <div className="flex mt-2">
          <div className="flex-1">
            <input
              value={companyForm.companyEmail}
              placeholder="Company Email"
              className={
                !validForm.companyEmail && isTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              onChange={(e) => handlerCompanyValue(e, "companyEmail")}
            />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex-1">
            <input
              value={companyForm.companyMobile}
              placeholder="Company Phone"
              className={
                !validForm.companyMobile && isTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              onChange={(e) => handlerCompanyValue(e, "companyMobile")}
            />
          </div>
        </div>
      </>

      <div className="mt-3">
        <Button onClick={submitHandler}>
          <span className="inline-block ml-2"> Submit </span>
        </Button>
      </div>
    </div>
  );
}

export default QuickEditCompany;
