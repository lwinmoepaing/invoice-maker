import React from "react";
import Button from "../Button/Button";

const IconStyle = { top: -2, position: "relative", marginRight: 2 };

function InvoiceTopBar() {
  return (
    <div className="bg-white rounded-xl px-3 py-3">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex-1 my-1 sm:my-0 px-1">
          <Button size="sm" block={1} outlined={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={IconStyle}
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
            Change Color
          </Button>
        </div>
        <div className="flex-1 my-1 sm:my-0 px-1">
          <Button size="sm" block={1} outlined={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              style={IconStyle}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            Change Background
          </Button>
        </div>
        <div className="flex-1 my-1 sm:my-0 px-1">
          <Button size="sm" block={1} outlined={1}>
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
        <div className="flex-1 my-1 sm:my-0 px-1">
          <Button size="sm" block={1} outlined={1}>
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
