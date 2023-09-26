import { useEffect } from "react";
import MembersListItems from "./MemberListItems";
import { MembersDispatch } from "../../context/members/reducer";
import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

const MembersList = () => {
  const dispatchMembers = useMembersDispatch() as MembersDispatch;

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MembersListItems />
    </div>
  );
};
export default MembersList;
