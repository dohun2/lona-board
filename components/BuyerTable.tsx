type BuyerTableProps = {
  data: BuyerTableItem[];
};

type BuyerTableItem = {
  content: string;
  nickname: string;
};

const BuyerTable = ({ data }: BuyerTableProps) => {
  return (
    <div className='w-full mx-auto p-3 pt-19'>
      <table className='w-full text-left bg-[#232323] rounded-lg overflow-hidden'>
        <thead>
          <tr className='bg-[#181818] text-yellow-300'>
            <th className='py-2 px-3 text-sm'>구매 아이템</th>
            <th className='py-2 px-3 text-sm'>닉네임</th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length === 0 ? (
            <tr>
              <td colSpan={2} className='text-center text-gray-400 py-6'>
                등록된 구매내역이 없습니다.
              </td>
            </tr>
          ) : (
            data.map((item: BuyerTableItem, idx: number) => (
              <tr key={idx} className='border-t border-[#333]'>
                <td className='py-2 px-3 text-white'>{item.content}</td>
                <td className='py-2 px-3 text-white'>{item.nickname}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BuyerTable;
