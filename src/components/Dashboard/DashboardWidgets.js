import React from "react";
import LottieMoney from "../LotiIcon/LottieMoney";
import LottieProduct from "../LotiIcon/LottieProduct";
import LottieInvoice from "../LotiIcon/LottieInvoice";
import LottiePersons from "../LotiIcon/LottiePersons";
import Tilt from "react-parallax-tilt";

function DashboardWidgets() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3 md:w-1/2">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="p-4 bg-white rounded-xl mx-2 hover:shadow-sm">
              <div className="font-title">Total Balance</div>
              <div className="flex justify-between items-center">
                {/* Icon */}
                <div className="h-30">
                  <LottieMoney loop className="h-20" />
                </div>
                {/* Icon Finished */}
                <div className="text-2xl mr-2">100,000</div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="p-4 bg-white rounded-xl mx-2 hover:shadow-sm">
              <div className="font-title">Total Products</div>
              <div className="flex justify-between items-center">
                {/* Icon */}
                <div className="h-30">
                  <LottieProduct loop className="h-20" />
                </div>
                {/* Icon Finished */}
                <div className="text-2xl mr-2">2,000</div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="p-4 bg-white rounded-xl mx-2 hover:shadow-sm">
              <div className="font-title">Total Invoices</div>
              <div className="flex justify-between items-center">
                {/* Icon */}
                <div className="h-30">
                  <LottieInvoice loop className="h-20" />
                </div>
                {/* Icon Finished */}
                <div className="text-2xl mr-2">100,000</div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="w-full mb-3 md:w-1/2">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="p-4 bg-white rounded-xl mx-2 hover:shadow-sm">
              <div className="font-title">Total Clients</div>
              <div className="flex justify-between items-center">
                {/* Icon */}
                <div className="h-30">
                  <LottiePersons loop className="h-20" />
                </div>
                {/* Icon Finished */}
                <div className="text-2xl mr-2">2,000</div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
}

export default DashboardWidgets;
