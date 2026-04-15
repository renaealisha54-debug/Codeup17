// src/editor.js
export const Editor = {
    highlight(code) {
        // Basic regex highlighting
        return code.replace(/\b(const|let|var|function|return)\b/g, '<span class="hl-keyword">$1</span>');
    },
    
    getStats(textarea) {
        const pos = textarea.selectionStart;
        const textBefore = textarea.value.substring(0, pos);
        const line = textBefore.split('\n').length;
        const col = pos - textBefore.lastIndexOf('\n');
        return { line, col };
    }
};
