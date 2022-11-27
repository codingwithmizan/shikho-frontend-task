import React, { useEffect, useRef, FC } from "react";
import { Controller } from "react-hook-form";

interface RichEditorProps {
  editorLoaded: boolean;
  control: any;
  name: string;
}

const RichEditor: FC<RichEditorProps> = ({ editorLoaded, name, control }) => {
  const editorRef: any = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
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
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default RichEditor;

