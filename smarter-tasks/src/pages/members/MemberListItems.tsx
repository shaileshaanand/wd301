import { deleteMember } from "../../context/members/actions";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import { MembersDispatch, MembersState } from "../../context/members/reducer";

export default function MembersListItems() {
  const state = useMembersState() as MembersState;

  const { members, isLoading, isError, errorMessage } = state;
  const dispatchMembers = useMembersDispatch() as MembersDispatch;

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member) => (
        <div
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
        >
          <div className="flex justify-between items-center">
            <div>
              <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h5>
              <p>{member.email}</p>
            </div>
            <div className="flex items-center">
              <button onClick={() => deleteMember(dispatchMembers, member.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-10 h-10 text-red-500 dark:text-red-200 dark:bg-red-500 bg-red-100 rounded-md p-1 hover:bg-red-200 dark:hover:bg-red-600 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
