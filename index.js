const editorArea = document.getElementById('editor-area');
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const togglePreview = document.getElementById('toggle-preview');

editor.onchange = function() {
    document.location.hash = LZString.compressToEncodedURIComponent(editor.value);
}

togglePreview.onclick = function() {
    editorArea.classList.toggle('preview');
    preview.innerHTML = marked.parse(editor.value);
}

document.body.onload = function() {
    if (document.location.hash) {
        editor.value = LZString.decompressFromEncodedURIComponent(document.location.hash.substring(1));
    }
    togglePreview.onclick();
}