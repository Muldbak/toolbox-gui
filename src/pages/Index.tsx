
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ActionButtons } from "@/components/ActionButtons";
import { AnalysisForm } from "@/components/AnalysisForm";
import { PscadParameters } from "@/components/PscadParameters";

const Index = () => {
  const [activeTab, setActiveTab] = useState("measurement");

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "measurement"
                  ? "text-mint-600 border-b-2 border-mint-500"
                  : "text-gray-500 hover:text-mint-600"
              }`}
              onClick={() => setActiveTab("measurement")}
            >
              Measurement Settings
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "pscad"
                  ? "text-mint-600 border-b-2 border-mint-500"
                  : "text-gray-500 hover:text-mint-600"
              }`}
              onClick={() => setActiveTab("pscad")}
            >
              PSCAD Parameters
            </button>
          </div>
          <ActionButtons />
        </div>
        {activeTab === "measurement" ? <AnalysisForm /> : <PscadParameters />}
      </div>
    </div>
  );
};

export default Index;

