// @flow

import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { graphql, createQuery } from '../../api';
import ClientProfileInvitationScreen from '../ClientProfileInvitationPage/ClientProfileInvitationScreen';

import ProgramTrackInvitationScreen from './ProgramTrackInvitationScreen';
import ProgramModuleDetailScreen from './ProgramModuleDetailScreen';
import ProgramDetailScreen from './ProgramDetailScreen';
import IphoneFrame from './IphoneFrame';
import { type MobileAppEmulatorQuery } from './__generated__/MobileAppEmulatorQuery.graphql';
import useEmulatorState, { EmulatorStateProvider } from './useEmulatorState';

export { useEmulatorState, EmulatorStateProvider };

const useQuery = createQuery<MobileAppEmulatorQuery>(graphql`
  query MobileAppEmulatorQuery {
    currentSession {
      user {
        ...ProgramTrackInvitationScreen_user
        ...ProgramModuleDetailScreen_user
        ...ProgramDetailScreen_user
      }
    }
  }
`);

export type Emulatable =
  | { type: 'programModule', module: any, response?: any }
  | { type: 'programInvitation', program: mixed }
  | { type: 'clientProfileInvitation', clientProfileInvitation: mixed }
  | { type: 'programDetail', program: mixed };

type Props = {|
  emulatable: ?Emulatable,
  showSaveButton?: boolean,
  style?: any,
|};

export default function MobileAppEmulator(props: Props) {
  const { emulatable, showSaveButton = true, style } = props;

  const query = useQuery();
  const user = query.props?.currentSession?.user;

  const [, dispatcher] = useEmulatorState();

  const theme = useTheme();

  React.useEffect(() => {
    dispatcher.setShowSaveButton(showSaveButton);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let statusBarColor = 'white';

  let content;
  if (emulatable) {
    switch (emulatable.type) {
      case 'programInvitation': {
        const { program } = emulatable;
        content = user && <ProgramTrackInvitationScreen user={user} program={program} />;
        break;
      }
      case 'programModule': {
        const { module, response } = emulatable;
        content = user && (
          <ProgramModuleDetailScreen user={user} selectedModule={module} response={response} />
        );
        break;
      }
      case 'clientProfileInvitation': {
        const { clientProfileInvitation } = emulatable;
        content = (
          <ClientProfileInvitationScreen clientProfileInvitation={clientProfileInvitation} />
        );
        break;
      }
      case 'programDetail': {
        statusBarColor = theme.palette.secondary.main;

        const { program } = emulatable;
        content = user && <ProgramDetailScreen user={user} program={program} />;
        break;
      }
      default:
        throw new Error(`Invalid emulatable type: "${emulatable.type}"`);
    }
  }

  return (
    <IphoneFrame style={style}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ height: 48, backgroundColor: statusBarColor }} />
        <div
          style={{
            flex: 1,
            display: 'flex',
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
        >
          {content}
        </div>
        <div style={{ height: 48, backgroundColor: 'white' }} />
      </div>
    </IphoneFrame>
  );
}

// export default function MobileAppEmulatorWrapper(props: Props) {
//   return (
//     <EmulatorStateProvider>
//       <MobileAppEmulator {...props} />
//     </EmulatorStateProvider>
//   );
// }
