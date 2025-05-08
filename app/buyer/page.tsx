import BuyerTable from "@/components/BuyerTable";
import { BUYER_LIST } from "../constant";

const Buyer = () => {
  return <BuyerTable data={BUYER_LIST} />;
};

export default Buyer;
