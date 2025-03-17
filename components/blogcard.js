import React from "react";
import { FaMagnifyingGlass, FaRegBookmark } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
  function truncateText(text) {
    const maxLength = 277;
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + "...";
  }

  console.log(blog);
  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-xl border border-borderc">
      <div className="flex justify-between">
        <div className="text-blue bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold">
          {blog.fields.categories[0]}
        </div>
        <FaRegBookmark />
      </div>
      <div className="font-semibold text-xl ">{blog.fields.title}</div>
      <div className="text-darktext font-semibold">
        {truncateText(blog.fields.summary)}
      </div>
      <div className="flex justify-between items-center">
        <div className="font-semibold text-darktext flex items-center">
          <div className="bg-amber-100 h-10 w-10 rounded-full flex justify-center items-center mr-2">
            DS
          </div>
          Dr. Sarah Chen
        </div>
        <div className="font-semibold text-lightext">
          {blog.fields.dateCreated}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
