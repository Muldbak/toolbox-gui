
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActionButtons } from "@/components/ActionButtons";
import { AnalysisForm } from "@/components/AnalysisForm";
import { PscadParameters } from "@/components/PscadParameters";

export default function AutomatedImpedance() {
  const [activeTab, setActiveTab] = useState("analysis");

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center p-4 border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              Measurement Settings
            </TabsTrigger>
            <TabsTrigger value="pscad" className="flex items-center gap-2">
              PSCAD Parameters
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <ActionButtons />
      </div>
      {activeTab === "analysis" ? <AnalysisForm /> : <PscadParameters />}
    </div>
  );
}
