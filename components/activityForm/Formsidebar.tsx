"use client";

import { useState } from "react";
import ActivityDetailsForm from "./ActivityDetailsForm";
import LocationDetailsForm from "./LocationDetailsForm";
import { useForm } from "react-hook-form";
import Modal from "../common/Modal";

export type Inputs = {
  activityName: string;
  activityCategory: string;
  otherCategory?: string;
  aboutTheActivity: string;
  activityType: string;
  activityLocationType: string;
  participants?: {
    min?: string;
    max?: string;
  };
  location: {
    lineOne: string;
    lineTwo?: string;
    zipCode: number;
    cityName: string;
    stateName: string;
  };

  contact: {
    countryCode: string;
    contactNumber: string;
    contactName?: string;
  };
};
export default function Formsidebar() {
  const [activeTab, setActiveTab] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({ mode: "onChange" });

  const step1Valid =
    watch("activityName") &&
    watch("activityCategory") &&
    watch("aboutTheActivity") &&
    watch("activityType") &&
    watch("activityLocationType");
  return (
    <div className="  p-6 flex gap-4 items-start">
      <div className="min-w-fit flex gap-8  pr-2 mb-8 flex-col sticky top-6 ">
        <button
          className={`  gap-2.5 flex  items-center ${
            activeTab === 1 ? " bg-[#f7f7f7] p-2 rounded-md" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          <i className="fa-regular fa-flag w-6 h-6 relative top-1" />
          <p className="text-[16px] font-inter font-medium">Activity Details</p>
        </button>

        <button
          className={`gap-2.5 flex items-center ${
            activeTab === 2 ? " bg-[#f7f7f7] p-2 rounded-md " : "text-gray-500"
          }`}
          onClick={() => {
            if (step1Valid) {
              setActiveTab(2);
            }
          }}
        >
          <i className="fa-solid fa-location-dot w-6 h-6 relative top-1" />
          <p className="text-[16px] font-inter font-medium">Location Details</p>
        </button>
      </div>

      <form className="w-full " method="POST">
        {activeTab === 1 && (
          <ActivityDetailsForm
            setActiveTab={setActiveTab}
            register={register}
            watch={watch}
            error={errors}
            isValid={isValid}
          />
        )}
        {activeTab === 2 && (
          <LocationDetailsForm
            setActiveTab={setActiveTab}
            handleSubmit={handleSubmit}
            register={register}
            watch={watch}
            error={errors}
            isValid={isValid}
            reset={reset}
            setShowSuccessModal={setShowSuccessModal}
          />
        )}
      </form>

      {showSuccessModal && <Modal onClose={() => setShowSuccessModal(false)} />}
    </div>
  );
}
