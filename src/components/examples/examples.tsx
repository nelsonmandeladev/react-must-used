"use client";

import { useState } from "react";
import { MapRenderer } from "../map-renderer";
import { Render } from "../conditional-renderer";

interface MockDataType {
  title: string;
  id: number;
  description: string;
}

const MOCK_DATA: MockDataType[] = [
  {
    id: 1,
    title: "First",
    description: "This is the first item",
  },
  {
    id: 2,
    title: "Second",
    description: "This is the second item",
  },
  {
    id: 3,
    title: "Third",
    description: "This is the third item",
  },
  {
    id: 4,
    title: "Fourth",
    description: "This is the fourth item",
  },
  {
    id: 5,
    title: "Fifth",
    description: "This is the fifth item",
  },
];
export function DisplayExamples() {
  const [index, setIndex] = useState(1);
  return (
    <div className="w-full h-full flex justify-start items-start gap-1">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-600 font-semibold text-xl">
            Map Renderer component
          </h2>
          <p className="text-gray-500">
            This component is used to render a list of items in a grid layout.
            The component takes in a list of items and a render function that
            will be called for each item in the list. The render function should
            return a JSX element that will be rendered for each item. The main
            goal of this component is to make it easier to render a list by
            ovoiding common pitfalls like using index as key for list items or
            even miss passing the key prop to the list items.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-5 ">
          <MapRenderer<MockDataType>
            data={MOCK_DATA}
            render={(item: MockDataType) => (
              <div className="flex flex-col gap-1 bg-gray-200 mix-blend-difference p-4 rounded">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-600 font-semibold text-xl">
              Conditional Renderer component
            </h2>
            <p className="text-gray-500">
              This component is used to conditionally render JSX elements based
              on a condition. The component takes in a condition prop which
              should be a boolean value. If the condition is true, the children
              of the component will be rendered. If the condition is false, the
              children will not be rendered. This is usefull when you want to
              perfert a lot of ternary operators in your JSX code while keeping
              it clean and readable.
            </p>
          </div>
          <div className="flex gap-4">
            <Render>
              <Render.If condition={index === 1}>
                <div className="p-3 mix-blend-difference bg-green-400/50 rounded">
                  <p className="">
                    {
                      "I'm showing because the index is 1 means the condition is true"
                    }
                  </p>
                </div>
              </Render.If>
              <Render.If condition={index === 2}>
                <div className="p-3 mix-blend-difference bg-blue-400/50 rounded">
                  <p className="">
                    {
                      "I'm showing because the index is 2 means the condition is true"
                    }
                  </p>
                </div>
              </Render.If>
              <Render.Else>
                <div className="p-3 bg-gray-200 mix-blend-difference rounded">
                  <p className="text-gray-500">
                    {
                      "I'm showing because the index is not 1 or 2 means the condition is false"
                    }
                  </p>
                </div>
              </Render.Else>
            </Render>
            <div className="flex gap-4">
              <button
                onClick={() => setIndex(1)}
                className="bg-green-400/50 p-2 rounded"
              >
                Set index to 1
              </button>
              <button
                onClick={() => setIndex(2)}
                className="bg-blue-400/50 p-2 rounded"
              >
                Set index to 2
              </button>
              <button
                onClick={() => setIndex(3)}
                className="bg-gray-200 p-2 rounded"
              >
                Set index to 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
