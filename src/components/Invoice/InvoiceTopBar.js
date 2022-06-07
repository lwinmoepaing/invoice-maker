import React from "react";
import { IconStyle } from "../../constants/defaultStyles";
import Button from "../Button/Button";
import EyeOpenIcon from "../Icons/EyeOpenIcon";
import PencilIcon from "../Icons/PencilIcon";
import SettingIcon from "../Icons/SettingIcon";

function InvoiceTopBar({
  viewMode = false,
  onClickViewAs,
  onClickSetting,
  onClickExport,
  onClickDownloadImg,
  onClickBack,
}) {
  return (
    <div className="bg-white rounded-xl px-3 py-3">
      <div className="flex flex-col flex-wrap sm:flex-row justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 my-1 sm:my-1 md:my-0 px-1 flex flex-row">
          <div className="w-30 mr-3">
            <Button size="sm" block={1} onClick={onClickBack}>
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={"M15 19l-7-7 7-7"}
                  />
                </svg>
              </>
            </Button>
          </div>
          <div className="flex-1">
            <Button size="sm" block={1} outlined={1} onClick={onClickViewAs}>
              {!viewMode ? (
                <>
                  <EyeOpenIcon className="h-4 w-4" style={IconStyle} /> View
                  Mode
                </>
              ) : (
                <>
                  <PencilIcon className="h-4 w-4" style={IconStyle} /> Editing
                  Mode
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 my-1 sm:my-1 md:my-0 px-1">
          <Button size="sm" block={1} outlined={1} onClick={onClickSetting}>
            <SettingIcon className="h-4 w-4" /> Setting
          </Button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 my-1 sm:my-1 md:my-0 px-1">
          <Button size="sm" block={1} outlined={1} onClick={onClickExport}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              style={IconStyle}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clipRule="evenodd"
              />
            </svg>
            Export PDF
          </Button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 my-1 sm:my-1 md:my-0 px-1">
          <Button size="sm" block={1} outlined={1} onClick={onClickDownloadImg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={IconStyle}
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Image
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTopBar;
