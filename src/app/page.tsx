import { AttendeeList } from '@/components/attendee-list'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1266px] flex-col gap-5 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
