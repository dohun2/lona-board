"use client";

import { useEffect } from "react";

const huntingGrounds = [
  { name: "붉은 억새 평원", note: "전체", type: "field", control: false },
  { name: "바르바스", note: "전체", type: "field", control: false },
  {
    name: "티리오사의 무덤 지하 1층",
    note: "전체",
    type: "dungeon",
    control: false,
  },
  {
    name: "티리오사의 무덤 지하 2층",
    note: "전체",
    type: "dungeon",
    control: false,
  },
  {
    name: "티리오사의 무덤 지하 3층",
    note: "전체",
    type: "dungeon",
    control: true,
  },
  {
    name: "죽은 자의 대지 1구역",
    note: "전체",
    type: "dungeon",
    control: false,
  },
  {
    name: "죽은 자의 대지 2구역",
    note: "전체",
    type: "dungeon",
    control: true,
  },
  {
    name: "죽은 자의 대지 3구역",
    note: "전체",
    type: "dungeon",
    control: true,
  },
  {
    name: "드라카스 화산",
    note: "전체",
    type: "dungeon",
    control: false,
  },
  {
    name: "월드 던전",
    note: "전체",
    type: "dungeon",
    control: false,
  },
  {
    name: "월드",
    note: "클릭해서 범위,시간 확인",
    type: "dungeon",
    control: true,
    url: "https://page.onstove.com/l9/global/view/10610805?boardKey=128093",
  },
];

const requestPermission = async () => {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications.");
    return;
  }

  const permission = Notification.permission;
  if (permission === "granted") {
    return;
  }

  try {
    const result = await Notification.requestPermission();
    console.log("Notification permission:", result);
  } catch (error) {
    console.error("Failed to get notification permission:", error);
  }
};

const HuntingGroundList = () => {
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div className=' bg-black  p-0 flex flex-col'>
      <div className='flex-1 overflow-y-auto m-1 pb-16 pt-18'>
        {huntingGrounds.map((item) => (
          <div
            key={item.name}
            className={`flex items-center px-4 py-2 mb-2 rounded-md transition bg-[#2e2e2e]/80`}
          >
            <span className='text-lg mr-3'>
              {item.type === "dungeon" ? "🪦" : "⚔️"}
            </span>
            <div className='flex flex-col flex-1'>
              <span className='text-white font-semibold text-sm'>
                {item.name}
              </span>
              {item.url ? (
                <a
                  href={item.url}
                  target='_blank'
                  className='text-gray-300 text-xs'
                >
                  {item.note}
                </a>
              ) : (
                <span className='text-gray-300 text-xs'>{item.note}</span>
              )}
            </div>
            {item.control && (
              <span className='ml-2 text-red-500 text-base'>통제</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HuntingGroundList;
