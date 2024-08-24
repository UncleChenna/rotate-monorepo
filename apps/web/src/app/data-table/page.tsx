import React from "react";
import { Metadata } from "next";
import TodoPreview from "@/components/todo/TodoPreview";

export const metadata: Metadata = {
  title: "Data Table"
};

export default function DataTable() {
  return (
    <TodoPreview />
  );
}