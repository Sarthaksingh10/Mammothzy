type labelValues = {
  htmlFor: string;
  value: string;
  required: boolean;
};

export default function Label({ htmlFor, value, required }: labelValues) {
  return (
    <label htmlFor={htmlFor} className="font-inter font-medium text-[12px]">
      {value} {required && <span className="text-red-500">*</span>}
    </label>
  );
}
