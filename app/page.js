import Image from "next/image";
import { FaMagnifyingGlass, FaRegBookmark } from "react-icons/fa6";
import { client } from "../utils/contentful";
import BlogCard from "@/components/blogcard";

export default async function Home() {
  const response = await client.getEntries({ content_type: "blogPage" }); //get request
  // console.log(response.items[0].fields);

  const data = response.items;
  // console.log(data);

  // const [onFocus, setFocus] = useState(false);

  return (
    <div>
      {/* The Navbar section */}
      <div className="bg-white border-b-2 border-borderc py-5 sticky top-0">
        <div className="w-9/12 mx-auto flex items-end justify-between">
          <div className="font-title mr-5 text-2xl">UP-Search</div>
          <ul className="font-general flex text-darktext h-min gap-5">
            <li className="cursor-pointer">Research Materials</li>
            <li className="cursor-pointer">Writers</li>
            <li className="cursor-pointer">Bookmarks</li>
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
          {data.map((item) => (
            <BlogCard blog={item} key={item.sys.id}></BlogCard>
          ))}
        </div>
      </div>

      {/* Article cards here */}
    </div>
  );
}
