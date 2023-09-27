import { useEffect } from "react";

import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import { MembersDispatch } from "../../context/members/reducer";

import MembersListItems from "./MemberListItems";

const MembersList = () => {
  const dispatchMembers = useMembersDispatch() as MembersDispatch;

  useEffect(() => {
    void fetchMembers(dispatchMembers);
  }, [dispatchMembers]);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MembersListItems />
    </div>
  );
};
export default MembersList;
