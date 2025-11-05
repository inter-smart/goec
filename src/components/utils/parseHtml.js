import parse from "html-react-parser";


export function renderHtml(htmlString, containerClass = "") {
  if (!htmlString) return null;
  return <div className={containerClass}>{parse(htmlString)}</div>;
}