import CabinsCard from "@/app/_components/cabins/CabinsCard";
import CabinsLists from "@/app/_components/cabins/CabinsLists";
import NewCabinForm from "@/app/_components/cabins/NewCabinForm";
import { addCabinsOnReload, getCabins } from "@/app/_lib/data/data-service";

const CABINS_HEADER = ["", "cabin", "quantity", "price", "discount", ""];

async function Cabins() {
  const cabins = await getCabins();
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
      <button className="btn positive mt-4">Add new cabin</button>

      {/* <NewCabinForm /> */}
    </div>
  );
}

export default Cabins;
