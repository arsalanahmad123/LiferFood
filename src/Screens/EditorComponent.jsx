import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
const EditorComponent = () => {
    const [editorContent, setEditorContent] = useState('')

    const saveEditorContent = () => {
        const content = window.tinymce.activeEditor.getContent()
        setEditorContent(content)
    }

    const API_KEY = '5614yqw08gq5wr5tjgn1oe3d4j7sh9g0rub3pm4xv05x78xm'

    return (
        <>
            <div className='lg:w-[100%] mx-auto mt-8 w-[95%]'>
                <Editor
                    apiKey={API_KEY}
                    init={{
                        menubar: false,
                        branding: false,
                        plugins:
                            'anchor autolink charmap codesample emoticons  link lists  searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode   tableofcontents footnotes mergetags autocorrect typography inlinecss',
                        toolbar:
                            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                    initialValue=''
                />
            </div>
            {/* <button
        onClick={saveEditorContent}
        className="bg-gray-300 px-4 py-1.5 rounded-lg text-center float-right"
      >
        Save
      </button> */}

            {editorContent && (
                <div dangerouslySetInnerHTML={{ __html: editorContent }} />
            )}
        </>
    )
}

export default EditorComponent
