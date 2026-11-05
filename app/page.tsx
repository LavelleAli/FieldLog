"use client";
import dynamic from "next/dynamic";

const IssueBoard = dynamic(
  () => import("@/components/issueboard/IssueBoard"),
  { ssr: false }
);

export default function Page() {
  return <IssueBoard />;
}
