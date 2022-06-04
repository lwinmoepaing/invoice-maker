/* eslint-disable no-useless-escape */
import React, { useState, useCallback, useMemo, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "../Button/Button";
import ImageUpload from "../Common/ImageUpload";
import SectionTitle from "../Common/SectionTitle";
import { useAppContext } from "../../context/AppContext";
import {
  defaultInputStyle,
  defaultInputInvalidStyle,
  defaultInputLargeStyle,
  defaultInputLargeInvalidStyle,
  defaultSkeletonLargeStyle,
  defaultSkeletonNormalStyle,
} from "../../constants/defaultStyles";
import {
  addNewClient,
  getClientNewForm,
  updateNewClientFormField,
} from "../../store/clientSlice";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emptyForm = {
  id: "",
  image: "",
  name: "",
  email: "",
  billingAddress: "",
  mobileNo: "",
};

function QuickAddClient({ editForm }) {
  const dispatch = useDispatch();
  const clientNewForm = useSelector(getClientNewForm);
  const { initLoading: isInitLoading } = useAppContext();

  const [isTouched, setIsTouched] = useState(false);
  const [clientForm, setClientForm] = useState(emptyForm);
  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const onChangeImage = useCallback(
    (str) => {
      setClientForm((prev) => ({ ...prev, image: str }));
      dispatch(updateNewClientFormField({ key: "image", value: str }));
    },
    [dispatch]
  );

  const handlerClientValue = useCallback(
    (event, keyName) => {
      const value = event.target.value;

      setClientForm((prev) => {
        return { ...prev, [keyName]: value };
      });

      dispatch(updateNewClientFormField({ key: keyName, value }));
    },
    [dispatch]
  );

  const submitHandler = useCallback(() => {
    setIsTouched(true);

    const isValid = Object.keys(validForm).every((key) => validForm[key]);

    if (!isValid) {
      toast.error("Invalid Client Form!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      return;
    }

    toast.success("Wow so easy to Update!", {
      position: "bottom-center",
      autoClose: 2000,
    });

    dispatch(addNewClient({ ...clientForm, id: nanoid() }));
    setIsTouched(false);
  }, [clientForm, dispatch, validForm]);

  const imageUploadClasses = useMemo(() => {
    const defaultStyle = "rounded-xl ";

    if (!clientForm.image) {
      return defaultStyle + " border-dashed border-2 border-indigo-400 ";
    }

    return defaultStyle;
  }, [clientForm]);

  useEffect(() => {
    const isValidEmail =
      clientForm?.email?.trim() && clientForm?.email.match(emailRegex);

    setValidForm((prev) => ({
      id: true,
      image: true,
      name: clientForm?.name?.trim() ? true : false,
      email: isValidEmail ? true : false,
      billingAddress: clientForm?.billingAddress?.trim() ? true : false,
      mobileNo: clientForm?.mobileNo?.trim() ? true : false,
    }));
  }, [clientForm]);

  useEffect(() => {
    if (clientNewForm) {
      setClientForm(clientNewForm);
    }
  }, [clientNewForm]);

  return (
    <div className="bg-white rounded-xl p-4">
      <SectionTitle> Quick Add Client </SectionTitle>
      <div className="flex mt-2">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-dashed border-2" />
        ) : (
          <ImageUpload
            keyName="QuickEditImageUpload"
            className={imageUploadClasses}
            url={clientForm.image}
            onChangeImage={onChangeImage}
          />
        )}

        <div className="flex-1 pl-3">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonLargeStyle} />
          ) : (
            <div>
              <input
                autoComplete="nope"
                value={clientForm.name}
                placeholder="User Name"
                className={
                  !validForm.name && isTouched
                    ? defaultInputLargeInvalidStyle
                    : defaultInputLargeStyle
                }
                onChange={(e) => handlerClientValue(e, "name")}
                disabled={isInitLoading}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex-1">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              autoComplete="nope"
              placeholder="Email Address"
              className={
                !validForm.email && isTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              disabled={isInitLoading}
              value={clientForm.email}
              onChange={(e) => handlerClientValue(e, "email")}
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
              autoComplete="nope"
              placeholder="Mobile No"
              className={
                !validForm.mobileNo && isTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              disabled={isInitLoading}
              value={clientForm.mobileNo}
              onChange={(e) => handlerClientValue(e, "mobileNo")}
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
              autoComplete="nope"
              placeholder="Billing Address"
              className={
                !validForm.billingAddress && isTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              disabled={isInitLoading}
              value={clientForm.billingAddress}
              onChange={(e) => handlerClientValue(e, "billingAddress")}
            />
          )}
        </div>
      </div>

      <div className="mt-3">
        <Button onClick={submitHandler} block={1}>
          <span className="inline-block ml-2"> Submit </span>
        </Button>
      </div>
    </div>
  );
}

export default QuickAddClient;
