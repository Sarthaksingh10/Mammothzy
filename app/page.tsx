import FormSidebar from "@/components/activityForm/Formsidebar";

export default function Home() {
  return (
    <div className=" p-8 ">
      <h1 className="text-2xl font-bold mb-6">Create New Activity</h1>

      <div>
        <FormSidebar />
      </div>
    </div>
  );
}
