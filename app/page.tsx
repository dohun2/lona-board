const huntingGrounds = [
  { name: "붉은 억새 평원", note: "전체", type: "field", control: false },
  { name: "바르바스", note: "전체", type: "field", control: true },
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
    control: true,
  },
  {
    name: "월드 던전",
    note: "105렙 이상 통제",
    type: "dungeon",
    control: true,
  },
  {
    name: "월드",
    note: "클릭해서 범위,시간 확인",
    type: "dungeon",
    control: true,
  },
];

export default function Home() {
  return (
    <div className=' bg-[#212121]  p-0 flex flex-col'>
      <div className='text-[#f3e6c6] px-6 py-4 mb-2 border-b border-[#333]'>
        <span className='text-lg font-bold mr-2.5'>로나보드</span>
        <span className='text-xs'>통제·공지 통합 정보판</span>
      </div>
      <div className='flex-1 overflow-y-auto m-1'>
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
              <span className='text-gray-300 text-xs'>{item.note}</span>
            </div>
            {item.control && (
              <span className='ml-2 text-red-500 text-base'>통제</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
