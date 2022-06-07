import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="my-5 flex flex-row items-center">
            <img
              src="https://raw.githubusercontent.com/lwinmoepaing/lwinmoepaing/main/img/gitto.gif"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              <a
                href="https://github.com/lwinmoepaing"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hi, I'm Lwin Moe Paing
              </a>
              <h1> This is Free Simple-Invoice Maker for your business.</h1>
            </div>
          </div>

          <PageTitle title="Invoice Maker" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export PDF </li>
              <li> Can Export Image </li>
            </ul>
          </div>
          <div className="font-title mt-4">
            <div>
              🤝 I’m looking for help with JS dev to build Many Free Softwares
              to help people who can't afford !!
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:lwinmoepaing.dev@gmail.com"
                className="underline cursor-pointer"
              >
                lwinmoepaing.dev@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.facebook.com/lwin.im/"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                facebook
              </a>
            </div>
            <div>
            🎁 {" "}
              <a
                href="https://github.com/lwinmoepaing/invoice-maker"
                className="underline cursor-pointer"
                target={"_blank"}
                rel="noreferrer"
              >
                Repo Link Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
