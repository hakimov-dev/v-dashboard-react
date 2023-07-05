import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface CardProps {
  children: ReactNode;
}

const Dashboard: React.FC<CardProps> = ({children}) => {
  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
         <Header/>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
             { children }
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
