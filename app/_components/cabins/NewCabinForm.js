import { sono } from "@/app/_styles/font";
import { XIcon } from "lucide-react";

function NewCabinForm() {
  return (
    <div className="overlay absolute backdrop-blur-[7px] h-screen w-screen top-0  right-0 left-0 flex items-center justify-center ">
      {/* modal */}
      <form action="" className="modal">
        <p className="flex justify-end text-gray-400 cursor-pointer">
          <XIcon />
        </p>
        {/* cabin name */}
        <div className="field">
          <label htmlFor="cabin-name" className="">
            Cabin name
          </label>
          <input type="text" name="cabin-name" id="cabin-name" className="" />
        </div>

        {/* Maximum capacity */}
        <div className="field">
          <label htmlFor="maximum-capacity" className="">
            Maximum capacity
          </label>
          <input type="number" name="maximum-capacity" id="maximum-capacity" />
        </div>

        {/* Regular Price */}
        <div className="field">
          <label htmlFor="regular-price" className="">
            Regular price
          </label>
          <input type="number" name="regular-price" id="regular-price" />
        </div>

        {/* discount */}
        <div className="field">
          <label htmlFor="discount" className="">
            Discount
          </label>
          <input type="number" name="discount" id="discount" />
        </div>

        {/* description */}

        <div className="field">
          <label htmlFor="description" className="">
            Description for website
          </label>

          <textarea
            rows={3}
            cols={15}
            name="description"
            id="description"
          ></textarea>
        </div>

        {/* cabin photo */}

        <div className="field ">
          <label htmlFor="cabin-photo" className="">
            Cabin photo
          </label>

          <input
            type="file"
            name="cabin-photo"
            id="cabin-photo"
            className="file"
          />
        </div>

        <div className="flex gap-4 items-center justify-end">
          <button type="reset" className="btn neutral">
            Cancel
          </button>

          <button type="submit" className="btn positive">
            Create new cabin
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCabinForm;
