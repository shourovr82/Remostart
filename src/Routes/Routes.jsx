import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Roots/Root';

import AddBlogs from '../AdminPages/AddBlog';
import AdminDashboard from '../AdminPages/AdminDashboard';
import AdminRoot from '../AdminPages/AdminRoot';
import AllBlogsList from '../AdminPages/AllBlogsList';
import UpdateBlog from '../AdminPages/UpdateBlog';
import AllBlogs from '../Pages/Blogs/AllBlogs';
import BlogDetails from '../Pages/Blogs/BlogDetails';
import Blogs from '../Pages/Blogs/Blogs';
import CategorizedBlogs from '../Pages/Blogs/CategorizedBlogs';
import ErrorPage from '../Pages/CommonPages/ErrorPage';
import TermsAndCondition from '../Pages/CommonPages/TermsAndCondition';
import LandingPage from '../Pages/LandingPage/LandingPage';
import LoginPage from '../Pages/LoginAndSignup/LoginPage';
import RegistrationPage from '../Pages/LoginAndSignup/RegistrationPage';
import RemoForceShadowing from '../Pages/RemoForce/RemoForceShadowing';
import RemoForceDashboard from '../Pages/RemoForceDashBoard/RemoForceDashboard/RemoForceDashboard';
import ApplyJob from '../Pages/RemoForceDashBoard/RemoforceJobs/ApplyJob';
import ApplyCategoryJob from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/ApplyCategoryJob';
import RemoforceContracts from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/RemoforceContracts';
import RemoforceGigs from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/RemoforceGigs';
import RemoforceInternship from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/RemoforceInternship';
import RemoforcePrivateJobs from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/RemoforcePrivateJobs';
import RemoforcePublicJobs from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/RemoforcePublicJobs';
import RemoforceShadowing from '../Pages/RemoForceDashBoard/RemoforceJobs/JobCategoryPages/RemoforceShadowing';
import RemoForceDashBoard from '../Pages/RemoForceDashBoard/RemoforceJobs/RemoForceDashBoard';
import RemoForceMyJob from '../Pages/RemoForceDashBoard/RemoForceMyJob/RemoForceMyJob';
import RemoForceProfile from '../Pages/RemoForceDashBoard/RemoForceProfile/RemoForceProfile';
import RemoforceSettings from '../Pages/RemoForceDashBoard/RemoForceSetting/RemoForceSettings';
import AccountSettings from '../Pages/RemoForceDashBoard/RemoForceSettings/AccountManagementSettings/AccountSettings';
import AddEducation from '../Pages/RemoForceDashBoard/RemoForceSettings/EducationSettings/AddEducation';
import AddProject from '../Pages/RemoForceDashBoard/RemoForceSettings/ProjectsSettings/AddProject';
import SkillAndPreferenceSettings from '../Pages/RemoForceDashBoard/RemoForceSettings/SkillAndPreferenceSettings';
import AddExperience from '../Pages/RemoForceDashBoard/RemoForceSettings/WorkExperienceSettings/AddExperience';
import RemoForceVerifyHome from '../Pages/RemoForceDashBoard/RemoForceVerify/RemoForceVerifyHome';
import ActiveJobs from '../Pages/StartupDashboard/DashboardPages/ActiveJobs';
import ClosedJobs from '../Pages/StartupDashboard/DashboardPages/ClosedJobs';
import DashBoard from '../Pages/StartupDashboard/DashboardPages/DashBoard';
import UsersAllShadowing from '../Pages/StartupDashboard/DashboardPages/UsersAllShadowing';
import ManageTeams from '../Pages/StartupDashboard/MangeTeams/ManageTeams';
import Contracts from '../Pages/StartupDashboard/PostJob/ContractsJob/Contracts';
import ContractsReview from '../Pages/StartupDashboard/PostJob/ContractsJob/ContractsReview';
import GigsJobs from '../Pages/StartupDashboard/PostJob/GigsJobs/GigsJobs';
import GigsJobsReview from '../Pages/StartupDashboard/PostJob/GigsJobs/GigsJobsReview';
import InternshipPost from '../Pages/StartupDashboard/PostJob/InternshipJob/InternshipPost';
import InternshipReview from '../Pages/StartupDashboard/PostJob/InternshipJob/InternshipReview';
import PostJob from '../Pages/StartupDashboard/PostJob/PostJob';
import PrivateJob from '../Pages/StartupDashboard/PostJob/PrivateJob/PrivateJob';
import PrivateJobReview from '../Pages/StartupDashboard/PostJob/PrivateJob/PrivateJobReview';
import PublicJob from '../Pages/StartupDashboard/PostJob/PublicJob/PublicJob';
import PublicJobReview from '../Pages/StartupDashboard/PostJob/PublicJob/PublicJobReview';
import ShadowingJob from '../Pages/StartupDashboard/PostJob/ShadowingJobs/ShadowingJob';
import ShadowingJobReview from '../Pages/StartupDashboard/PostJob/ShadowingJobs/ShadowingJobReview';
import Profile from '../Pages/StartupDashboard/Profile';
import ReviewsAndRatings from '../Pages/StartupDashboard/ReviewsAndRatings';
import Settings from '../Pages/StartupDashboard/Settings/Settings';
import SettingsGeneral from '../Pages/StartupDashboard/Settings/SettingsGeneral';
import GeneralSettingsVerification from '../Pages/StartupDashboard/Settings/SettingsGeneral/GeneralSettingsVerification';
import SettingsProfile from '../Pages/StartupDashboard/Settings/SettingsProfile';
import StartupRemoProfile from '../Pages/StartupDashboard/TalentRequest/StartupsRemoProfile';
import TalentRequestHistory from '../Pages/StartupDashboard/TalentRequest/TalentHistory/TalentRequestHistory';
import TalentRequest from '../Pages/StartupDashboard/TalentRequest/TalentRequest';
import StartupHome from '../Pages/StartupPages/StartupHome';
import StartupSignUp from '../Pages/StartupPages/StartupSignUp';
import StartupWelcomePage from '../Pages/StartupPages/StartupWelcomePage';
import RemoForceHome from '../Pages/UserPages/RemoForceHome';
import AdminRoute from './AdminRoute';
import ProtectedRoute from './ProtectedRoute';
import RemoForceRoute from './RemoforceRoute';
import RemoProfileRoute from './RemoProfileRoute';
import DashboardHome from './Roots/DashboardHome';
import RemoForceDashboardRoot from './Roots/RemoForceDashBoardRoot';
import StartupRoute from './StartupRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<LandingPage />} />

      {/* start up routes */}

      <Route path="/startup" element={<StartupHome />} />
      <Route path="/remowelcome" element={<StartupWelcomePage />} />
      <Route path="/startup-signup" element={<StartupSignUp />} />

      {/* startup dashboard route(startup routes) */}

      <Route
        path="/dashboard"
        element={
          <StartupRoute>
            <DashboardHome />
          </StartupRoute>
        }
        errorElement={<ErrorPage />}
      >
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/home" element={<DashBoard />} />
        <Route path="/dashboard/reviews" element={<ReviewsAndRatings />} />
        <Route path="/dashboard/talent-request" element={<TalentRequest />} />

        <Route path="/dashboard/manage-teams" element={<ManageTeams />} />
        <Route path="/dashboard/all-jobs" element={<DashBoard />} />
        <Route path="/dashboard/active-jobs" element={<ActiveJobs />} />
        <Route path="/dashboard/closed-jobs" element={<ClosedJobs />} />
        <Route path="/dashboard/closed-jobs" element={<ClosedJobs />} />
        <Route path="/dashboard/users-shadowing" element={<UsersAllShadowing />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        {/* settings route */}
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/settings/profile" element={<SettingsProfile />} />
        <Route path="/dashboard/settings/general" element={<SettingsGeneral />} />
        <Route path="/dashboard/settings/verification" element={<GeneralSettingsVerification />} />

        {/* post job route */}
        <Route path="/dashboard/post-job" element={<PostJob />} />
        {/* public job */}
        <Route path="/dashboard/post-job/public-job" element={<PublicJob />} />
        <Route path="/dashboard/post-job/public-job/review" element={<PublicJobReview />} />

        <Route path="/dashboard/public/:id" element={<PublicJobReview />} />

        {/* private job */}
        <Route path="/dashboard/post-job/private-job" element={<PrivateJob />} />
        <Route path="/dashboard/post-job/private-job/review" element={<PrivateJobReview />} />
        <Route path="/dashboard/private/:id" element={<PrivateJobReview />} />
        {/* internship */}
        <Route path="/dashboard/post-job/internship" element={<InternshipPost />} />
        <Route path="/dashboard/post-job/internship/review" element={<InternshipReview />} />

        <Route path="/dashboard/internship/:id" element={<InternshipReview />} />

        {/* Gigs post job */}
        <Route path="/dashboard/post-job/gigs" element={<GigsJobs />} />
        <Route path="/dashboard/post-job/gigs/review" element={<GigsJobsReview />} />
        <Route path="/dashboard/gigs/:id" element={<GigsJobsReview />} />
        {/* shadowing post job */}
        <Route path="/dashboard/post-job/shadowing" element={<ShadowingJob />} />
        <Route path="/dashboard/post-job/shadowing-job/review" element={<ShadowingJobReview />} />
        <Route path="/dashboard/shadowing/:id" element={<ShadowingJobReview />} />
        {/* Contracts */}
        <Route path="/dashboard/post-job/contracts" element={<Contracts />} />
        <Route path="/dashboard/post-job/edit/contracts" element={<Contracts />} />
        <Route path="/dashboard/post-job/contracts/review" element={<ContractsReview />} />
        <Route path="/dashboard/contracts/:id" element={<ContractsReview />} />
        {/* view application */}
        {/* Talents Request history  */}
      </Route>
      <Route path="/talent-request-history" element={<TalentRequestHistory />} />
      <Route
        path="/remoforce/profile/:email"
        element={
          <RemoProfileRoute>
            <StartupRemoProfile />
          </RemoProfileRoute>
        }
      />

      {/* remoforce routes */}

      <Route path="/remoforce" element={<RemoForceHome />} />
      {/* remoforce verify */}

      <Route path="/remoforce/verify" element={<RemoForceVerifyHome />} />

      {/* Remoforce Dashboard */}
      <Route
        path="/remoforce-dashboard"
        element={
          <RemoForceRoute>
            <RemoForceDashboardRoot />
          </RemoForceRoute>
        }
        errorElement={<ErrorPage />}
      >
        <Route path="/remoforce-dashboard" element={<RemoForceDashBoard />} />
        {/* Remoforce Dashboard profile */}
        <Route path="/remoforce-dashboard/profile" element={<RemoForceProfile />} />
        {/* Remoforce Dashboard my job */}
        <Route path="/remoforce-dashboard/my_job" element={<RemoForceMyJob />} />
        {/* Remoforce Dashboard verify */}
        {/* <Route path="/remoforce-dashboard/verify" element={<RemoForceVerifyHome />} /> */}
        {/* Remoforce Dashboard dashboard */}
        <Route path="/remoforce-dashboard/dashboard" element={<RemoForceDashboard />} />
        {/* Remoforce Dashboard settings */}
        <Route path="/remoforce-dashboard/setting" element={<RemoForceMyJob />} />
        {/* Remoforce Dashboard shadowing */}
        <Route path="/remoforce-dashboard/shadowing" element={<RemoForceShadowing />} />
        {/* <Route path="/remoforce/shadowing" element={<RemoForceShadowing />} /> */}
        {/* Remoforce Dashboard job pages */}
        <Route path="/remoforce-dashboard/all-jobs" element={<RemoForceDashBoard />} />
        <Route path="/remoforce-dashboard/shadowing-jobs" element={<RemoforceShadowing />} />
        <Route path="/remoforce-dashboard/public-jobs" element={<RemoforcePublicJobs />} />
        <Route path="/remoforce-dashboard/private-jobs" element={<RemoforcePrivateJobs />} />
        <Route path="/remoforce-dashboard/internship" element={<RemoforceInternship />} />
        <Route path="/remoforce-dashboard/gigs" element={<RemoforceGigs />} />
        <Route path="/remoforce-dashboard/contracts" element={<RemoforceContracts />} />
        <Route path="/remoforce-dashboard/all-jobs/:id" element={<ApplyJob />} />
        <Route path="/remoforce-dashboard/category-jobs/:id" element={<ApplyCategoryJob />} />
        {/* Remoforce Settings route */}
        <Route path="/remoforce-dashboard/settings" element={<RemoforceSettings />} />
        <Route
          path="/remoforce-dashboard/skill-preference"
          element={<SkillAndPreferenceSettings />}
        />
        <Route path="/remoforce-dashboard/add-education" element={<AddEducation />} />
        <Route path="/remoforce-dashboard/add-work-experience" element={<AddExperience />} />
        <Route path="/remoforce-dashboard/account-settings" element={<AccountSettings />} />
        <Route path="/remoforce-dashboard/add-project" element={<AddProject />} />
      </Route>

      {/* blog routes */}

      <Route path="/blog" element={<Blogs />}>
        <Route path="/blog" element={<AllBlogs />} />
        <Route
          path="blog/category/:id"
          element={<CategorizedBlogs />}
          loader={async ({ params }) =>
            fetch(`${process.env.REACT_APP_URL}/category-blogs/${params.id}`)
          }
        />
      </Route>

      <Route
        path="/blog-details/:id"
        element={
          <ProtectedRoute>
            <BlogDetails />
          </ProtectedRoute>
        }
      />
      {/* Admin routes */}
      <Route
        path="/admin-dashboard"
        element={
          <AdminRoute>
            <AdminRoot />
          </AdminRoute>
        }
        errorElement={<ErrorPage />}
      >
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin-dashboard/all-blogs" element={<AllBlogsList />} />
        <Route path="/admin-dashboard/all-blogs/edit/:id" element={<UpdateBlog />} />
        <Route path="/admin-dashboard/add-blogs" element={<AddBlogs />} />
        {/* <Route
                    path="/dashboard/make-admin"
                    element={
                        <AdminRoute>
                            <MakeAdmin/>
                        </AdminRoute>
                    }
                /> */}
      </Route>

      <Route path="/Signup" element={<RegistrationPage />} />
      <Route path="/terms" element={<TermsAndCondition />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

export default router;
