import { useParams } from "react-router-dom";
import Entry from "../../components/journal/Entry";

// import styles from "./index.module.css";
const MOCK_TEMPLATES = [
  {
    id: "t1",
    title: "Gratitudes",
    body: ""
  },
  {
    id: "t2",
    title: "Challenging Moments",
    body: ""
  },
  {
    id: "t3",
    title: "Processing Emotions",
    body: ""
  },
  {
    id: "t4",
    title: "Retrospective",
    body: ""
  }
];

function TemplateEntry(props) {
  const params = useParams();

  let template;
  if (params.templateId && params.templateId !== "new") {
    template = MOCK_TEMPLATES.find(item => item.id === params.templateId);
  } else {
    template = { title: "", body: "" };
  }

  return <Entry title={template.title} body={template.body} />;
}

export default TemplateEntry;
