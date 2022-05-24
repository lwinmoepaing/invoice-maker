import React, { useState, useCallback, useMemo } from "react";
import Button from "../Button/Button";
import ImageUpload from "../Common/ImageUpload";
import SectionTitle from "../Common/SectionTitle";

const emptyForm = {
  id: "",
  image: "",
  name: "",
  email: "",
  billingAddress: "",
  mobileNo: "",
};

function QuickAddClient({ editForm }) {
  const [clientForm, setClientForm] = useState(emptyForm);

  const onChangeImage = useCallback((str) => {
    setClientForm((prev) => ({ ...prev, image: str }));
  }, []);

  const handlerClientValue = useCallback((event, keyName) => {
    const value = event.target.value;
    setClientForm((prev) => ({ ...prev, [keyName]: value }));
  }, []);

  const imageUploadClasses = useMemo(() => {
    const defaultStyle = "rounded-xl ";
    if (!clientForm.image) {
      return defaultStyle + " border-dashed border-2 border-indigo-400 ";
    }
    return defaultStyle;
  }, [clientForm]);

  return (
    <div className="bg-white rounded-xl p-4 mt-4">
      <SectionTitle> Quick Add Client </SectionTitle>
      <div className="flex mt-2">
        <ImageUpload
          keyName="QuickEditImageUpload"
          className={imageUploadClasses}
          url={clientForm.image}
          onChangeImage={onChangeImage}
        />

        <div className="flex-1 pl-3">
          <input
            placeholder="User Name"
            className="font-title text-md px-2 block w-full border-solid border-2 rounded-xl border-indigo-400 p-x2 h-14 focus:outline-none"
            name="clientName"
            value={clientForm.name}
            onChange={(e) => handlerClientValue(e, "name")}
          />
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex-1">
          <input
            placeholder="Email Address"
            className="font-title text-md px-2 block w-full border-solid border-2 rounded-xl border-indigo-400 p-x2 h-12 focus:outline-none"
            name="clientEmail"
            value={clientForm.email}
            onChange={(e) => handlerClientValue(e, "email")}
          />
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex-1">
          <input
            placeholder="Mobile No"
            className="font-title text-md px-2 block w-full border-solid border-2 rounded-xl border-indigo-400 p-x2 h-12 focus:outline-none"
            name="clientMobile"
            value={clientForm.mobileNo}
            onChange={(e) => handlerClientValue(e, "mobileNo")}
          />
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex-1">
          <input
            placeholder="Billing Address"
            className="font-title text-md px-2 block w-full border-solid border-2 rounded-xl border-indigo-400 p-x2 h-12 focus:outline-none"
            name="clientBillingAddress"
            value={clientForm.billingAddress}
            onChange={(e) => handlerClientValue(e, "billingAddress")}
          />
        </div>
      </div>

      <div className="mt-3">
        <Button>
          <span className="inline-block ml-2"> Submit </span>
        </Button>
      </div>
    </div>
  );
}

export default QuickAddClient;
