
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ActionButtons } from "@/components/ActionButtons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stability from "./Stability";

const Index = () => {
  const [activeTab, setActiveTab] = useState("measurement");

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-between items-center p-4 border-b">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList>
              <TabsTrigger value="measurement">Measurement Settings</TabsTrigger>
              <TabsTrigger value="plots">Plots</TabsTrigger>
            </TabsList>
          </Tabs>
          <ActionButtons />
        </div>
        {activeTab === "measurement" ? <Stability /> : <div>Plots Content</div>}
      </div>
    </div>
  );
}

export default Index;
