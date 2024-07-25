import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

// this is the editor to save custom content
import PropTypes from "prop-types";
export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name || "editor"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={
              defaultValue || "<p>This is the initial content of the editor</p>"
            }
            init={{
              height: 500,
              menubar: true,
              branding: false,

              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

RTE.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};
