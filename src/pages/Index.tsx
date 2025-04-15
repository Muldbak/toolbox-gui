
import { Sidebar } from "@/components/layout/Sidebar";
import { ActionButtons } from "@/components/ActionButtons";
import { AnalysisForm } from "@/components/AnalysisForm";

const Index = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex gap-4">
            <button className="text-mint-600 border-b-2 border-mint-500 px-4 py-2">
              Measurement Settings
            </button>
            <button className="text-gray-500 hover:text-mint-600 px-4 py-2">
              PSCAD Parameters
            </button>
          </div>
          <ActionButtons />
        </div>
        <AnalysisForm />
      </div>
    </div>
  );
};

export default Index;
