// @flow

import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Landing
import AboutOrganizationsPage from '../AboutOrganizationsPage';
import FitnessPage from '../FitnessPage';
import MedicalPage from '../MedicalPage';
import AboutUsPage from '../AboutUsPage';
import ContactUsPage from '../ContactUsPage';
import LandingPage from '../LandingPage';
import NotFoundPage from '../NotFoundPage';
import ProgramInvitationPage from '../ProgramInvitationPage';
import PricingPage from '../PricingPage';
import PrivacyPolicyPage from '../PrivacyPolicyPage';
import TermsOfServicePage from '../TermsOfServicePage';
import ClientProfileInvitationPage from '../ClientProfileInvitationPage';
// Dashboard
import DashboardNotFoundPage from '../DashboardNotFoundPage';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
// import NotificationListPage from '../NotificationListPage';
// import ProgramCreatePage from '../ProgramCreatePage';
// import ProgramInvitationListPage from '../ProgramInvitationListPage';
// import ProgramInvitationViewPage from '../ProgramInvitationViewPage';
import ProgramListPage from '../ProgramListPage';
import ProgramViewPage from '../ProgramViewPage';
import ProfilePage from '../ProfilePage';
import SignupPage from '../SignupPage';
import SubscriptionsPage from '../SubscriptionsPage';
import UserGroupListPage from '../UserGroupListPage';
import UserGroupViewPage from '../UserGroupViewPage';
import UserListPage from '../UserListPage';
import UserViewPage from '../UserViewPage';
import ProgramTrackViewPage from '../ProgramTrackViewPage';
import ProgramModuleListPage from '../ProgramModuleListPage';
import ProgramModuleViewPage from '../ProgramModuleViewPage';
import EulaPage from '../EulaPage';
// import TestPage from '../TestPage';
import DashboardHelpPage from '../DashboardHelpPage';
import ResetPasswordPage from '../ResetPasswordPage';
import RequestPasswordResetPage from '../RequestPasswordResetPage';
import ClientProfileListPage from '../ClientProfileListPage';
import ClientProfileViewPage from '../ClientProfileViewPage';
import ChatPage from '../ChatPage';
import appData from '../../data';

import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

const { dashboardPath } = appData;
const enableLanding = dashboardPath !== '' && !appData.noLanding;

export default function Routes() {
  // TODO: Find something better than react-router and use that to avoid this
  if (!enableLanding) {
    return (
      <Switch>
        {/* Generic */}
        <Redirect exact from="/" to={`${dashboardPath}`} />
        {/* <Route path="/privacy" component={PrivacyPolicyPage} />
        <Route path="/tos" component={TermsOfServicePage} />
        <Route path="/eula" component={EulaPage} /> */}
        <Route path="/pi/:programInvitationToken" component={ProgramInvitationPage} />
        <Route path="/ci/:clientProfileInvitationToken" component={ClientProfileInvitationPage} />
        {/* Dashboard */}
        {/* <AuthenticatedRoute exact path="/dashboard/test" component={TestPage} /> */}
        <AuthenticatedRoute exact path={`${dashboardPath}`} component={HomePage} />
        <UnauthenticatedRoute path={`${dashboardPath}/login`} component={LoginPage} />
        <UnauthenticatedRoute path={`${dashboardPath}/signup`} component={SignupPage} />
        <UnauthenticatedRoute
          path={`${dashboardPath}/request-password-reset`}
          component={RequestPasswordResetPage}
        />
        <UnauthenticatedRoute
          path={`${dashboardPath}/reset-password`}
          component={ResetPasswordPage}
        />
        <AuthenticatedRoute path={`${dashboardPath}/profile`} component={ProfilePage} />
        {/* /programs */}
        <AuthenticatedRoute exact path={`${dashboardPath}/programs`} component={ProgramListPage} />
        <AuthenticatedRoute
          exact
          path="/dashboard/myprograms"
          component={(param) => <ProgramListPage {...param} showUserPrograms />}
        />
        <AuthenticatedRoute path="/dashboard/programs/new" component={ProgramListPage} />
        <AuthenticatedRoute
          exact
          path="/dashboard/myprograms/new"
          component={(param) => <ProgramListPage {...param} showUserPrograms />}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/programs/view/:programId`}
          component={ProgramViewPage}
        />
        {/* /modules */}
        <AuthenticatedRoute
          exact
          path={`${dashboardPath}/modules`}
          component={ProgramModuleListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/modules/create`}
          component={ProgramModuleListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/modules/add-to-program`}
          component={ProgramModuleListPage}
        />
        <AuthenticatedRoute
          exact
          path={`${dashboardPath}/modules/:tagId`}
          component={ProgramModuleListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/modules/:tagId/create`}
          component={ProgramModuleListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/modules/:tagId/add-to-program`}
          component={ProgramModuleListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/modules/view/:programModuleId`}
          component={ProgramModuleViewPage}
        />
        {/* /tracks */}
        <AuthenticatedRoute
          path={`${dashboardPath}/tracks/view/:programTrackId`}
          component={ProgramTrackViewPage}
        />
        {/* /clients */}
        <AuthenticatedRoute
          exact
          path={`${dashboardPath}/clients`}
          component={ClientProfileListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/clients/new`}
          component={ClientProfileListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/clients/view/:clientProfileId/programs/view/:programId`}
          component={ProgramViewPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/clients/view/:clientProfileId/tracks/view/:programTrackId`}
          component={ProgramTrackViewPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/clients/view/:clientProfileId`}
          component={ClientProfileViewPage}
        />
        {/* /chat */}
        <AuthenticatedRoute path={`${dashboardPath}/chat/:chatChannelId`} component={ChatPage} />
        <AuthenticatedRoute path={`${dashboardPath}/chat`} component={ChatPage} />
        {/* /help */}
        <AuthenticatedRoute exact path={`${dashboardPath}/help`} component={DashboardHelpPage} />
        {/* /program-invitations */}
        {/* <AuthenticatedRoute
        exact
        path={`${dashboardPath}/program-invitations`}
        component={ProgramInvitationListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/program-invitations/view/:programInvitationId`}
        component={ProgramInvitationViewPage}
      /> */}
        {/* <AuthenticatedRoute
        path={`${dashboardPath}/program-invitations/create`}
        component={ProgramInvitationCreatePage}
      /> */}
        {/* /organizations */}
        <AuthenticatedRoute
          exact
          path={`${dashboardPath}/organizations`}
          component={UserGroupListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/organizations/new`}
          component={UserGroupListPage}
        />
        <AuthenticatedRoute
          path={`${dashboardPath}/organizations/view/:userGroupId`}
          component={UserGroupViewPage}
        />
        {/* /subscriptions */}
        <AuthenticatedRoute path={`${dashboardPath}/subscriptions`} component={SubscriptionsPage} />
        {/* /notifications */}
        {/* <AuthenticatedRoute
        exact
        path="${dashboardPath}/notifications"
        component={NotificationListPage}
      /> */}
        {/* /users */}
        <AuthenticatedRoute exact path={`${dashboardPath}/users`} component={UserListPage} />
        <AuthenticatedRoute path={`${dashboardPath}/users/view/:userId`} component={UserViewPage} />
        {/* 404 */}
        <Route path={`${dashboardPath}`} component={DashboardNotFoundPage} />
      </Switch>
    );
  }

  return (
    <Switch>
      {/* Generic */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/about-organizations" component={AboutOrganizationsPage} />
      <Route path="/fitness" component={FitnessPage} />
      <Route path="/medical" component={MedicalPage} />
      <Route path="/privacy" component={PrivacyPolicyPage} />
      <Route path="/tos" component={TermsOfServicePage} />
      <Route path="/eula" component={EulaPage} />
      <Route path="/pi/:programInvitationToken" component={ProgramInvitationPage} />
      <Route path="/ci/:clientProfileInvitationToken" component={ClientProfileInvitationPage} />
      {/* Dashboard */}
      {/* <AuthenticatedRoute exact path="/dashboard/test" component={TestPage} /> */}
      <AuthenticatedRoute exact path={`${dashboardPath}`} component={HomePage} />
      <UnauthenticatedRoute path={`${dashboardPath}/login`} component={LoginPage} />
      <UnauthenticatedRoute path={`${dashboardPath}/signup`} component={SignupPage} />
      <UnauthenticatedRoute
        path={`${dashboardPath}/request-password-reset`}
        component={RequestPasswordResetPage}
      />
      <UnauthenticatedRoute
        path={`${dashboardPath}/reset-password`}
        component={ResetPasswordPage}
      />
      <AuthenticatedRoute path={`${dashboardPath}/profile`} component={ProfilePage} />
      {/* /programs */}
      <AuthenticatedRoute exact path={`${dashboardPath}/programs`} component={ProgramListPage} />
      <AuthenticatedRoute
        exact
        path="/dashboard/myprograms"
        component={(param) => <ProgramListPage {...param} showUserPrograms />}
      />
      <AuthenticatedRoute path="/dashboard/programs/new" component={ProgramListPage} />
      <AuthenticatedRoute
        exact
        path="/dashboard/myprograms/new"
        component={(param) => <ProgramListPage {...param} showUserPrograms />}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/programs/view/:programId`}
        component={ProgramViewPage}
      />
      {/* /modules */}
      <AuthenticatedRoute
        exact
        path={`${dashboardPath}/modules`}
        component={ProgramModuleListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/modules/create`}
        component={ProgramModuleListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/modules/add-to-program`}
        component={ProgramModuleListPage}
      />
      <AuthenticatedRoute
        exact
        path={`${dashboardPath}/modules/:tagId`}
        component={ProgramModuleListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/modules/:tagId/create`}
        component={ProgramModuleListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/modules/:tagId/add-to-program`}
        component={ProgramModuleListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/modules/view/:programModuleId`}
        component={ProgramModuleViewPage}
      />
      {/* /tracks */}
      <AuthenticatedRoute
        path={`${dashboardPath}/tracks/view/:programTrackId`}
        component={ProgramTrackViewPage}
      />
      {/* /clients */}
      <AuthenticatedRoute
        exact
        path={`${dashboardPath}/clients`}
        component={ClientProfileListPage}
      />
      <AuthenticatedRoute path={`${dashboardPath}/clients/new`} component={ClientProfileListPage} />
      <AuthenticatedRoute
        path={`${dashboardPath}/clients/view/:clientProfileId/programs/view/:programId`}
        component={ProgramViewPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/clients/view/:clientProfileId/tracks/view/:programTrackId`}
        component={ProgramTrackViewPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/clients/view/:clientProfileId`}
        component={ClientProfileViewPage}
      />
      {/* /chat */}
      <AuthenticatedRoute path={`${dashboardPath}/chat/:chatChannelId`} component={ChatPage} />
      <AuthenticatedRoute path={`${dashboardPath}/chat`} component={ChatPage} />
      {/* /help */}
      <AuthenticatedRoute exact path={`${dashboardPath}/help`} component={DashboardHelpPage} />
      {/* /program-invitations */}
      {/* <AuthenticatedRoute
        exact
        path={`${dashboardPath}/program-invitations`}
        component={ProgramInvitationListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/program-invitations/view/:programInvitationId`}
        component={ProgramInvitationViewPage}
      /> */}
      {/* <AuthenticatedRoute
        path={`${dashboardPath}/program-invitations/create`}
        component={ProgramInvitationCreatePage}
      /> */}
      {/* /organizations */}
      <AuthenticatedRoute
        exact
        path={`${dashboardPath}/organizations`}
        component={UserGroupListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/organizations/new`}
        component={UserGroupListPage}
      />
      <AuthenticatedRoute
        path={`${dashboardPath}/organizations/view/:userGroupId`}
        component={UserGroupViewPage}
      />
      {/* /subscriptions */}
      <AuthenticatedRoute path={`${dashboardPath}/subscriptions`} component={SubscriptionsPage} />
      {/* /notifications */}
      {/* <AuthenticatedRoute
        exact
        path="${dashboardPath}/notifications"
        component={NotificationListPage}
      /> */}
      {/* /users */}
      <AuthenticatedRoute exact path={`${dashboardPath}/users`} component={UserListPage} />
      <AuthenticatedRoute path={`${dashboardPath}/users/view/:userId`} component={UserViewPage} />
      {/* 404 */}
      <Route path={`${dashboardPath}`} component={DashboardNotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
