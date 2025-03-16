import Image from "next/image";
import { FaMagnifyingGlass, FaRegBookmark } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      {/* The Navbar section */}
      <div className="bg-white border-b-2 border-borderc py-5 sticky top-0">
        <div className="w-9/12 mx-auto flex items-end justify-between">
          <div className="font-title mr-5 text-2xl">UP-Search</div>
          <ul className="font-general flex text-darktext h-min gap-5">
            <li className="">Research Materials</li>
            <li className="">Writers</li>
            <li>Bookmarks</li>
          </ul>
        </div>
      </div>

      {/* The body content here */}
      <div className="min-h-screen bg-grey pb-10">
        <div className="flex w-9/12 mx-auto gap-2 pt-5">
          <div className="bg-white p-3 border border-borderc rounded-xl flex items-center w-8/12 gap-2">
            <FaMagnifyingGlass className="text-lightext" />
            <input
              type="text"
              placeholder="Search research paper..."
              className="w-full outline-0 border-0 font-semibold"
            />
          </div>
          <div className="bg-white p-3 rounded-xl border border-borderc w-2/12">
            <select
              name="All Categories"
              id=""
              className="outline-0 font-semibold w-full"
            >
              <option value="Science">Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="History">History</option>
            </select>
          </div>
          <div className="bg-white p-3 rounded-xl border border-borderc w-2/12 font-semibold">
            Filters
          </div>
        </div>

        {/* cards section  */}
        <div className="w-9/12 mx-auto grid grid-cols-3 gap-4 mt-5">
          {/* card 1 */}
          <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
            <div className="flex justify-between">
              <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                Computer Science
              </div>
              <FaRegBookmark />
            </div>
            <div className="font-semibold text-xl ">
              Machine Learning Approach in Climate Change Prediction
            </div>
            <div className="text-darktext font-semibold">
              An analysis of various machine learning techniques applied to
              climate data for accurate prediction model...
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-darktext flex items-center">
                <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
                  DS
                </div>
                Dr. Sarah Chen
              </div>
              <div className="font-semibold text-lightext">Jan 15, 2025</div>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
            <div className="flex justify-between">
              <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                Computer Science
              </div>
              <FaRegBookmark />
            </div>
            <div className="font-semibold text-xl ">
              Machine Learning Approach in Climate Change Prediction
            </div>
            <div className="text-darktext font-semibold">
              An analysis of various machine learning techniques applied to
              climate data for accurate prediction model...
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-darktext flex items-center">
                <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
                  DS
                </div>
                Dr. Sarah Chen
              </div>
              <div className="font-semibold text-lightext">Jan 15, 2025</div>
            </div>
          </div>

          {/* card 3 */}
          <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
            <div className="flex justify-between">
              <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                Computer Science
              </div>
              <FaRegBookmark />
            </div>
            <div className="font-semibold text-xl ">
              Machine Learning Approach in Climate Change Prediction
            </div>
            <div className="text-darktext font-semibold">
              An analysis of various machine learning techniques applied to
              climate data for accurate prediction model...
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-darktext flex items-center">
                <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
                  DS
                </div>
                Dr. Sarah Chen
              </div>
              <div className="font-semibold text-lightext">Jan 15, 2025</div>
            </div>
          </div>

          {/* card 1 */}
          <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
            <div className="flex justify-between">
              <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                Computer Science
              </div>
              <FaRegBookmark />
            </div>
            <div className="font-semibold text-xl ">
              Machine Learning Approach in Climate Change Prediction
            </div>
            <div className="text-darktext font-semibold">
              An analysis of various machine learning techniques applied to
              climate data for accurate prediction model...
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-darktext flex items-center">
                <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
                  DS
                </div>
                Dr. Sarah Chen
              </div>
              <div className="font-semibold text-lightext">Jan 15, 2025</div>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
            <div className="flex justify-between">
              <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                Computer Science
              </div>
              <FaRegBookmark />
            </div>
            <div className="font-semibold text-xl ">
              Machine Learning Approach in Climate Change Prediction
            </div>
            <div className="text-darktext font-semibold">
              An analysis of various machine learning techniques applied to
              climate data for accurate prediction model...
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-darktext flex items-center">
                <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
                  DS
                </div>
                Dr. Sarah Chen
              </div>
              <div className="font-semibold text-lightext">Jan 15, 2025</div>
            </div>
          </div>

          {/* card 3 */}
          <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
            <div className="flex justify-between">
              <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                Computer Science
              </div>
              <FaRegBookmark />
            </div>
            <div className="font-semibold text-xl ">
              Machine Learning Approach in Climate Change Prediction
            </div>
            <div className="text-darktext font-semibold">
              An analysis of various machine learning techniques applied to
              climate data for accurate prediction model...
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-darktext flex items-center">
                <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
                  DS
                </div>
                Dr. Sarah Chen
              </div>
              <div className="font-semibold text-lightext">Jan 15, 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Article cards here */}
    </div>
  );
}
