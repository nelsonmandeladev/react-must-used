import { ReactNode, ReactElement, FC, Children, isValidElement } from "react";

type RenderProps = {
  children: ReactNode;
};

type RenderIfProps = {
  condition: boolean;
  children: ReactNode;
};

type RenderElseProps = {
  children: ReactNode;
};

const Render: FC<RenderProps> & {
  If: FC<RenderIfProps>;
  Else: FC<RenderElseProps>;
} = (props) => {
  const { children } = props;
  let ConditionMatchElement: ReactElement | null = null;
  let DefaultRenderElement: ReactElement | null = null;

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const childProps = child.props as { condition?: boolean };
      if (childProps.condition === undefined) {
        DefaultRenderElement = child as ReactElement;
      } else if (!ConditionMatchElement && childProps.condition) {
        ConditionMatchElement = child as ReactElement;
      }
    }
  });
  return ConditionMatchElement || DefaultRenderElement || null;
};

const RenderIf: FC<RenderIfProps> = (props) => {
  const { condition, children } = props;
  return condition ? children : null;
};

const RenderElse: FC<RenderElseProps> = (props) => {
  return props.children;
};

Render.If = RenderIf;
Render.Else = RenderElse;

export { Render };
