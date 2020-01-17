//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import { graphql, createPagination } from '../../api';
import NodeListItem from '../NodeListItem';

import { type UserGroupUserList_userGroup as UserGroup } from './__generated__/UserGroupUserList_userGroup.graphql';

const usePagination = createPagination<UserGroup>(graphql`
  fragment UserGroupUserList_userGroup on UserGroup
    @argumentDefinitions(
      search: { type: "String" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    id
    viewerCanUpdate
    members(search: $search, first: $count, after: $cursor)
      @connection(key: "UserGroupUserList_members") {
      edges {
        role
        node {
          ...NodeListItem_node
          id
        }
      }
    }
  }
`);

// const connectionConfig = {
//   getVariables: (props, { count, cursor }) => ({
//     userGroupId: props.userGroup.id,
//     count,
//     cursor,
//   }),
//   query: graphql`
//     query UserGroupUserListPaginationQuery(
//       $userGroupId: ID!
//       $search: String
//       $count: Int!
//       $cursor: ID
//     ) {
//       userGroup(id: $userGroupId) {
//         ...UserGroupUserList_userGroup @arguments(search: $search, count: $count, cursor: $cursor)
//       }
//     }
//   `,
// };

type Props = {
  userGroup: mixed,
};

export default function UserGroupUserList(props: Props) {
  const [userGroup] = usePagination(props.userGroup);

  return (
    <>
      {userGroup.members.edges.map(({ role, node: user }) => (
        <NodeListItem
          key={user.id}
          node={user}
          infoChips={
            <>
              <Chip label={`Role: ${role}`} />
            </>
          }
          actionButtons={
            <>
              {/* <Button variant="contained" component={Link} to={`/dashboard/users/view/${user.id}`}>
                View
              </Button> */}
              {userGroup.viewerCanUpdate && (
                <>
                  {/* <Button
                    variant="contained"
                    component={Link}
                    onClick={() => alert('Not yet implemented.')}
                    to={`/dashboard/organizations/view/${userGroup.id}/change-role/${user.id}`}
                  >
                    Change Role
                  </Button> */}
                  <Button
                    color="primary"
                    component={Link}
                    to={`/dashboard/organizations/view/${userGroup.id}/remove/${user.id}`}
                  >
                    Remove
                  </Button>
                </>
              )}
            </>
          }
        />
        // <ListPaper key={user.id} style={{ borderRadius: '0.25rem' }}>
        //   <div
        //     style={{
        //       padding: '1.5rem 2.5rem',
        //     }}
        //   >
        //     <div
        //       style={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         justifyContent: 'space-around',
        //         backgroundColor: 'rgb(245, 245, 245)',
        //       }}
        //     >
        //       <div style={{ fontSize: 16, fontWeight: 700 }}>{user.name}</div>
        //       {/* <div style={{ fontSize: 14 }}>
        //           <UserAvatar user={program.author} />
        //           {program.author.name}
        //         </div> */}
        //     </div>
        //   </div>
        //   <div
        //     style={{
        //       padding: '1.5rem 2.5rem',
        //     }}
        //   >
        //     <div
        //       style={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'flex-end',
        //       }}
        //     >
        //       <Chip label={`Role - ${role}`} />
        //     </div>
        //     {/* <div style={{ marginTop: 24, fontSize: 16 }}>{userGroup.description}</div> */}
        //     <div>
        //       {/* <Button variant="contained" component={Link} to={`/dashboard/programs/edit/${program.id}`}>
        //           Edit
        //         </Button> */}
        //       <Button variant="contained" component={Link} to={`/dashboard/users/view/${user.id}`}>
        //         View
        //       </Button>
        //       {userGroup.viewerCanUpdate && (
        //         <>
        //           <Button
        //             variant="contained"
        //             component={Link}
        //             onClick={() => alert('Not yet implemented.')}
        //             to={`/dashboard/organizations/view/${userGroup.id}/change-role/${user.id}`}
        //           >
        //             Change Role
        //           </Button>
        //           <Button
        //             variant="contained"
        //             component={Link}
        //             to={`/dashboard/organizations/view/${userGroup.id}/remove/${user.id}`}
        //           >
        //             Remove
        //           </Button>
        //         </>
        //       )}
        //     </div>
        //   </div>
        // </ListPaper>
      ))}
    </>
  );
}
