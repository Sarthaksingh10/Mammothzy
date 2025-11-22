import { Dispatch, SetStateAction } from "react";
import Button from "../common/Button";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
} from "react-hook-form";
import type { Inputs } from "@/components/activityForm/Formsidebar";
import Label from "../common/Label";
import Image from "next/image";
type locationProps = {
  setActiveTab: Dispatch<SetStateAction<number>>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  register: UseFormRegister<Inputs>;
  error: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
  isValid: boolean;
  reset: UseFormReset<Inputs>;

  setShowSuccessModal: Dispatch<SetStateAction<boolean>>;
};

const countries = [
  { flag: "IND", code: "+91" },
  { flag: "AU", code: "+61" },
  { flag: "GB", code: "+44" },
];

export default function LocationDetailsForm({
  setActiveTab,
  handleSubmit,
  register,
  error,

  setShowSuccessModal,
  watch,
  reset,
}: locationProps) {
  const handlePrev = () => {
    setActiveTab((prevTab) => prevTab - 1);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("submitted response", data);
    setShowSuccessModal(true);
    reset();
    setActiveTab(1);
  };

  const step2Valid =
    watch("activityName") &&
    watch("activityCategory") &&
    watch("aboutTheActivity") &&
    watch("activityType") &&
    watch("activityLocationType") &&
    watch("location.lineOne") &&
    watch("location.zipCode") &&
    watch("location.cityName") &&
    watch("location.stateName") &&
    watch("contact.contactNumber");

  const selectedState = watch("location.stateName");
  return (
    <div className="border-l border-[#6B6B6B]  flex flex-col gap-6 w-full px-2">
      <div className="flex flex-col gap-4">
        <h4 className="text-[18px] font-inter font-bold text-[#2E2B2B]">
          Location Details
        </h4>
        <p className="font-inter font-regular text-[#6b6b6b]">
          Please specify the address for where the activity takes place.
        </p>

        <div className="flex flex-col gap-2 ">
          {/* Adress line one */}
          <div className="w-2/3 gap-2 flex flex-col">
            <Label
              htmlFor="addressLineOne"
              value="Adress Line 1"
              required={true}
            />

            <input
              type="text"
              className="w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
              placeholder="House number and street name  "
              {...register("location.lineOne", { required: true })}
            />
            {error.location?.lineOne && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          {/* Address Line two */}
          <div className="w-2/3 gap-2 flex flex-col">
            <Label
              htmlFor="addressLineOne"
              value="Adress Line 2"
              required={false}
            />

            <input
              type="text"
              className="w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
              placeholder="Other information, e.g., building name, landmark, etc. "
              {...register("location.lineTwo")}
            />
            {error.location?.lineTwo && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          {/* Zip Code */}
          <div className="w-2/3 gap-2 flex flex-col">
            <Label htmlFor="zipcode" value="Zip Code" required={true} />

            <input
              type="text"
              className="w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
              placeholder="eg: 123 467 "
              {...register("location.zipCode")}
            />
            {error.location?.zipCode && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          {/* city and state */}
          <div className="flex gap-3">
            <div className="w-[33%] gap-2 flex flex-col">
              <Label htmlFor="city" value="City" required={true} />

              <input
                type="text"
                className="w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
                placeholder="Your City "
                {...register("location.cityName")}
              />
              {error.location?.cityName && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="w-[33%] gap-2 flex flex-col">
              <Label htmlFor="stateName" value="State" required={true} />

              <select
                id="stateName"
                className={`w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular ${
                  selectedState ? "text-black" : "text-[#6b6b6b]"
                }`}
                {...register("location.stateName", { required: true })}
              >
                <option value="" className=" text-[#6B6B6B]">
                  {" "}
                  your state
                </option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>

              {error.location?.stateName && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
          </div>
        </div>

        <div className="border border-[#6b6b6b] w-[67%] relative left-1"></div>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-[18px] font-inter font-bold text-[#2E2B2B]">
          Contact Details
        </h4>
        <p className="font-inter font-regular text-[#6b6b6b]">
          Please provide contact information for this activity.
        </p>

        <div className="flex gap-3">
          <div className="flex flex-col gap-1 w-[33%]">
            <div className="flex items-center border border-[#6B6B6B] rounded-full  gap-3">
              {/* Country selector */}
              <select
                {...register("contact.countryCode")}
                className="border-r border-r-[#6b6b6b] p-2 "
              >
                {countries.map((item, i) => (
                  <option key={i} value={item.code}>
                    {item.flag}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Contact Number"
                className="flex-1 outline-none"
                {...register("contact.contactNumber", { required: true })}
              />
            </div>

            {error.contact?.contactNumber && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div className="w-[33%] gap-2 flex flex-col">
            <input
              type="text"
              className="w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
              placeholder="Your Name "
              {...register("contact.contactName")}
            />

            {error.contact?.contactName && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={handlePrev}
          className="bg-[#f7f7f7] text-[#2E2B2B] font-inter font-normal text-[14px] w-fit"
        >
          Previous
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          className={`expandSubmitButton flex text-[#ffffff] font-inter font-bold text-[14px] w-fit ${
            step2Valid ? "bg-[#001D44]" : "bg-[#6B6B6B]"
          }`}
          disabled={!step2Valid}
        >
          <span>Submit</span>
          <span className="icon">
            <i className="fa fa-arrow-right"></i>
          </span>
        </Button>
      </div>
    </div>
  );
}
