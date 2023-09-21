
import Header from '@/components/organism/Header'
import SubFooter from '@/components/organism/SubFooter'
import SupFooter from '@/components/organism/SupFooter'
import LoginPage from '@/components/pages/Auth/LoginPage/page'
import SignupPage from '@/components/pages/Auth/SignupPage/page'
import HomePage from '@/components/pages/HomePage/index'
import ProfilePage from '../components/pages/ProfilePage'
import AdditionalSections from '../components/pages/ProfilePage/AdditionalSections'
import JobPage from '../components/pages/JobPage'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <LoginPage/>
      <SignupPage/>
      <HomePage/>
      <ProfilePage/>
      <AdditionalSections/>
      <JobPage/>
       <SubFooter/>
      <SupFooter/>
    </main>
  )
}
