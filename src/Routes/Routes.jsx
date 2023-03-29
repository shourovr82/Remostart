import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Roots/Root';

import AllBlogs from '../Pages/Blogs/AllBlogs';
import BlogDetails from '../Pages/Blogs/BlogDetails';
import Blogs from '../Pages/Blogs/Blogs';
import CategorizedBlogs from '../Pages/Blogs/CategorizedBlogs';
import ErrorPage from '../Pages/CommonPages/ErrorPage';
import LandingPage from '../Pages/LandingPage/LandingPage';
import LoginPage from '../Pages/LoginAndSignup/LoginPage';
import RegistrationPage from '../Pages/LoginAndSignup/RegistrationPage';

import ActiveJobs from '../Pages/StartupDashboard/DashboardPages/ActiveJobs';
import DashBoard from '../Pages/StartupDashboard/DashboardPages/DashBoard';
import PostJob from '../Pages/StartupDashboard/PostJob/PostJob';

import InternshipPost from '../Pages/StartupDashboard/PostJob/InternshipJob/InternshipPost';

import AddBlogs from '../AdminPages/AddBlog';
import AdminDashboard from '../AdminPages/AdminDashboard';
import AdminRoot from '../AdminPages/AdminRoot';
import AllBlogsList from '../AdminPages/AlllBlogsList';
import UpdateBlog from '../AdminPages/UpdateBlog';
import TermsAndCondition from '../Pages/CommonPages/TermsAndCondition';
import RemoForceShadowing from '../Pages/RemoForce/RemoForceShadowing';
import ApplyJob from '../Pages/RemoForceDashBoard/AllJobs/ApplyJob';
import RemoForceDashBoard from '../Pages/RemoForceDashBoard/AllJobs/RemoForceDashBoard';
import RemoForceDashboard from '../Pages/RemoForceDashBoard/RemoForceDashboard/RemoForceDashboard';
import RemoForceMyJob from '../Pages/RemoForceDashBoard/RemoForceMyJob/RemoForceMyJob';
import RemoForceProfile from '../Pages/RemoForceDashBoard/RemoForceProfile/RemoForceProfile';
import RemoforceSettings from '../Pages/RemoForceDashBoard/RemoForceSetting/RemoForceSettings';
import AccountSettings from '../Pages/RemoForceDashBoard/RemoForceSettings/AccountManagementSettings/AccountSettings';
import AddEducation from '../Pages/RemoForceDashBoard/RemoForceSettings/EducationSettings/AddEducation';
import SkillAndPreferenceSettings from '../Pages/RemoForceDashBoard/RemoForceSettings/SkillAndPreferenceSettings';
import AddExperience from '../Pages/RemoForceDashBoard/RemoForceSettings/WorkExperienceSettings/AddExperience';
import RemoForceVerify from '../Pages/RemoForceDashBoard/RemoForceVerify/RemoForceVerify';
import ManageTeams from '../Pages/StartupDashboard/MangeTeams/ManageTeams';
import Contracts from '../Pages/StartupDashboard/PostJob/ContractsJob/Contracts';
import ContractsReview from '../Pages/StartupDashboard/PostJob/ContractsJob/ContractsReview';
import GigsJobs from '../Pages/StartupDashboard/PostJob/GigsJobs/GigsJobs';
import GigsJobsReview from '../Pages/StartupDashboard/PostJob/GigsJobs/GigsJobsReview';
import InternshipReview from '../Pages/StartupDashboard/PostJob/InternshipJob/InternshipReview';
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
import TalentRequest from '../Pages/StartupDashboard/TalentRequest';
import StartupHome from '../Pages/StartupPages/StartupHome';
import StartupSignUp from '../Pages/StartupPages/StartupSignUp';
import StartupWelcomePage from '../Pages/StartupPages/StartupWelcomePage';
import RemoForceHome from '../Pages/UserPages/RemoForceHome';
import AdminRoute from './AdminRoute';
import ProtectedRoute from './ProtectedRoute';
import RemoForceRoute from './RemoforceRoute';
import DashboardHome from './Roots/DashboardHome';
import RemoForceDashboardRoot from './Roots/RemoForceDashBoardRoot';
import StartupRoute from './StartupRoute';
import AddProject from '../Pages/RemoForceDashBoard/RemoForceSettings/ProjectsSettings/AddProject';

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
                <Route path="/dashboard/active_jobs" element={<ActiveJobs />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                {/* settings route */}
                <Route path="/dashboard/settings" element={<Settings />} />
                <Route path="/dashboard/settings/profile" element={<SettingsProfile />} />
                <Route path="/dashboard/settings/general" element={<SettingsGeneral />} />
                <Route
                    path="/dashboard/settings/verification"
                    element={<GeneralSettingsVerification />}
                />

                {/* post job route */}
                <Route path="/dashboard/post-job" element={<PostJob />} />
                {/* public job */}
                <Route path="/dashboard/post-job/public-job" element={<PublicJob />} />
                <Route path="/dashboard/post-job/public-job/review" element={<PublicJobReview />} />

                <Route path="/dashboard/public/:id" element={<PublicJobReview />} />

                {/* private job */}
                <Route path="/dashboard/post-job/private-job" element={<PrivateJob />} />
                <Route
                    path="/dashboard/post-job/private-job/review"
                    element={<PrivateJobReview />}
                />
                <Route path="/dashboard/private/:id" element={<PrivateJobReview />} />
                {/* internship */}
                <Route path="/dashboard/post-job/internship" element={<InternshipPost />} />
                <Route
                    path="/dashboard/post-job/internship/review"
                    element={<InternshipReview />}
                />

                <Route path="/dashboard/internship/:id" element={<InternshipReview />} />

                {/* Gigs post job */}
                <Route path="/dashboard/post-job/gigs" element={<GigsJobs />} />
                <Route path="/dashboard/post-job/gigs/review" element={<GigsJobsReview />} />
                {/* shadowing post job */}
                <Route path="/dashboard/post-job/shadowing" element={<ShadowingJob />} />
                <Route
                    path="/dashboard/post-job/shadowing-job/review"
                    element={<ShadowingJobReview />}
                />

                {/* Contracts */}
                <Route path="/dashboard/post-job/contracts" element={<Contracts />} />
                <Route path="/dashboard/post-job/contracts/review" element={<ContractsReview />} />

                {/* view application */}
            </Route>

            {/* remoforce routes */}

            <Route path="/remoforce" element={<RemoForceHome />} />
            {/* remoforce shadowing */}
            <Route path="/remoforce/shadowing" element={<RemoForceShadowing />} />
            {/* remoforce shadowing ---------------*/}
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
                <Route path="/remoforce-dashboard/profile" element={<RemoForceProfile />} />
                <Route path="/remoforce-dashboard/my_job" element={<RemoForceMyJob />} />
                <Route path="/remoforce-dashboard/verify" element={<RemoForceVerify />} />
                <Route path="/remoforce-dashboard/dashboard" element={<RemoForceDashboard />} />
                <Route path="/remoforce-dashboard/setting" element={<RemoForceMyJob />} />
                <Route path="/remoforce-dashboard/shadowing" element={<RemoForceMyJob />} />
                <Route path="/remoforce-dashboard/all-jobs" element={<RemoForceDashBoard />} />
                <Route path="/remoforce-dashboard/all-jobs/:id" element={<ApplyJob />} />
                {/* Remoforce Settings route */}
                <Route path="/remoforce-dashboard/settings" element={<RemoforceSettings />} />
                <Route
                    path="/remoforce-dashboard/skill-preference"
                    element={<SkillAndPreferenceSettings />}
                />
                <Route path="/remoforce-dashboard/add-education" element={<AddEducation />} />
                <Route
                    path="/remoforce-dashboard/add-work-experience"
                    element={<AddExperience />}
                />
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
