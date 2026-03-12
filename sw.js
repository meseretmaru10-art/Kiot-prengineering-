function openPDF(file) {
    const viewer = document.getElementById('pdf-viewer');
    // ፋይሉ መኖሩን ለማረጋገጥ ሙሉ ሊንኩን መጠቀም ትችላለህ
    viewer.src = file; 
    showPage('viewer-page');
}
