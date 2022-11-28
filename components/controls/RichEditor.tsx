import React, { useEffect, useRef, FC } from "react";
import { Controller } from "react-hook-form";

interface RichEditorProps {
  editorLoaded: boolean;
  control: any;
  name: string;
  errors?: any;
  msg?: string;
}

const RichEditor: FC<RichEditorProps> = ({ editorLoaded, name, control, errors, msg }) => {
  const editorRef: any = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);
  let errMsg = msg ? msg : errors?.[name]?.message;

  return (
    <div>
      {editorLoaded ? (
        <div>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
              <CKEditor
                editor={ClassicEditor}
                data={value}
                onChange={(event: any, editor: any) => {
                  const data = editor.getData();
                  onChange(data);
                }}
              />
            )}
          />
          <p className="text-red-600 mt-1">{errMsg}</p>
        </div>
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default RichEditor;
