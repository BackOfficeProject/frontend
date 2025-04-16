import React from "react";
import { Card } from "../common/Card";
import { Stats } from "../common/Stats.jsx";
import { EmployeeList } from "../employees/EmployeeList.jsx";
import {
  CalendarIcon,
  ClockIcon,
  TrendingUpIcon,
  AlertCircleIcon,
  UsersIcon,
  BriefcaseIcon,
  ClipboardCheckIcon,
  UserPlusIcon,
} from "lucide-react";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.icon
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.time
 */
function Activity({ icon, title, description, time }) {
  return (
    <div className="flex items-start">
      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.date
 * @param {string} props.participants
 */
function Event({ title, date, participants }) {
  return (
    <div className="border-l-4 border-indigo-500 pl-3 py-1">
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-xs text-gray-400">{participants}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stats
          title="총 임직원"
          value="248"
          change="+12"
          timeframe="지난달 대비"
          trend="up"
          icon={<UsersIcon size={24} className="text-indigo-600" />}
        />
        <Stats
          title="채용 진행중"
          value="12"
          change="+3"
          timeframe="지난달 대비"
          trend="up"
          icon={<BriefcaseIcon size={24} className="text-green-600" />}
        />
        <Stats
          title="휴가 신청"
          value="8"
          change="-2"
          timeframe="지난주 대비"
          trend="down"
          icon={<CalendarIcon size={24} className="text-amber-600" />}
        />
        <Stats
          title="평가 대기"
          value="16"
          change="+4"
          timeframe="지난달 대비"
          trend="up"
          icon={<ClipboardCheckIcon size={24} className="text-red-600" />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="최근 활동">
            <div className="space-y-4">
              <Activity
                icon={<UserPlusIcon size={16} className="text-green-500" />}
                title="신규 입사"
                description="김지원님이 디자인팀에 합류하였습니다"
                time="2시간 전"
              />
              <Activity
                icon={<ClockIcon size={16} className="text-amber-500" />}
                title="휴가 신청"
                description="박민수님이 3일 휴가를 신청하였습니다"
                time="4시간 전"
              />
              <Activity
                icon={<TrendingUpIcon size={16} className="text-indigo-500" />}
                title="성과 평가 완료"
                description="이서연님의 연간 평가가 완료되었습니다"
                time="어제"
              />
              <Activity
                icon={<AlertCircleIcon size={16} className="text-red-500" />}
                title="근태 알림"
                description="정현우님이 이번 주 3회 지각하였습니다"
                time="2일 전"
              />
            </div>
          </Card>
        </div>
        <div>
          <Card title="예정된 일정">
            <div className="space-y-4">
              <Event
                title="팀 미팅"
                date="오늘, 14:00"
                participants="참석자 8명"
              />
              <Event
                title="면접: UX 디자이너"
                date="내일, 10:00"
                participants="참석자 3명"
              />
              <Event
                title="분기 성과 리뷰"
                date="1월 15일, 09:00"
                participants="참석자 12명"
              />
              <Event
                title="직무 교육"
                date="1월 17일, 13:00"
                participants="참석자 24명"
              />
            </div>
          </Card>
        </div>
      </div>
      <EmployeeList />
    </div>
  );
}

export default Dashboard;
