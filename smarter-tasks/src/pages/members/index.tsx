import { lazy, Suspense } from "react";

import ErrorBoundary from "../../components/ErrorBoundry";

import NewMember from "./NewMember";

const MembersList = lazy(() => import("./MemberList"));

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MembersList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Members;
