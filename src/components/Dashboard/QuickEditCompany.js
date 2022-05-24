import React from "react";
import Button from "../Button/Button";
import ImageUpload from "../Common/ImageUpload";
import SectionTitle from "../Common/SectionTitle";

function QuickEditCompany() {
  return (
    <div className="bg-white rounded-xl p-4 mt-3">
      <SectionTitle> Quick Edit Company </SectionTitle>
      <div className="flex mt-2">
        <ImageUpload
          onChangeImage={(str) => console.log(str)}
          keyName="QuickEditImageUpload"
          className="border-dashed border-2 rounded-xl border-indigo-400"
        />

        <div className="flex-1 pl-3">
          <input
            placeholder="Company Name"
            className="font-title text-lg px-2 block w-full border-solid border-2 rounded-xl border-indigo-400 p-x2 h-14 focus:outline-none"
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

export default QuickEditCompany;
