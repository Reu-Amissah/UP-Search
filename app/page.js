import Image from "next/image";
import { FaMagnifyingGlass, FaRegBookmark } from "react-icons/fa6";
import { client } from "../utils/contentful";
import BlogCard from "@/components/blogcard";
import Header from "@/components/header";

export default async function Home() {
  const response = await client.getEntries({ content_type: "blogPage" }); //get request
    const data = response.items;

  return (
    <div>
      {/* The Navbar section */}
      <Header></Header>

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
