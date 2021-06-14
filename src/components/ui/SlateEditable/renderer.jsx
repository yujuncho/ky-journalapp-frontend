const H1Element = props => {
  return <h1 {...props.attributes}>{props.children}</h1>;
};

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const renderElement = props => {
  switch (props.element.type) {
    case "header":
      return <H1Element {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

export const renderPlaceholder = ({ children, attributes }) => (
  <span {...attributes}>
    <span>{children}</span>
  </span>
);
