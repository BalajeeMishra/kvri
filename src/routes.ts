import { createBrowserRouter } from 'react-router'
import Root from './components/Root'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ProgramsPage from './pages/Programs'
import NewsPage from './pages/News'
import VolunteerPage from './pages/Volunteer'
import DonatePage from './pages/Donate'
import ContactPage from './pages/Contact'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsOfUsePage from './pages/TermsOfUse'

// Site structure mirrors kvri.in: Home, Who is KVRI, Projects, Blog, Contact
// (+ Volunteer and Donate).
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'programs', Component: ProgramsPage },
      { path: 'projects', Component: ProgramsPage },
      { path: 'news', Component: NewsPage },
      { path: 'blog', Component: NewsPage },
      { path: 'volunteer', Component: VolunteerPage },
      { path: 'donate', Component: DonatePage },
      { path: 'contact', Component: ContactPage },
      { path: 'privacy-policy', Component: PrivacyPolicyPage },
      { path: 'terms-of-use', Component: TermsOfUsePage },
      { path: '*', Component: HomePage },
    ],
  },
])
