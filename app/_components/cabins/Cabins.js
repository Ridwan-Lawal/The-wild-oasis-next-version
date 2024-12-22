import CabinDeleteModal from "@/app/_components/cabins/CabinDeleteModal";
import CabinsCard from "@/app/_components/cabins/CabinsCard";
import CabinsLists from "@/app/_components/cabins/CabinsLists";
import NewCabinBtn from "@/app/_components/cabins/NewCabinBtn";
import NewCabinForm from "@/app/_components/cabins/NewCabinForm";
import { addCabinsOnReload, getCabins } from "@/app/_lib/data/data-service";

const CABINS_HEADER = ["", "cabin", "quantity", "price", "discount", ""];

async function Cabins({ filterType }) {
  const cabins = await getCabins(filterType);
  return (
    <div>
      <div className="cabins-list table mt-8">
        {/* list header */}
        <div className="header  py-4">
          {CABINS_HEADER.map((header, i) => (
            <p key={i} className="uppercase text-[15px]">
              {header}
            </p>
          ))}
        </div>

        {/* cabins list */}
        <CabinsLists cabins={cabins} />
      </div>
      <NewCabinBtn />

      <NewCabinForm />
    </div>
  );
}

export default Cabins;
