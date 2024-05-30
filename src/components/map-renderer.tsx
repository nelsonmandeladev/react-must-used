import { Children, ReactNode } from "react";

type MapRendererProps<T> = {
  data: T[];
  render: (item: T, index: number) => JSX.Element;
};

export function MapRenderer<T>(props: MapRendererProps<T>): ReactNode {
  return Children.toArray(
    props.data.map((item: T, index: number) => {
      return props.render(item, index);
    }),
  );
}
