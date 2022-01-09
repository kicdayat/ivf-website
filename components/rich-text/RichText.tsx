import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Dispatch, SetStateAction } from "react";
/* eslint-disable-next-line */
export interface RichTextProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const RichText = ({ value, onChange }: RichTextProps) => {
  return (
    <ReactQuill
      id="content"
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: {
          container: [
            [
              { header: "1" },
              { header: "2" },
              { header: [3, 4, 5, 6] },
              { font: [] },
            ],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
            ["code-block"],
          ],
        },
      }}
    />
  );
};

export default RichText;
