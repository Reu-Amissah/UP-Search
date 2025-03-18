import React from "react";
import { client } from "../../utils/contentful";
import Header from "@/components/header";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";


import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const options = {
    renderMark: {
    [MARKS.HEADING_2]: (text) => <>{text}</>
    },
  renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="font-semibold text-xl">{children}</h2>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
},
};

const RichTextContent = ({ content }) => {
    if (!content) {
        console.warn("RichTextContent received undefined or null content");
        return <p>No content available</p>;
    }
    return <div>{documentToReactComponents(content)}</div>;
};

export default async function Blog({ params }) {
    const { blog } = await params;
    
    const response = await client.getEntries({
        content_type: "blogPage",
        "fields.slug[in]": blog,
    });
    
    const data = response.items[0].fields;
    console.log("Description data:", typeof(data.description));
    
    const document = await richTextFromMarkdown(data.description);


  return (
    <div>
      <Header></Header>
      <div className="min-h-screen bg-grey pb-10">
        <div className="flex flex-col w-6/12 mx-auto gap-2 pt-10 font-general">
          <div className="flex items-center">
            <div className="bg-amber-100 h-14 w-14 rounded-full flex justify-center items-center mr-2">
              DS
            </div>
            <div className="">
              <div className="font-bold text-lg">
                {data.authorRef[0].fields.fullName}
              </div>
              <div className="font-medium text-sm">{data.dateCreated}</div>
            </div>
          </div>
          <div className="pt-3">
            <div className="font-semibold text-3xl">{data.title}</div>
            <div className="flex gap-3 pt-2">
              {data.tags?.map((tag) => (
                <div
                  className="text-sm px-3 py-1 bg-white w-fit rounded-full h-fit font-semibold text-darktext"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="pt-5"><RichTextContent content={document}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
