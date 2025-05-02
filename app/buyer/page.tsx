import BuyerTable from "@/components/BuyerTable";

const buyerData = [{ content: "영방5강 아잠 40 그외 50", nickname: "이뚜둘" }];

const Buyer = () => {
  return <BuyerTable data={buyerData} />;
};

export default Buyer;
