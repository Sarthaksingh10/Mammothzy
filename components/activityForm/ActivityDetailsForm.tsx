import { Dispatch, SetStateAction } from "react";
import Button from "../common/Button";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { Inputs } from "./Formsidebar";
import Label from "../common/Label";
type activityProps = {
  setActiveTab: Dispatch<SetStateAction<number>>;
  register: UseFormRegister<Inputs>;
  error: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
  isValid: boolean;
};

const categories = [
  "Adventure & Games",
  "Creative Expression",
  "Learning & Development",
  "Food & Drink",
  "Sports & Fitness",
  "Volunteering ",
  "Other",
];

const typeOfActivity = ["Indoor", "Outdoor", "Virtual"];
const activityLocation = ["Provider Location", "User Location"];
export default function ActivityDetailsForm({
  setActiveTab,
  register,
  watch,
  error,
  isValid,
}: activityProps) {
  const handleNext = () => {
    setActiveTab((prevTab) => prevTab + 1);
  };

  const selectedCategory = watch("activityCategory");
  const step1Valid =
    watch("activityName") &&
    watch("activityCategory") &&
    watch("aboutTheActivity") &&
    watch("activityType") &&
    watch("activityLocationType");

  return (
    <div className="border-l border-[#6B6B6B] px-2 gap-6 flex flex-col w-full">
      <h4 className="text-[18px] font-inter font-bold text-[#2E2B2B]">
        Activity Details
      </h4>

      {/* Activity Name */}
      <div className="w-2/3 gap-2 flex flex-col">
        <Label htmlFor="activityName" value="Activity Name" required={true} />

        <input
          type="text"
          className="w-full rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
          placeholder="Eg. Football tournament in Delhi"
          {...register("activityName", { required: true })}
        />
        {error.activityName && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      {/* Activity Category */}
      <div>
        <Label
          htmlFor="activityCategory"
          value="Select the best category to describe your activity"
          required={true}
        />

        <div className="flex flex-col gap-2 mt-2">
          {categories.map((category, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="radio"
                value={category}
                {...register("activityCategory", {
                  required: "This Field is required",
                })}
              />
              {category}
            </label>
          ))}

          {error.activityCategory && (
            <p className="text-red-500">Please select a category</p>
          )}
        </div>

        {selectedCategory === "Other" && (
          <div>
            <input
              type="text"
              id="otherCategory"
              placeholder=" Please specify the category"
              className="w-2/3 border rounded-full p-2 mt-1"
              {...register("otherCategory")}
            />
          </div>
        )}
      </div>

      {/* Activity Description */}
      <div className="w-2/3  flex flex-col gap-2 ">
        <label
          htmlFor="aboutTheActivity"
          className="font-inter font-medium text-[12px]"
        >
          About the activity <span className="text-red-500">*</span>
        </label>

        <textarea
          id="aboutTheActivity"
          className="w-full rounded-lg border border-[#6B6B6B] p-3 font-inter font-regular resize-none"
          placeholder="Activity Description"
          rows={4}
          {...register("aboutTheActivity", { required: true })}
        ></textarea>

        {error.aboutTheActivity && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      {/* Activity Type */}
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="typeOfActivity"
          value=" Activity Type"
          required={true}
        />

        {typeOfActivity.map((type, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              value={type}
              {...register("activityType", {
                required: "This Field is required",
              })}
            />
            {type}
          </label>
        ))}

        {error.activityType && (
          <p className="text-red-500">Please select a Type</p>
        )}
      </div>

      {/* Activity Location */}
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="locationOfActivity"
          value="Location Type"
          required={true}
        />

        {activityLocation.map((loc, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              value={loc}
              {...register("activityLocationType", {
                required: "This Field is required",
              })}
            />
            {loc}
          </label>
        ))}

        {error.activityLocationType && (
          <p className="text-red-500">Please select a value</p>
        )}
      </div>

      {/* Activity Capacity */}
      <div className="w-full gap-2 flex flex-col">
        <Label
          htmlFor="participants"
          value="How many members can take part in the activity?"
          required={false}
        />
        <div className="flex gap-2">
          <input
            type="text"
            className="w-[33%] rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
            placeholder="Min participants"
            {...register("participants.min")}
          />

          <input
            type="text"
            className="w-1/3 rounded-full border border-[#6B6B6B] p-2 font-inter font-regular"
            placeholder=" Max participants"
            {...register("participants.max")}
          />
        </div>
      </div>

      <Button
        onClick={handleNext}
        className={`expandButton text-[#ffffff] font-inter font-bold text-[14px] w-fit ${
          step1Valid ? "bg-[#001D44]" : "bg-[#6B6B6B]"
        }`}
        disabled={!step1Valid}
      >
        <span className="text">Save and next</span>
        <span className="icon">
          <i className="fa fa-arrow-right"></i>
        </span>
      </Button>
    </div>
  );
}
